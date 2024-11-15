import React, { useState } from 'react';

const Addcarimages = () => {
  const [fileInputs, setFileInputs] = useState([true]); // Track which file inputs are enabled

  const handleFileChange = (e, index) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgPreview = document.createElement('div');
        imgPreview.className = 'upload_data-wrap';
        imgPreview.innerHTML = `<img src="${event.target.result}" alt="Image Preview" style="max-width: 100%; height: auto;">`;
        e.target.closest('.upload-file-group').appendChild(imgPreview);
      };
      reader.readAsDataURL(file);
      // Enable the next file input
      setFileInputs((prev) => {
        const newInputs = [...prev];
        newInputs[index + 1] = true; // Enable the next input
        return newInputs;
      });
    }
  };

  return (
    <div className="Canvassec add_vehicle_images">
      <div className="col-lg-12 col-md-12">
        <label htmlFor="label-control"></label>
        <div className="row file-upload-wrap">
          {fileInputs.map((enabled, index) => (
            <div key={index} className="col-lg-2 col-md-2 upload_img_preview_wrapper">
              <div className="upload-file-group">
                <input
                  type="file"
                  className="upload_img_preview"
                  onChange={(e) => handleFileChange(e, index)}
                  disabled={!enabled}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addcarimages;
