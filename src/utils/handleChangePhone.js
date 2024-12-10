import React, { useState, useEffect } from "react";

/**
 * Custom hook to handle the change phone number functionality.
 *
 * This hook provides functionality to:
 * - Open and close the phone number change modal.
 * - Manage form state for changing the phone number.
 * - Validate phone number inputs before submission.
 * - Send the new phone number and password to the backend for verification.
 * - Handle OTP input, validation, and submission for phone number changes.
 * - Display success or error messages and manage UI states.
 *
 * @param {Object} user - The current user's data object.
 * @param {string} token - The authentication token for making requests.
 * @param {Function} updateUser - Function to update the user object after a successful phone number change.
 * @returns {Object} - Returns an object containing state variables and functions to manage the phone number change process.
 */
export default function useHandleChangePhone(user, token, updateUser) {
    // State to manage the visibility of the phone change modal.
    const [showPhoneModal, setShowPhoneModal] = useState(false);

    // Function to close the phone change modal.
    const closePhoneModal = () => {
        setShowPhoneModal(false);
        setChangePhoneFormData({
            oldPhoneToChange: user.phoneNo,
            newPhoneToChange: '',
            passwordToChange: ''
        });
    }

    // Function to open the phone change modal.
    const openPhoneModal = () => setShowPhoneModal(true);

    // State to manage the form data for changing the phone number.
    const [changePhoneFormData, setChangePhoneFormData] = useState({
        oldPhoneToChange: user.phoneNo,
        newPhoneToChange: '',
        passwordToChange: ''
    });

    /**
     * Updates the phone change form data as the user types.
     *
     * @param {Object} e - The input change event.
     */
    const handleChangePhoneForm = (e) => {
        setChangePhoneFormData({
            ...changePhoneFormData,
            [e.target.name]: e.target.value
        });
    };

    const handleChangePhone = (value) => {
        setChangePhoneFormData({
            ...changePhoneFormData,
            newPhoneToChange: value
        });
    };

    // State to manage the loading spinner during the phone change process.
    const [changePhoneLoader, setChangePhoneLoader] = useState(false);

    // State to store error messages during the phone change process.
    const [changePhoneError, setChangePhoneError] = useState('');

    /**
     * Handles form submission for changing the phone number.
     *
     * - Validates input fields before making a request.
     * - Sends a PATCH request to the backend to update the phone number.
     * - Displays OTP modal if the request is successful.
     *
     * @param {Object} e - The form submit event.
     * @returns {boolean} - Returns false if validation fails.
     */
    const handleChangePhoneFormSubmit = async (e) => {
        e.preventDefault();

        // Reset error messages and show the loading spinner.
        setChangePhoneError('');
        setChangePhoneLoader(true);

        // Validate input fields.
        if (!changePhoneFormData.oldPhoneToChange.trim()) {
            setChangePhoneError('Previous Phone No. is required');
            setChangePhoneLoader(false);
            return false;
        }
        if (!changePhoneFormData.newPhoneToChange.trim()) {
            setChangePhoneError('Phone No. is required');
            setChangePhoneLoader(false);
            return false;
        }
        if (!changePhoneFormData.passwordToChange.trim()) {
            setChangePhoneError('Password is required');
            setChangePhoneLoader(false);
            return false;
        }
        if (changePhoneFormData.oldPhoneToChange == changePhoneFormData.newPhoneToChange) {
            setChangePhoneError('Both phone no.s must not be same');
            setChangePhoneLoader(false);
            return false;
        }

        // Make an API request to update the phone number.
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/user`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token,
                },
                body: JSON.stringify({
                    password: changePhoneFormData.passwordToChange,
                    phoneNo: changePhoneFormData.newPhoneToChange,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                // If successful, open the OTP modal and reset the timer.
                setShowPhoneModal(false);
                setChangePhoneOtpTimer(59);
                setShowPhoneOtpModal(true);
            } else {
                // Display an error message from the response or a generic message.
                if (data.error?.message) {
                    setChangePhoneError(data.error.message);
                } else {
                    setChangePhoneError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            // Handle network or unexpected errors.
            setChangePhoneError("Something went wrong. Please try again.");
        } finally {
            // Hide the loading spinner after the request is complete.
            setChangePhoneLoader(false);
        }
    };

    // State to manage the OTP modal visibility.
    const [showPhoneOtpModal, setShowPhoneOtpModal] = useState(false);

    // Function to close the OTP modal.
    const closePhoneOtpModal = () => {
        setShowPhoneOtpModal(false);
        setChangePhoneFormData({
            oldPhoneToChange: user.phoneNo,
            newPhoneToChange: '',
            passwordToChange: ''
        });
    }

    // Function to back to the phone modal.
    const backToPhoneModal = () => {
        setShowPhoneOtpModal(false);
        setShowPhoneModal(true);
    };

    // State to manage the OTP inputs.
    const [changePhoneOtp, setChangePhoneOtp] = useState(new Array(6).fill(""));

    // State to manage the OTP countdown timer.
    const [changePhoneOtpTimer, setChangePhoneOtpTimer] = useState(0);

    // Update the OTP timer every second when it is greater than 0.
    useEffect(() => {
        if (changePhoneOtpTimer > 0) {
            const interval = setInterval(() => setChangePhoneOtpTimer(changePhoneOtpTimer - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [changePhoneOtpTimer]);

    /**
     * Updates the OTP value as the user types.
     *
     * @param {string} value - The input value.
     * @param {number} index - The index of the OTP input field.
     */
    const handleChangePhoneOtp = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...changePhoneOtp];
            newOtp[index] = value;
            setChangePhoneOtp(newOtp);
            if (value && index < changePhoneOtp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    /**
     * Moves the focus to the previous OTP input field on backspace.
     *
     * @param {Object} e - The keydown event.
     * @param {number} index - The index of the OTP input field.
     */
    const handleChangePhoneBackspace = (e, index) => {
        if (e.key === "Backspace" && changePhoneOtp[index] === "" && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    // State to store error messages during OTP verification.
    const [changePhoneOtpError, setChangePhoneOtpError] = useState('');

    // State to manage the loading spinner during OTP verification.
    const [chnagePhoneOtpLoader, setChangePhoneOtpLoader] = useState(false);

    /**
     * Handles form submission for OTP verification.
     *
     * - Validates OTP inputs before making a request.
     * - Sends a POST request to the backend to verify the OTP.
     * - Updates the user's phone number if the verification is successful.
     *
     * @param {Object} e - The form submit event.
     * @returns {boolean} - Returns false if validation fails.
     */
    const handleChangePhoneOtpSubmit = async (e) => {
        e.preventDefault();

        // Reset error messages and show the loading spinner.
        setChangePhoneOtpError('');
        setChangePhoneOtpLoader(true);

        // Validate OTP inputs.
        if (changePhoneOtp.some((digit) => digit === "")) {
            setChangePhoneOtpError('Otp is required');
            setChangePhoneOtpLoader(false);
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
                    code: changePhoneOtp.join(""),
                    phoneNo: changePhoneFormData.newPhoneToChange,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                // If successful, update the user's phone number and reset the form data.
                const updatedUser = { ...user, phoneNo: changePhoneFormData.newPhoneToChange };
                updateUser(updatedUser);
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setShowPhoneOtpModal(false);
                setShowPhoneSucess(true);
                setChangePhoneFormData({
                    oldPhoneToChange: changePhoneFormData.newPhoneToChange,
                    newPhoneToChange: '',
                    passwordToChange: ''
                });
            } else {
                // Display an error message from the response or a generic message.
                if (data.error?.message) {
                    setChangePhoneOtpError(data.error.message);
                } else {
                    setChangePhoneOtpError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            // Handle network or unexpected errors.
            setChangePhoneOtpError("Something went wrong. Please try again.");
        } finally {
            // Hide the loading spinner after the request is complete.
            setChangePhoneOtpLoader(false);
        }
    };

    // State to manage the visibility of the phone change success modal.
    const [showPhoneSucess, setShowPhoneSucess] = useState(false);

    // Function to close the phone change success modal.
    const handleClosePhoneSucess = () => {
        setShowPhoneSucess(false);
        setShowPhoneModal(false);
    }

    // State to control whether the "Resend OTP" button is enabled or disabled
    const [resendPhoneOtpButton, setResendPhoneOtpButton] = useState(true);

    /**
     * Handles the resending of the OTP for phone verification.
     *
     * - Disables the "Resend OTP" button to prevent multiple clicks during the request.
     * - Sends a request to the backend to resend the OTP.
     * - Handles both success and error responses.
     * - Resets the OTP timer on success or displays an error message on failure.
     *
     * @param {Object} e - The event triggered by the "Resend OTP" button click.
     */
    const resendPhoneOtp = async (e) => {
        e.preventDefault();

        // Disables the "Resend OTP" button to prevent multiple clicks
        setResendPhoneOtpButton(false);

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
                setChangePhoneOtpTimer(59);
            } else {
                // Display an error message from the response or a generic message.
                if (data.error?.message) {
                    setChangePhoneOtpError(data.error.message);
                } else {
                    setChangePhoneOtpError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            // In case of a network or unexpected error, display a generic error message
            setChangePhoneOtpError("Something went wrong. Please try again.");
        } finally {
            // Re-enable the "Resend OTP" button once the process is complete
            setResendPhoneOtpButton(true);
        }
    };

    // Return the state variables and functions for use in components.
    return {
        openPhoneModal,
        showPhoneModal,
        closePhoneModal,
        handleChangePhoneForm,
        changePhoneFormData,
        changePhoneError,
        handleChangePhoneFormSubmit,
        changePhoneLoader,
        showPhoneOtpModal,
        closePhoneOtpModal,
        changePhoneOtp,
        handleChangePhoneOtp,
        handleChangePhoneBackspace,
        changePhoneOtpError,
        changePhoneOtpTimer,
        chnagePhoneOtpLoader,
        handleChangePhoneOtpSubmit,
        handleClosePhoneSucess,
        showPhoneSucess,
        resendPhoneOtpButton,
        resendPhoneOtp,
        backToPhoneModal,
        handleChangePhone
    };
}