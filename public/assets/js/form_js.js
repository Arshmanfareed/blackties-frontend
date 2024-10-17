
    // Form Step Js
    var totalSteps = $(".steps li").length;

$(".submit").on("click", function () {
  return false;
});

$(".steps li:nth-of-type(1)").addClass("active");
$(".myContainer .form-container:nth-of-type(1)").addClass("active");

$(".form-container").on("click", ".nextBtn", function () {
  $(".steps li")
    .eq($(this).parents(".form-container").index() + 1)
    .addClass("active");
  $(this)
    .parents(".form-container")
    .removeClass("active")
    .next()
    .addClass("active flipInX");
});

$(".form-container").on("click", ".prevBtn", function () {
  $(".steps li")
    .eq($(this).parents(".form-container").index() - totalSteps)
    .removeClass("active");
  $(this)
    .parents(".form-container")
    .removeClass("active flipInX")
    .prev()
    .addClass("active flipInY");
});

/*=========================================================
*     If you won't to make steps clickable, Please comment below code 
=================================================================*/
$(".steps li").on("click", function () {
  var stepVal = $(this).find("span").text();
  $(this).prevAll().addClass("active");
  $(this).addClass("active");
  $(this).nextAll().removeClass("active");
  $(".myContainer .form-container").removeClass("active flipInX");
  $(".myContainer .form-container:nth-of-type(" + stepVal + ")").addClass(
    "active flipInX"
  );
});


document.getElementById('accident').addEventListener('change', function () {
    const accidentForm = document.querySelector('.accident_form_main_container');
    if (this.checked) {
      accidentForm.style.display = 'block'; // Show the accident form when checked
    } else {
      accidentForm.style.display = 'none'; // Hide the accident form when unchecked
    }
  });
  document.getElementById("add_accident").addEventListener("click", function() {
    // Clone the div
    let originalDiv = document.getElementById("accident_form_template");
    let clone = originalDiv.cloneNode(true);

    // Remove the ID from the cloned div to avoid duplicate IDs
    clone.removeAttribute("id");

    // Insert the remove button HTML after the cloned div
    clone.insertAdjacentHTML("beforeend", "<button class='removeBtn'>Remove</button>");

    // Append the cloned div to the target container
    document.getElementById("accident_forms_container").appendChild(clone);

    // Add event listener to the remove button
    const removeButton = clone.querySelector(".removeBtn"); // Select the newly added button
    removeButton.addEventListener("click", function() {
        clone.remove();
    });
});



$(document).ready(function () {
  var canvas = $("canvas")[0];
  var context = canvas.getContext("2d");
  var lastEvent;
  var mouseDown = false;
  var color = "#fff";
  var weight = 3;

  $(document).on("click", "#clearSig", function () {
    $("#download").prop("disabled", true);
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Download canvas as image
  $(document).on("click", "#download", function () {
    var img = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.href = img;
    link.download = "signature.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  $(document).on("click", "#disable_pen", function () {
    var disable = $(this).data("disable");
    $(this).data("disable", !disable);
  });

  // Function to set canvas dimensions
  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  // Resize canvas on window resize
  $(window).resize(resizeCanvas);
  resizeCanvas();
  // Function to get mouse position relative to the canvas
  function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  // Draw on the canvas on mouse events
  $(canvas)
    .mousedown(function (e) {
      if ($("#disable_pen").data("disable")) {
        return;
      }
      lastEvent = getMousePos(canvas, e);
      mouseDown = true;
    })
    .mousemove(function (e) {
      if ($("#disable_pen").data("disable")) {
        return;
      }
      if (mouseDown) {
        var currentPos = getMousePos(canvas, e);
        context.beginPath();
        context.moveTo(lastEvent.x, lastEvent.y);
        context.lineTo(currentPos.x, currentPos.y);
        context.strokeStyle = color;
        context.lineWidth = weight;
        context.stroke();
        lastEvent = currentPos;
        $("#download").prop("disabled", false);
      }
    })
    .mouseup(function () {
      if ($("#disable_pen").data("disable")) {
        return;
      }
      mouseDown = false;
    })
    .mouseleave(function () {
      if ($("#disable_pen").data("disable")) {
        return;
      }
      mouseDown = false;
    });
});

$(document).ready(function () {
  $(document).on("change", ".upload_img_preview", function () {
    if ($(this).prop("disabled")) {
      console.error("Your input is disabled");
      return;
    }
    const files = this.files;
    if (files.length > 0) {
      const file = files[0];
      const fileType = file.type;
      const reader = new FileReader();
      reader.onload = function (e) {
        $(this)
          .closest(".upload-file-group")
          .append(
            `<div class="upload_data-wrap"><img src='${e.target.result}' alt='Image Preview' style='max-width: 100%; height: auto;'></div>`
          );
      }.bind(this);
      reader.readAsDataURL(file);
      $(this)
        .closest(".upload_img_preview_wrapper")
        .next()
        .find(".upload_img_preview")
        .prop("disabled", false);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".dashboard-menu a");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function() {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdown if clicking outside of it
  document.addEventListener('click', function(event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
      }
  });
});
