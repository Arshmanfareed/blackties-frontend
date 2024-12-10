import React, { useState } from 'react';

/**
 * Custom hook to handle profile image change functionality.
 *
 * This hook provides functionality to:
 * - Display and hide the image change modal.
 * - Update the preview of the currently selected image.
 * - Handle errors and loading states during the image upload process.
 * - Save the updated profile image to the backend and update the user's data.
 *
 * @param {Object} user - The current user's data object.
 * @param {string} token - The authentication token for making requests.
 * @param {Function} updateUser - Callback function to update the user data in the parent component.
 * @returns {Object} - Returns an object containing state variables and functions for managing the image change process.
 */
export default function useHandleChangeImage(user, token, updateUser) {
    // State to manage the visibility of the image change modal.
    const [showImageChange, setShowImageChange] = useState(false);

    // Function to close the image change modal.
    const handleCloseImageChange = () => setShowImageChange(false);

    // Function to open the image change modal.
    const handleShowImageChange = () => setShowImageChange(true);

    // State to store error messages during the image change process.
    const [changeImageError, setChangeImageError] = useState('');

    // State to manage the loading spinner during the image upload process.
    const [changeImageLoader, setChangeImageLoader] = useState(false);

    // State to store the selected image file.
    const [selectedImage, setSelectedImage] = useState(null);

    // State to store the URL of the currently displayed image (either the user's current image or a preview of the selected image).
    const [currentImage, setCurrentImage] = useState(
        user?.image
            ? 'https://blackties-backend.dev.internalstaging.com' + user.image
            : './assets/images/Avatar.png'
    );

    /**
     * Updates the current image preview when a new image is selected.
     *
     * @param {Object} e - The input change event containing the selected file.
     */
    const updateCurrentImage = (e) => {
        const file = e.target.files[0];

        // Save the selected file.
        setSelectedImage(file);
        if (file) {
            // Generate a preview URL for the selected image.
            const fileURL = URL.createObjectURL(file);

            // Update the current image preview.
            setCurrentImage(fileURL);
        }
    };

    /**
     * Handles the saving of the new profile image to the backend.
     *
     * - Validates that an image is selected before proceeding.
     * - Sends the selected image file to the backend API.
     * - Updates the user's data and localStorage upon successful upload.
     * - Displays appropriate error messages if the upload fails.
     *
     * @param {Object} e - The form submit event.
     * @returns {boolean} - Returns false if validation fails, otherwise void.
     */
    const saveProfileImage = async (e) => {
        // Prevent the default form submission behavior.
        e.preventDefault();

        // Reset error messages and show the loading spinner.
        setChangeImageError('');
        setChangeImageLoader(true);

        // Check if an image is selected.
        if (!selectedImage) {
            setChangeImageError("Please select an image first!");
            setChangeImageLoader(false);
            return false;
        }

        try {
            // Create a FormData object to send the image file.
            const formData = new FormData();
            formData.append("image", selectedImage);

            // Send a PUT request to the backend to update the user's profile image.
            const response = await fetch(
                process.env.REACT_APP_BACKEND_URL + `/admin/update-user-image/` + user.id,
                {
                    method: "PUT",
                    // Include the authentication token in the headers.
                    headers: {
                        "x-auth-token": token,
                    },
                    // Attach the image file as the request body.
                    body: formData
                }
            );

            // Parse the JSON response.
            const data = await response.json();

            if (response.ok) {
                // If the request is successful, update the user's image in the parent component and localStorage.
                const updatedUser = { ...user, image: data.data };
                updateUser(updatedUser);
                localStorage.setItem("user", JSON.stringify(updatedUser));

                // Close the image change modal.
                handleCloseImageChange(true);
            } else {
                // Handle errors returned from the backend.
                if (data.error?.message) {
                    setChangeImageError(data.error.message);
                } else {
                    setChangeImageError("Something went wrong. Please try again.");
                }
            }
        } catch (err) {
            // Handle network or unexpected errors.
            setChangeImageError("Something went wrong. Please try again.");
        } finally {
            // Hide the loading spinner after the request is complete.
            setChangeImageLoader(false);
        }
    };

    // Return the state variables and functions for use in components.
    return {
        showImageChange,
        handleShowImageChange,
        handleCloseImageChange,
        currentImage,
        updateCurrentImage,
        changeImageError,
        saveProfileImage,
        changeImageLoader,
    };
}