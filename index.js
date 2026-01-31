const scrapeMamaearth = require("./scraper");
const generateSummaries = require("./summarizer");
const {generateAudioFiles} = require("./tts");

async function main() {
  console.log(" Starting scraping...");
  await scrapeMamaearth();
  
  await generateSummaries();

  await generateAudioFiles();   
}

main();
