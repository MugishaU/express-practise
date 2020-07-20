// const r_form = document.getElementById("reverse_form");
const result = document.getElementById("result");
const m_form = document.getElementById("meme_form");

// r_form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let originalText = event.target.input.value;

//   const options = {
//     method: "POST",
//     body: JSON.stringify(originalText),
//   };

//   fetch("http://localhost:3000/reverse", options)
//     .then((r) => r.json())
//     .then((data) => {
//       result.textContent = data;
//     })
//     .catch(console.warn);
// });

m_form.addEventListener("submit", (event) => {
  event.preventDefault();
  let originalText = event.target.input.value;

  const options = {
    method: "POST",
    body: JSON.stringify(originalText),
  };

  fetch("http://localhost:3000/meme", options)
    .then((r) => r.json())
    .then((data) => {
      result.textContent = data;
    })
    .catch(console.warn);

  m_form.style.display = "none";
  document.getElementById("img_box").style.visibility = "visible";
});
