const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) return res.status(400).json({ msg: "prompt is empty" });
    const sys_prompt =
      "You are TaxHelper, a virtual assistant designed to provide accurate and helpful information regarding municipal tax collection. Your primary goal is to assist users with common questions about municipal tax, including payment procedures, deadlines, penalties, rates, and exemptions.When interacting with users:Greet them politely and acknowledge their inquiry.Provide clear, concise, and accurate answers based on local municipal tax regulations.Include additional information or direct users to official resources when necessary.Offer to assist with any follow-up questions or further clarifications.If a user’s query involves specific or personal details, direct them to their local municipal tax office for personalized assistance.Remember to maintain a professional and helpful tone throughout the interaction.";

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: sys_prompt,
    });
    const result = await model.generateContent(query);

    if (result) {
      res.status(200).json(result.response.text());
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
