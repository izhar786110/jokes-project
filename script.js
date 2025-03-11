const API = "https://api.api-ninjas.com/v1/dadjokes";
const API_KEY = "P1ZKa3tQkyVd9AP5m0xWwA==UrAtl9WiFSr8cYrK";

const btn = document.querySelector("button");
const jokeContainer = document.querySelector(".joke-container");

async function getData(url) {
  const response = await fetch(url, {
    headers: { "X-Api-Key": API_KEY },
  });
  const result = await response.json();
  return result;
}

// event on button > generates joke and displays
btn.addEventListener("click", (e) => generateJoke());

// generate joke function fetch data > calls disply joke
async function generateJoke() {
  let data = await getData(API);
  console.log(data);
  jokeContainer.innerText = "Cooking a joke for you..."
  setTimeout(() => displayJoke(data), 2500);
}

function displayJoke(arr) {
  jokeContainer.innerHTML = "";
  let joke = arr[0].joke;
  console.log(joke);
  const jokePara = document.createElement("p");
  jokePara.innerText = joke;
  jokeContainer.append(jokePara);
}