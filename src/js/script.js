const button = document.querySelector(".btn");
const adviceId = document.querySelector(".id");
const advice = document.querySelector(".quote");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const getQuote = async function () {
  try {
    const data = await fetch("https://api.adviceslip.com/advice");
    const res = await data.json();
    adviceId.innerHTML = res.slip.id;
    advice.innerHTML = res.slip.advice;
  } catch (err) {
    console.error("Network not active");
  }
};

button.addEventListener("click", function () {
  getQuote();
});
