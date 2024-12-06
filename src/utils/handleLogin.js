import { useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 * Custom hook to handle user login functionality.
 *
 * This hook manages the login process by:
 * - Validating form data.
 * - Sending a login request to the backend.
 * - Handling response and updating the UI accordingly.
 * - Storing the authentication token and user data in localStorage.
 * - Navigating to the welcome page upon successful login.
 * 
 * @param {boolean} [isAdminLogin=false] - Determines whether the login is for an admin.
 */
export default function useHandleLogin(isAdminLogin = false) {
    // State to manage error messages.
    const [error, setError] = useState('');

    // State to manage the loading state of the login process.
    const [loading, setLoading] = useState(false);

    // React Router's `useNavigate` hook for programmatic navigation.
    const navigate = useNavigate();

    /**
     * Handles the login process:
     * - Validates the email and password fields.
     * - Sends an authentication request to the backend.
     * - Processes the response and updates the UI or displays error messages.
     *
     * @param {Object} formData - The login form data containing email and password.
     * @returns {boolean} - Returns true if login is successful, otherwise false.
     */
    const handleLogin = async (formData) => {
        // Set the loading state to true and clear any previous errors.
        setLoading(true);
        setError('');

        // Validate email field.
        if (!formData.email.trim()) {
            setError("Email is required");
            setLoading(false);
            return false;
        }

        // Regular expression to validate email format.
        const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
        if (!validateEmail(formData.email)) {
            setError("Email address is invalid");
            setLoading(false);
            return false;
        }

        // Validate password field.
        if (!formData.password.trim()) {
            setError("Password is required");
            setLoading(false);
            return false;
        }
        try {
            // Send login request to the backend.
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Parse the response data.
            const data = await response.json();
            if (response.ok) {
                // If response is successful, extract token and user data.
                const token = data.data.authToken || null;
                const user = data.data || null;

                // Store token and user data in localStorage.
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                // Clear any previous errors and set loading state to false.
                setError("");
                setLoading(false);

                // Check if the login is for admin access
                if (isAdminLogin) {
                    // If the user exists and has an ADMIN role
                    if (user && user.role == "ADMIN") {
                        // Navigate to the admin dashboard page for admin users
                        navigate('/admin-dashboard-main');
                    } else {
                        // If the user is not an admin, set an error message
                        setError("User is not an admin");
                    }
                } else {
                    // Navigate to the general welcome page
                    navigate('/welcome');
                }
                return true;
            } else {
                // Handle various error responses from the backend.
                if (data.error?.message) {
                    setError(data.error.message);
                } else if (response.status === 404) {
                    setError("User not found. Please register first.");
                } else if (response.status === 401) {
                    setError("Password is incorrect. Please try again.");
                } else {
                    setError("Invalid login credentials. Please try again.");
                }
            }
        } catch (err) {
            // Handle any network or unexpected errors.
            setError("Something went wrong. Please try again.");
        } finally {
            // Set the loading state to false after request completes.
            setLoading(false);
        }

        // Return false if login fails.
        return false;
    };

    // Return the state and the handleLogin function for use in components.
    return { loading, error, handleLogin };
}