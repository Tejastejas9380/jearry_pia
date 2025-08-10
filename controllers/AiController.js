const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});


const askAI = async (req, res) => {
  try {
    const { prompt = "Hello" } = req.body;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `your AI model named JERRY your only work is to reply this promt : ${prompt}`,
    });
    const answer = response.text;
    console.log(answer);

    return res.json({ answer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { askAI };  