const endpoint = "entries"
const language_code = "en-us"
const word_id = "example"

const url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word_id}`
var headers = {
    "app_id": "46b7f185",
    "app_key": "b0c747f6ecd5d547bc76cbb121380b11",
    "cache-control": "no-cache",
    "postman-token": "7036f406-7b96-a8ba-7bb4-673e2c0bdc60",
}

const fetch = require("node-fetch");

const getData = async url => {
  try {
    const response = await fetch(url, { headers : headers });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getData(url);