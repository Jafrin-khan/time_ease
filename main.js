let bt = document.getElementById("getTimezone");

if(bt !== null){
bt.addEventListener("click",Timezone);
}

function Timezone(){
  let time = document.getElementById("showTimezone");
  time.innerHTML = Date();
}

let getNewsBtn = document.getElementById("getNews");

if (getNewsBtn !== null) {
  getNewsBtn.addEventListener("click", fetchNews);
}

async function fetchNews() {
  let newsDisplay = document.getElementById("newsDisplay");
  try {
    const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_27537578588ed8db9359e64927cbacb85b0e4&q=pegasus&language=en");
    const newsData = await response.json();

    let newsHtml = "";

    if (newsData.status === "success" && newsData.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * newsData.results.length);
      const firstNews = newsData.results[randomIndex];
      
      newsHtml = `
        <h3>${firstNews.title}</h3>
        <p>${firstNews.description}</p>
        <a href="${firstNews.link}" target="_blank">Read more</a>
      `;
    } else {
      newsHtml = "No news available.";
    }

    newsDisplay.innerHTML = newsHtml;
  } catch (error) {
    newsDisplay.innerHTML = "Error fetching news.";
    console.error("News fetch error:", error);
  }
}

let getJokeBtn = document.getElementById("getJoke");

if (getJokeBtn !== null) {
  getJokeBtn.addEventListener("click", fetchJoke);
}

async function fetchJoke() {
  let jokeDisplay = document.getElementById("jokeDisplay");
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const jokeData = await response.json();

    if (jokeData.type === "single") {
      jokeDisplay.innerHTML = jokeData.joke;
    } else if (jokeData.type === "twopart") {
      jokeDisplay.innerHTML = `${jokeData.setup}<br>${jokeData.delivery}`;
    } else {
      jokeDisplay.innerHTML = "Failed to fetch joke.";
    }
  } catch (error) {
    jokeDisplay.innerHTML = "Failed to fetch joke.";
    console.error("Joke fetch error:", error);
  }
}
