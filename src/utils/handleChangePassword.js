import React, { useState } from "react";

/**
 * Custom hook to handle the change password functionality.
 *
 * This hook provides functionality to:
 * - Open and close the password change modal.
 * - Manage form state for changing the password.
 * - Validate password inputs before submission.
 * - Handle errors and loading states during the password change process.
 * - Send the new password data to the backend.
 *
 * @param {Object} user - The current user's data object.
 * @param {string} token - The authentication token for making requests.
 * @returns {Object} - Returns an object containing state variables and functions to manage the password change process.
 */
export default function useHandleChangePassword(user, token) {
    // State to manage the visibility of the password change modal.
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    // Function to close the password change modal.
    const closePasswordModal = () => setShowPasswordModal(false);

    // Function to open the password change modal.
    const openPasswordModal = () => setShowPasswordModal(true);

    // State to manage the loading spinner during the password change process.
    const [changePasswordLoader, setChangePasswordLoader] = useState(false);

    // State to store error messages during the password change process.
    const [changePasswordError, setChangePasswordError] = useState('');

    // State to manage the password form data.
    const [changePasswordFormData, setChangePasswordFormData] = useState({
        newPasswordToChange: '',
        newConfirmPasswordToChange: '',
        oldPasswordToChange: ''
    });

    /**
     * Updates the password form data as the user types.
     *
     * @param {Object} e - The input change event.
     */
    const handleChangePasswordForm = (e) => {
        setChangePasswordFormData({
            ...changePasswordFormData,
            [e.target.name]: e.target.value
        });
    };

    /**
     * Handles form submission for changing the password.
     *
     * - Validates input fields before making a request.
     * - Sends a POST request to the backend to update the password.
     * - Displays success or error messages based on the response.
     *
     * @param {Object} e - The form submit event.
     * @returns {boolean} - Returns false if validation fails.
     */
    const handleChangePasswordFormSubmit = async (e) => {
        e.preventDefault();

        // Reset error messages and show the loading spinner.
        setChangePasswordError('');
        setChangePasswordLoader(true);

        // Validate input fields.
        if (!changePasswordFormData.oldPasswordToChange.trim()) {
            setChangePasswordError('Current Password is required');
            setChangePasswordLoader(false);
            return false;
        }
        if (!changePasswordFormData.newPasswordToChange.trim()) {
            setChangePasswordError('New Password is required');
            setChangePasswordLoader(false);
            return false;
        }
        if (!changePasswordFormData.newConfirmPasswordToChange.trim()) {
            setChangePasswordError('Confirm Password is required');
            setChangePasswordLoader(false);
            return false;
        }
        if (changePasswordFormData.newPasswordToChange != changePasswordFormData.newConfirmPasswordToChange) {
            setChangePasswordError('New and Confirm password not match');
            setChangePasswordLoader(false);
            return false;
        }

        // Make an API request to update the password.
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/change-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token,
                },
                body: JSON.stringify({
                    password: changePasswordFormData.newPasswordToChange,
                    oldPassword: changePasswordFormData.oldPasswordToChange,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                // If the request is successful, close the password modal and show a success message.
                setShowPasswordModal(false);
                setShowPasswordSucess(true);
                changePasswordFormData.newPasswordToChange = "";
                changePasswordFormData.newConfirmPasswordToChange = "";
                changePasswordFormData.oldPasswordToChange = "";
            } else {
                // Display an error message from the response or a generic message.
                if (data.error?.message) {
                    setChangePasswordError(data.error.message);
                } else {
                    setChangePasswordError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            // Handle network or unexpected errors.
            setChangePasswordError("Something went wrong. Please try again.");
        } finally {
            // Hide the loading spinner after the request is complete.
            setChangePasswordLoader(false);
        }
    };

    // State to manage the visibility of the success message modal.
    const [showPasswordSucess, setShowPasswordSucess] = useState(false);

    // Function to close the success message modal.
    const handleClosePasswordSucess = () => {
        setShowPasswordSucess(false);
        setShowPasswordModal(false);
    }

    // Function to open the success message modal.
    const handleShowPasswordSucess = () => setShowPasswordSucess(true);

    // Return state variables and functions for use in components.
    return {
        showPasswordModal,
        setChangePasswordError,
        setChangePasswordLoader,
        openPasswordModal,
        closePasswordModal,
        handleChangePasswordFormSubmit,
        handleChangePasswordForm,
        changePasswordError,
        changePasswordLoader,
        showPasswordSucess,
        handleClosePasswordSucess
    };
}