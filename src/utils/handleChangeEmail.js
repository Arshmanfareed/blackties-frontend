import React, { useState, useEffect } from "react";

/**
 * Custom hook to handle the change email functionality.
 *
 * This hook provides functionality to:
 * - Open and close the email change modal.
 * - Manage form state for changing the email.
 * - Validate email inputs before submission.
 * - Send the new email and password to the backend for verification.
 * - Handle OTP input, validation, and submission for email changes.
 * - Display success or error messages and manage UI states.
 *
 * @param {Object} user - The current user's data object.
 * @param {string} token - The authentication token for making requests.
 * @param {Function} updateUser - Function to update the user object after a successful email change.
 * @returns {Object} - Returns an object containing state variables and functions to manage the email change process.
 */
export default function useHandleChangeEmail(user, token, updateUser) {
    // State to manage the visibility of the email change modal.
    const [showEmailModal, setShowEmailModal] = useState(false);

    // Function to close the email change modal.
    const closeEmailModal = () => {
        setShowEmailModal(false);
        setEmailFormData({
            oldEmailToChange: user.email,
            newEmailToChange: '',
            passwordToChange: ''
        });
    }

    // Function to open the email change modal.
    const openEmailModal = () => setShowEmailModal(true);

    // State to manage the form data for changing the email.
    const [changeEmailFormData, setEmailFormData] = useState({
        oldEmailToChange: user.email,
        newEmailToChange: '',
        passwordToChange: ''
    });

    /**
     * Updates the email change form data as the user types.
     *
     * @param {Object} e - The input change event.
     */
    const handleChangeEmailForm = (e) => {
        setEmailFormData({
            ...changeEmailFormData,
            [e.target.name]: e.target.value
        });
    };

    // State to manage the loading spinner during the email change process.
    const [changeEmailLoader, setChangeEmailLoader] = useState(false);

    // State to store error messages during the email change process.
    const [changeEmailError, setChangeEmailError] = useState('');

    /**
     * Handles form submission for changing the email.
     *
     * - Validates input fields before making a request.
     * - Sends a PATCH request to the backend to update the email.
     * - Displays OTP modal if the request is successful.
     *
     * @param {Object} e - The form submit event.
     * @returns {boolean} - Returns false if validation fails.
     */
    const handleChangeEmailFormSubmit = async (e) => {
        e.preventDefault();

        // Reset error messages and show the loading spinner.
        setChangeEmailError('');
        setChangeEmailLoader(true);

        // Validate input fields.
        if (!changeEmailFormData.oldEmailToChange.trim()) {
            setChangeEmailError('Previous Email is required');
            setChangeEmailLoader(false);
            return false;
        }
        if (!changeEmailFormData.newEmailToChange.trim()) {
            setChangeEmailError('Email is required');
            setChangeEmailLoader(false);
            return false;
        }
        if (!changeEmailFormData.passwordToChange.trim()) {
            setChangeEmailError('Password is required');
            setChangeEmailLoader(false);
            return false;
        }
        if (changeEmailFormData.oldEmailToChange == changeEmailFormData.newEmailToChange) {
            setChangeEmailError('Both emails must not be same');
            setChangeEmailLoader(false);
            return false;
        }

        // Make an API request to update the email.
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/user`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token,
                },
                body: JSON.stringify({
                    password: changeEmailFormData.passwordToChange,
                    email: changeEmailFormData.newEmailToChange,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                // If successful, open the OTP modal and reset the timer.
                setShowEmailModal(false);
                setChangeEmailOtpTimer(59);
                setShowEmailOtpModal(true);
            } else {
                // Display an error message from the response or a generic message.
                if (data.error?.message) {
                    setChangeEmailError(data.error.message);
                } else {
                    setChangeEmailError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            // Handle network or unexpected errors.
            setChangeEmailError("Something went wrong. Please try again.");
        } finally {
            // Hide the loading spinner after the request is complete.
            setChangeEmailLoader(false);
        }
    };

    // State to manage the OTP modal visibility.
    const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);

    // Function to close the OTP modal.
    const closeEmailOtpModal = () => {
        setShowEmailOtpModal(false);
        setEmailFormData({
            oldEmailToChange: user.email,
            newEmailToChange: '',
            passwordToChange: ''
        });
    };

    // Function to back to the email modal.
    const backToEmailModal = () => {
        setShowEmailOtpModal(false);
        setShowEmailModal(true);
    };

    // State to manage the OTP inputs.
    const [changeEmailOtp, setChangeEmailOtp] = useState(new Array(6).fill(""));

    // State to manage the OTP countdown timer.
    const [changeEmailOtpTimer, setChangeEmailOtpTimer] = useState(0);

    // Update the OTP timer every second when it is greater than 0.
    useEffect(() => {
        if (changeEmailOtpTimer > 0) {
            const interval = setInterval(() => setChangeEmailOtpTimer(changeEmailOtpTimer - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [changeEmailOtpTimer]);

    /**
     * Updates the OTP value as the user types.
     *
     * @param {string} value - The input value.
     * @param {number} index - The index of the OTP input field.
     */
    const handleChangeEmailOtp = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...changeEmailOtp];
            newOtp[index] = value;
            setChangeEmailOtp(newOtp);
            if (value && index < changeEmailOtp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    /**
     * Handles the backspace key in OTP inputs.
     *
     * @param {Object} e - The keydown event.
     * @param {number} index - The index of the OTP input field.
     */
    const handleChangeEmailBackspace = (e, index) => {
        if (e.key === "Backspace" && changeEmailOtp[index] === "" && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    // State to store error messages during the OTP submission process.
    const [changeEmailOtpError, setChangeEmailOtpError] = useState('');

    // State to manage the loading spinner during the OTP submission process.
    const [changeEmailOtpLoader, setChangeEmailOtpLoader] = useState(false);

    /**
     * Handles OTP submission for verifying the email change.
     *
     * - Validates the OTP inputs before making a request.
     * - Sends the OTP to the backend for verification.
     * - Updates the user object on success.
     *
     * @param {Object} e - The form submit event.
     */
    const handleChangeEmailOtpSubmit = async (e) => {
        e.preventDefault();

        // Reset error messages and show the loading spinner.
        setChangeEmailOtpError('');
        setChangeEmailOtpLoader(true);

        // Validate the OTP inputs.
        if (changeEmailOtp.some((digit) => digit === "")) {
            setChangeEmailOtpError('Otp is required');
            setChangeEmailOtpLoader(false);
            return false;
        }

        // Make an API request to verify the OTP.
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/verify-code`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: user.id,
                    code: changeEmailOtp.join(""),
                }),
            });
            const data = await response.json();
            if (response.ok) {
                // If successful, update the user object and show the success modal.
                const updatedUser = { ...user, email: changeEmailFormData.newEmailToChange };
                updateUser(updatedUser);
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setShowEmailOtpModal(false);
                setShowEmailSucess(true);
                setEmailFormData({
                    oldEmailToChange: user.email,
                    newEmailToChange: '',
                    passwordToChange: ''
                });
            } else {
                // Display an error message from the response or a generic message.
                if (data.error?.message) {
                    setChangeEmailOtpError(data.error.message);
                } else {
                    setChangeEmailOtpError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            // Handle network or unexpected errors.
            setChangeEmailOtpError("Something went wrong. Please try again.");
        } finally {
            // Hide the loading spinner after the request is complete.
            setChangeEmailOtpLoader(false);
        }
    };

    // State to manage the visibility of the success modal.
    const [showEmailSucess, setShowEmailSucess] = useState(false);

    // Function to close the success modal and reset all states.
    const handleCloseEmailSucess = () => {
        setShowEmailSucess(false);
        setShowEmailOtpModal(false);
        setShowEmailModal(false);
    }

    // State to control whether the "Resend OTP" button is enabled or disabled
    const [resendEmailOtpButton, setResendEmailOtpButton] = useState(true);

    /**
     * Handles the resending of the OTP for email verification.
     *
     * - Disables the "Resend OTP" button to prevent multiple clicks during the request.
     * - Sends a request to the backend to resend the OTP.
     * - Handles both success and error responses.
     * - Resets the OTP timer on success or displays an error message on failure.
     *
     * @param {Object} e - The event triggered by the "Resend OTP" button click.
     */
    const resendEmailOtp = async (e) => {
        e.preventDefault();

        // Disables the "Resend OTP" button to prevent multiple clicks
        setResendEmailOtpButton(false);

        // Make an API request to resend an OTP.
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/resend-otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: user.id,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                // If the response is successful, reset the OTP timer (set to 59 seconds)
                setChangeEmailOtpTimer(59);
            } else {
                // Display an error message from the response or a generic message.
                if (data.error?.message) {
                    setChangeEmailOtpError(data.error.message);
                } else {
                    setChangeEmailOtpError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            // In case of a network or unexpected error, display a generic error message
            setChangeEmailOtpError("Something went wrong. Please try again.");
        } finally {
            // Re-enable the "Resend OTP" button once the process is complete
            setResendEmailOtpButton(true);
        }
    };

    // Return state variables and functions to manage the email change process.
    return {
        openEmailModal,
        showEmailModal,
        closeEmailModal,
        handleChangeEmailForm,
        changeEmailFormData,
        changeEmailError,
        handleChangeEmailFormSubmit,
        changeEmailLoader,
        showEmailOtpModal,
        closeEmailOtpModal,
        changeEmailOtp,
        handleChangeEmailOtp,
        handleChangeEmailBackspace,
        changeEmailOtpError,
        setChangeEmailOtpTimer,
        changeEmailOtpLoader,
        handleChangeEmailOtpSubmit,
        changeEmailOtpTimer,
        showEmailSucess,
        handleCloseEmailSucess,
        resendEmailOtpButton,
        resendEmailOtp,
        backToEmailModal
    };
}