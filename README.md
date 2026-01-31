


##_**Overview**_

Scrapes Skin-care products from Mamaearth (first 5 products only)

Generates short 1–2 sentence summaries using OpenAI GPT4.o models

Converts summaries into MP3 audio files using ElevenLabs TTS



##_**How to Run**_

1. Clone the repository

`git clone <your-repo-url>`
`cd project-folder`
 
2. Install dependencies

`npm install @elevenlabs/elevenlabs-js
npm install axios
npm install cheerio 
npm install fs-extra dotenv
npm install openai 
`

---

## 🔑 Setup API Keys

Create a **.env** file in the root folder:

`OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key`


 4. Run the script

`node index.js`


Scrapes products → generates summaries → creates audio files
