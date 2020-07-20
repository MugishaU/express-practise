const form = document.getElementById("string");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let originalText = event.target.input.value;

  const options = {
    method: "POST",
    body: JSON.stringify(originalText),
  };

  fetch("http://localhost:3000/", options)
    .then((r) => r.json())
    .then((data) => {
      result.textContent = data;
    })
    .catch(console.warn);
});
