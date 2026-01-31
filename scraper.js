const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs-extra");

const URL = "https://mamaearth.in/product-category/skin";
const OUTPUT_FILE = "data/products.json";
const MAX_PRODUCTS = 5;


function clean(text) {
  return text.replace(/\s+/g, " ").trim();
}


function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}


async function scrapeMamaearth() {
  try {
    console.log("Starting Mamaearth scraper...\n");


    console.log("Fetching webpage...");

    const response = await axios.get(URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept-Language": "en-US,en;q=0.9",
      },
      timeout: 15000,
    });

    const html = response.data;

    const $ = cheerio.load(html);


    const products = [];

    const cards = $(".product-search-card ");

    console.log(`Found ${cards.length} product cards\n`);

    cards.each((index, el) => {
      if (products.length >= MAX_PRODUCTS) return false;

      const card = $(el);

      const title = clean(card.find(".title").text());
      const subtitle = clean(card.find(".subtitle").text());

      if (!title || !subtitle) return;

      products.push({
        name: title,
        description: subtitle,
      });
    });


    await fs.ensureDir("data");
    await fs.writeJson(OUTPUT_FILE, products, { spaces: 2 });

    console.log("Products scraped successfully:\n");
    products.forEach((p, i) => {
      console.log(`${i + 1}. ${p.name}`);
    });



    await delay(500);

    return products;
  } catch (error) {
    console.error("Scraping failed:", error.message);
    throw error;
  }
}

module.exports = scrapeMamaearth;
