// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const container = document.querySelector("#channelsContainer");

const getRadio = async () => {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  console.log(data);

  const channels = data.channels;
  console.log(channels.length);

  channels.forEach((channel) => {
    const radioChannelContainer = document.createElement("div");
    radioChannelContainer.setAttribute("class", "channel");
    radioChannelContainer.style.backgroundColor = `#${channel.color}`;

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", channel.image);

    const titleElement = document.createElement("h2");
    titleElement.textContent = channel.name;

    const audioPlayerElement = document.createElement("audio");
    audioPlayerElement.controls = true;
    const sourceElement = document.createElement("source");
    sourceElement.src = channel.liveaudio.url;

    container.appendChild(radioChannelContainer);
    radioChannelContainer.appendChild(imgElement);
    radioChannelContainer.appendChild(titleElement);
    audioPlayerElement.appendChild(sourceElement);
    radioChannelContainer.appendChild(audioPlayerElement);
  });
};

getRadio();
