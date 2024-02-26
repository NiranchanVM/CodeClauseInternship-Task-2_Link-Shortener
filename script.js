var button = document.getElementById("btn");
var copy = document.getElementById("copy");

// convert btn event
button.addEventListener("click", () => {
  var input = document.getElementById("input");
  var output = document.getElementById("output");

  // add your api token here
  const accessToken = "123961dc8e483b9fb3a024581eb9834f7162c555";
  const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

  const longUrl = input.value;

  fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ long_url: longUrl }),
  })
    .then((response) => response.json())
    .then((data) => (output.value = data.link))
    .catch((error) => console.error(error));
});

//copy button

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  copy.innerHTML = "Copied!";

  setTimeout(() => {
    copy.innerHTML = "copy";
  }, 1000);
});

