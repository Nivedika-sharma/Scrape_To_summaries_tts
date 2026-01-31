
# 🌿 Mamaearth Best Sellers Scraper & Audio Generator

Turn product listings into **smart summaries + audio ads automatically** 🎙️

This project:

* Scrapes **Mamaearth Best Seller products**
* Generates **short AI summaries**
* Converts them into **MP3 voice audio**
* Saves everything locally

Perfect for:
✅ Voice assistants
✅ Product demos
✅ Accessibility
✅ E-commerce automation
✅ AI + Web scraping practice

---

## 🚀 Features

✨ Scrapes **top 5 best-selling products**
✨ Extracts **title, price, description**
✨ Uses **OpenAI GPT-4o** for smart 1–2 line summaries
✨ Uses **ElevenLabs TTS** to create realistic voice audio
✨ Saves **separate MP3 file per product**
✨ Fully automated pipeline

---

## 🛠️ Tech Stack

* Node.js
* Axios (HTTP requests)
* Cheerio (Web scraping)
* OpenAI GPT-4o (Summaries)
* ElevenLabs (Text → Speech)
* fs-extra
* dotenv

---

## 📂 Project Flow

```text
Scrape Products
      ↓
Generate AI Summary
      ↓
Convert to Audio
      ↓
Save MP3 files
```

---

## ⚙️ Installation

### 1️⃣ Clone repository

```bash
git clone <your-repo-url>
cd project-folder
```

### 2️⃣ Install dependencies

```bash
npm install @elevenlabs/elevenlabs-js axios cheerio fs-extra dotenv openai
```

---

## 🔑 Setup API Keys

Create a **.env** file in the root folder:

```env
OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

---

## ▶️ Run the Project

```bash
node index.js
```

---

## 📦 Output Example

After running:

```
audio/
   product-1.mp3
   product-2.mp3
   product-3.mp3
   product-4.mp3
   product-5.mp3
```

Each file contains:
🎙️ Natural voice summary of the product

---

## 🧠 Example Summary

**Input:**
Mamaearth Vitamin C Face Wash

**AI Output:**
"Refresh your skin with Mamaearth’s Vitamin C Face Wash, designed to gently cleanse while boosting natural glow."

**Audio:**
→ Saved as `product-1.mp3`

---

## 💡 Use Cases

* Voice shopping assistants
* Product promotions
* Accessibility for visually impaired users
* AI marketing automation
* Learning scraping + AI + TTS integration

---

## 🧩 Customization Ideas

You can easily:

* Increase product count (top 10/20)
* Change voice in ElevenLabs
* Use different OpenAI models
* Add Hindi/Multilingual audio
* Generate product podcasts
* Upload audio to cloud storage

---

## 🛑 Notes

* Respect website scraping policies
* Keep API keys private
* Free tiers may have quota limits (ElevenLabs/OpenAI)

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and experiment with more AI automations!

---

If you'd like, I can next:
✅ add screenshots section
✅ add demo GIF
✅ add architecture diagram
✅ make it more resume-friendly
✅ or convert to a professional open-source README style

Just tell me 👍
