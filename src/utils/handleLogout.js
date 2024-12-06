import { useNavigate } from 'react-router-dom';

/**
 * Custom hook to handle user logout functionality.
 * 
 * This hook clears user authentication data from localStorage
 * and redirects the user to the appropriate login page based on their role.
 */
export default function useHandleLogout() {
    // React Router hook to programmatically navigate between routes.
    const navigate = useNavigate();

    /**
     * Handles the logout process:
     * - Removes user token and data from localStorage.
     * - Redirects to the appropriate login page depending on the user's role.
     */
    const handleLogout = () => {
        // Retrieve user information from localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Clear authentication data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redirect based on user role
        if (user && user.role == "ADMIN") {
            // Navigate to admin login page for admin users
            navigate('/admin-login');
        } else {
            // Navigate to general login page for non-admin users
            navigate('/login');
        }
    };

    // Return the logout handler function
    return handleLogout;
}