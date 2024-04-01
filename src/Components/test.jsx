import React, { useRef, useState } from "react";
import { Label, Modal } from "flowbite-react";

const ComponentAdd = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        position: "",
        company: "",
        type: "",
        startDate: "",
        endDate: "",
        description: "",
    });

    const [errors, setErrors] = useState({});

    const [openModal, setOpenModal] = useState(false);
    const emailInputRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.position) {
            newErrors.position = "*Position is Empty";
            return newErrors; // Return immediately if position is empty
        }
        if (!formData.company) {
            newErrors.company = "*Company is Empty";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData);
            setOpenModal(false);
            setFormData({
                position: "",
                company: "",
                type: "",
                startDate: "",
                endDate: "",
                description: "",
            });
            setErrors({});
        }
    };

    return (
        <>
            <button
                className="btn bg-gray-500 btn-outline hover:bg-blue-500"
                onClick={() => setOpenModal(true)}
            >
                ADD NEW PROJECT
            </button>
            <Modal
                show={openModal}
                size="md"
                popup
                onClose={() => setOpenModal(false)}
                initialFocus={emailInputRef}
            >
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                                Input Your Information
                            </h3>
                            <div className="mb-2 block">
                                <Label htmlFor="position">
                                    POSITION
                                    {errors.position && (
                                        <span className="ml-1 text-red-500">{errors.position}</span>
                                    )}
                                </Label>
                                <input
                                    id="position"
                                    name="position"
                                    type="text"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    ref={emailInputRef}
                                    placeholder="UX-UI Design"
                                    required
                                    className={`form-input rounded-lg w-full ${errors.position && "border-red-500"
                                        }`}
                                />
                            </div>
                            <div className="mb-2 block">
                                <Label htmlFor="company">
                                    COMPANY
                                    {errors.company && (
                                        <span className="ml-1 text-red-500">{errors.company}</span>
                                    )}
                                </Label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="KSHRD Center"
                                    required
                                    className={`form-input rounded-lg w-full ${errors.company && "border-red-500"
                                        }`}
                                />
                            </div>
                            {/* Add other form fields here */}
                            <div className="w-full flex justify-end">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ComponentAdd;
