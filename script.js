document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const radios = document.querySelectorAll('input[name="unit"]');
  
    radios.forEach((radio, index) => {
      radio.addEventListener("change", () => {
        boxes.forEach((box) => box.classList.remove("expanded"));
        document.querySelectorAll(".box-content").forEach((content) => {
          content.style.display = "none";
        });
  
        if (radio.checked) {
          const selectedBox = boxes[index];
          selectedBox.classList.add("expanded");
  
          const content = selectedBox.querySelector(".box-content");
          if (content) {
            content.style.display = "block";
          }
        }
      });
    });
  });
  