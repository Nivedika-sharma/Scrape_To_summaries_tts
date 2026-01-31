#**Mamaearth Best Sellers Scraper & Audio Generator**
##_**Overview**_

Scrapes Best Sellers from Mamaearth (first 5 products only)

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

3. Add API keys (create .env file in project root)

`OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key`


 4. Run the script

`node index.js`


##Design Choices
```
        Scraping:

        Used axios + cheerio

        Targeted .search-cards for product name & description

        Limited to first 5 products for efficiency

        Summarization:

        Used OpenAI GPT models (gpt-4o-mini primary, gpt-4o fallback)

        Multi-model setup ensures reliability

        Audio Generation:

        Used ElevenLabs TTS

        Each summary saved as a separate MP3 file

        Workflow:

        Scraper → JSON → OpenAI Summarizer → ElevenLabs TTS → Audio
```


