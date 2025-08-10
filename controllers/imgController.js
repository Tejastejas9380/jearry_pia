
const { InferenceClient } = require("@huggingface/inference");

const client = new InferenceClient(process.env.HF_TOKEN);  // npm install express dotenv cors mongoose @huggingface/inference

const imgGenerate = async (req, res) => {
  const { prompt } = req.body;
  console.log("🟢 Prompt:", prompt);
  console.log("🔐 HF_TOKEN prefix:", process.env.HF_TOKEN?.slice(0, 10));

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    const imageBlob = await client.textToImage({
      model: "stabilityai/stable-diffusion-2",
      inputs: prompt,
      parameters: {
        width: 896,
        height: 1152,
      },
    });

    const buffer = Buffer.from(await imageBlob.arrayBuffer());
    const base64Image = `data:image/png;base64,${buffer.toString("base64")}`;

    res.json({ image: base64Image });
  } catch (err) {
    console.error("🔥 HF Error:", err);
    res.status(500).json({ error: err.message || "Image generation failed." });
  }
}

module.exports = {imgGenerate}