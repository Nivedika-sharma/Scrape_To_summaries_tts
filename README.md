**Mamaearth Best Sellers Scraper & Audio Generator**
**Overview**

Scrapes Best Sellers from Mamaearth (first 5 products only)

Generates short 1–2 sentence summaries using OpenAI GPT4.o models

Converts summaries into MP3 audio files using ElevenLabs TTS



**How to Run**

Clone the repository

git clone <your-repo-url>
cd project-folder


Install dependencies

npm install


Add API keys (create .env file in project root)

OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
OPENAI_PRIMARY_MODEL=gpt-4o-mini
OPENAI_FALLBACK_MODEL=gpt-4o




Run the script

node index.js


Scrapes products → generates summaries → creates audio files
