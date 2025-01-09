const messageForm = document.getElementById("message-form");
const messageBoard = document.getElementById("msg-board");
let savedMessagesAsString = localStorage.getItem("messages");
const newAlbum = document.getElementById("add-form");
const funFacts = document.getElementById("facts");
const marquee = document.getElementById("marquee");
let tableBody = document.querySelector("tbody");
const image = document.getElementById("nick");

//1: Dynamic Content Update

const colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "black",
  "white",
  "purple",
  "orange",
];

setInterval(() => {
  let currColor = colors[Math.floor(Math.random() * colors.length)];
  marquee.style.color = currColor;
//(date formatting code borrowed from internet)
const formattedDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
}).format(Date.now());
marquee.innerText = formattedDate;
}, 500);


const currentListening = [
  { artist: "Love", album: "Forever Changes", year: 1967 },
  { artist: "Mayo Thompson", album: "Corkys Debt to his Father", year: 1970 },
  { artist: "White Noise", album: "An Electric Storm", year: 1969 },
];

currentListening.forEach((el) => {
  let newEntry = document.createElement("tr");
  let artistData = document.createElement("td");
  let albumData = document.createElement("td");
  let yearData = document.createElement("td");
  artistData.innerText = el.artist;
  albumData.innerText = el.album;
  yearData.innerText = el.year;

  newEntry.appendChild(artistData);
  newEntry.appendChild(albumData);
  newEntry.appendChild(yearData);
  tableBody.appendChild(newEntry);
});

//2. Form Validation
newAlbum.addEventListener("submit", (e) => {
  e.preventDefault();

  let artistName = document.getElementById("artist").value;
  let albumName = document.getElementById("album").value;
  let year = document.getElementById("year").value;

  if (!artistName) {
    alert("you must provide an artist name");
    return;
  } else if (!albumName) {
    alert("you must provide an album name");
    return;
  } else if (!year) {
    alert("you must provide the year it was released");
    return;
  }

  let newEntry = document.createElement("tr");
  let artistData = document.createElement("td");
  let albumData = document.createElement("td");
  let yearData = document.createElement("td");

  artistData.innerText = artistName;
  albumData.innerText = albumName;
  yearData.innerText = year;

  newEntry.appendChild(artistData);
  newEntry.appendChild(albumData);
  newEntry.appendChild(yearData);
  tableBody.appendChild(newEntry);

  newAlbum.reset();
});

//3. Image manipulation
image.addEventListener("mouseover", () => {
  image.setAttribute("src", "https://pbs.twimg.com/media/Cr9RhGUWEAENqvx.jpg");
});
image.addEventListener("mouseout", () => {
  image.setAttribute(
    "src",
    "https://nicholasroccodev.netlify.app/headshot.png"
  );
});

//4. OnCLick event with buttons

const changeButtonColor = () => {
  let buttonColor = colors[Math.floor(Math.random() * colors.length)];
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.backgroundColor = buttonColor;
  });
};

//5 events other than click
funFacts.addEventListener("mouseover", () => {
  funFacts.style.visibility = "hidden";
});
funFacts.addEventListener("mouseout", () => {
  funFacts.style.visibility = "visible";
});

//6 Local Storage (saving the message board comments)
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMessage = document.getElementById("msg");
  if (savedMessagesAsString) {
    savedMessagesAsString += `, ${newMessage.value}`;
    localStorage.setItem("messages", savedMessagesAsString);
  } else {
    savedMessagesAsString = newMessage.value;
    localStorage.setItem("messages", savedMessagesAsString);
  }
  let newLi = document.createElement("li");
  newLi.innerText = newMessage.value;
  messageBoard.appendChild(newLi);
  messageForm.reset();
});

if (savedMessagesAsString) {
  savedMessagesAsString.split(",").forEach((msg) => {
    const nextItem = document.createElement("li");
    nextItem.innerText = msg;
    messageBoard.appendChild(nextItem);
  });
}
