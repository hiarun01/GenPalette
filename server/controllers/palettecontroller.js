import generateResult from "../config/gemini.js";

export const GeneratePalette = async (req, res) => {
  try {
    const {userPrompt} = req.body;
    console.log("userPrompt", userPrompt);
    if (!userPrompt) {
      return res.status(400).send("Prompt is Required");
    }
    const response = await generateResult(userPrompt);
    console.log("response", response);
    return res.send(response);
  } catch (error) {
    console.log("error while calling APi", error.message);
  }
};
