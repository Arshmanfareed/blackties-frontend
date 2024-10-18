import React, { useRef, useEffect, useState } from 'react';

const SignatureUpload = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastEvent, setLastEvent] = useState(null);
  const [color, setColor] = useState('#fff'); // Default color for drawing
  const [weight, setWeight] = useState(3);
  const [fileInputs, setFileInputs] = useState([true]); // Track which file inputs are enabled
  const [disablePen, setDisablePen] = useState(false); // State to manage pen disable

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is available
    const context = canvas.getContext('2d');
  
    // Resize the canvas properly based on its parent's size
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear on resize
    };
  
    // Create a ResizeObserver to detect changes in canvas parent size
    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });
  
    // Observe the canvas parent element for size changes
    const parent = canvas.parentElement;
    if (parent) {
      observer.observe(parent);
    }
  
    // Call resize initially to ensure correct canvas size
    resizeCanvas();
  
    return () => {
      if (parent) {
        observer.unobserve(parent);
      }
    };
  }, [canvasRef]);
  
  

  const getMousePos = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handleMouseDown = (e) => {
    if (disablePen) return; // Check if pen is disabled
    const pos = getMousePos(e);
    setLastEvent(pos);
    setIsDrawing(true);
    console.log('Mouse Down:', pos); // Debug log
  };

  const handleMouseMove = (e) => {
    if (!isDrawing || !lastEvent) return; // Ensure lastEvent exists before drawing
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const currentPos = getMousePos(e);

    context.beginPath();
    context.moveTo(lastEvent.x, lastEvent.y);
    context.lineTo(currentPos.x, currentPos.y);
    context.strokeStyle = color;
    context.lineWidth = weight;
    context.stroke();

    setLastEvent(currentPos);
    console.log('Mouse Move:', currentPos); // Debug log
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setLastEvent(null); // Clear the last event to prevent future errors
    console.log('Mouse Up'); // Debug log
  };

  const handleMouseLeave = () => {
    setIsDrawing(false);
    setLastEvent(null); // Reset on mouse leave
    console.log('Mouse Leave'); // Debug log
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    handleMouseUp();
  };

  const setIsDrawingCanv = (event) => {
    event.preventDefault();
    setDisablePen((prev) => {
      console.log(`Drawing ${!prev ? 'enabled' : 'disabled'}`); // Debug log
      return !prev; // Toggle the disable state
    });
  };

  const clearSignature = (event) => {
     event.preventDefault();
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log('Signature cleared'); // Debug log
  };

  const handleFileChange = (e, index) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgPreview = document.createElement('div');
        imgPreview.className = 'upload_data-wrap';
        imgPreview.innerHTML = `<img src="${event.target.result}" alt="Image Preview" style="max-width: 100%; height: auto;">  `;
        // <button class="remover" onClick="deleteUploadedPic(this)" id="delete_pic">Delete</button>`;
        // imgPreview.innerHTML = ``;
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
// const deleteUploadedPic = (e, event) => {
//     event.preventDefault(); // Prevent default button behavior
//     const uploadDataWrap = e.target.closest('.upload_data-wrap'); // Find the closest wrapper
//     if (uploadDataWrap) {
//         uploadDataWrap.remove(); // Remove the wrapper if it exists
//     }
// };


  return (
    <div className="Canvassec">
      <div className="col-lg-12 col-md-12">
        <label htmlFor="label-control">Upload Document</label>
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
      <div className="col-lg-12 col-md-12">
        <div className="signature-wrapper">
          <label htmlFor="label-control">Signature</label>
          <div id="signature">
          <canvas
  ref={canvasRef}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseLeave}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
  style={{ border: '1px solid black', cursor: 'crosshair' }}
></canvas>

            <div className="controls">
              <button className="remover" onClick={clearSignature} id="clearSig">
                <img src="./assets/images/dashboard/ph_eraser-fill.png" alt="" />
              </button>
              <button
                className="pen"
                id='disable_pen'
                onClick={setIsDrawingCanv}
              >
                <img src="./assets/images/dashboard/mingcute_signature-line.svg" alt="" />
                {/* {disablePen ? 'Enable Drawing' : 'Disable Drawing'} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureUpload;
