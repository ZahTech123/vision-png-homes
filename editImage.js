// editImage.js
// Script to edit or process images. Replace this with your image editing logic.
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function editImage() {
  const result = await openai.images.edit({
    model: "gpt-image-1",
    image: fs.createReadStream("original.png"), // your image
    mask: fs.createReadStream("mask.png"),     // transparent area = area to change
    prompt: "Change the phone number on the billboard to +675 320 0664",
    size: "1024x1024"
  });

  const image_url = result.data[0].url;
  console.log("Edited image URL:", image_url);
}

editImage();
