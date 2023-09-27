const titleElement = document.getElementById('typing-title');
const paragraphElement = document.getElementById('typing-paragraph');
const responseElement = document.getElementById('typing-response');

const title = "Internet Atlas - Louise Druhlhe";
const paragraph = "Each of our clicks serves to sculpt the internet according to our own image.";

const response = "Response: After reading more about Druhle's abstract yet compelling storytelling of the internet, I've come to understand that this author might not be too fond of how the internet resembles a space where people are taken advantage of. While it's true that personal data is being recorded, stored, and 'taken' away from those who utilize the internet, I think it's rather important to think about the privileges it comes with. People are able to learn at increasingly faster speeds than ever before, we no longer have to go to physical locations to meet each other, and we can communicate with a single click of our fingers. It's not to say that 'those who opt into using internet should be forced to be giving up their personal data', rather I'm simply saying that using the internet is like signing a safety hazard agreement with yourself, businesses, scammers, and etc. You're the one opting in to use it, no one is forcing you to. Also, what's stopping someone living like the Amish? Sharing their food, communicating miles away with a landline, etc. However, personally, I am a fan of decentralization and I think smart companies are starting to compensate people for their personal data as of now.";

let titleIndex = 0;
let paragraphIndex = 0;
let responseIndex = 0;

function typeTitle() {
    if (titleIndex < title.length) {
        titleElement.innerHTML += title.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 10);
    } else {
        titleElement.innerHTML += "<br>";
        typeParagraph();
    }
}

function typeParagraph() {
    if (paragraphIndex < paragraph.length) {
        paragraphElement.innerHTML += paragraph.charAt(paragraphIndex);
        paragraphIndex++;
        setTimeout(typeParagraph, 10);
    }
}

function typeResponse() {
    const words = response.split(' ');
    const chunkSize = 8;
    let chunk = '';

    if (responseIndex < words.length) {
        for (let i = 0; i < chunkSize && responseIndex < words.length; i++) {
            chunk += words[responseIndex] + ' ';
            responseIndex++;
        }
        const responseChunk = document.createElement('div');
        responseChunk.textContent = chunk;
        responseElement.appendChild(responseChunk);
        setTimeout(typeResponse, 30);
    }
}

typeTitle();
setTimeout(typeResponse, 2000);
