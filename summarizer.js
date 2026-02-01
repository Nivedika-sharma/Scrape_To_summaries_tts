require("dotenv").config();
const fs = require("fs-extra");
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const INPUT_FILE = "data/products.json";


async function summarize(text) {
  const response = await client.chat.completions.create({
    model: "gpt-4o", 
    messages: [
      {
        role: "system",
        content:
          "You are a product copywriter. Write very short, crisp summaries (1–2 sentences).",
      },
      {
        role: "user",
        content: `Summarize this product:\n${text}`,
      },
    ],
    temperature: 0.5,
  });

  return response.choices[0].message.content.trim();
}

async function generateSummaries() {
  try {
    console.log("\nGenerating summaries\n");

    const products = await fs.readJson(INPUT_FILE);

    for (let product of products) {
      const text = `${product.name}. ${product.description}`;

      const summary = await summarize(text);

      product.summary = summary;

      //console.log("--", product.name);
    }

    await fs.writeJson(INPUT_FILE, products, { spaces: 2 });

    return products;
  } catch (err) {
    console.error("Error:", err.message);
  }
}

module.exports = generateSummaries;
