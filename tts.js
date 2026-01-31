import fs from 'fs-extra';
import path from 'path';
import { ElevenLabsClient,play } from '@elevenlabs/elevenlabs-js';

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY, // or replace directly with key string
});

const INPUT_FILE = 'data/products.json';
const OUTPUT_DIR = 'audio';

// Pick a voice from your account dashboard
const VOICE_ID = 'JBFqnCBsd6RMkjVDRZzb'; 

export async function generateAudioFiles() {
  await fs.ensureDir(OUTPUT_DIR);
  
  const products = await fs.readJson(INPUT_FILE);

  let index = 1;

  for (const product of products) {
    const filePath = path.join(OUTPUT_DIR, `product-${index}.mp3`);

    const audio = await elevenlabs.textToSpeech.convert(VOICE_ID, {
      text: product.summary,
      modelId: 'eleven_multilingual_v2',
      outputFormat: 'mp3_44100_128',
    });

    // audio is a Uint8Array / Buffer
    await fs.writeFile(filePath, audio);

    console.log(`product-${index}.mp3 created`);
    index++;
  }

  console.log('\nAll audio files generated!');
}
