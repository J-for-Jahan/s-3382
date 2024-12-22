// import express from "express";
// import multer from "multer";
// import fs from "fs/promises"; // Use promises API for fs
// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Securely load the key from .env
// });

// app.post("/process-file", upload.single("file"), async (req, res) => {
//   try {
//     const filePath = req.file.path;

//     // Example: Read the uploaded file's content (for text files, adjust for other formats)
//     const extractedText = await fs.readFile(filePath, "utf-8");

//     // Send text to OpenAI for processing
//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         { role: "user", content: `Write a product description for the following content:\n\n${extractedText}` },
//       ],
//       max_tokens: 200,
//     });

//     const description = response.choices[0].message.content;

//     // Save the generated description to a new file
//     const outputPath = "processed-file.docx";
//     await fs.writeFile(outputPath, description);

//     // Send the processed file back to the client
//     res.download(outputPath, "processed-file.docx", () => {
//       // Cleanup files
//       fs.unlink(filePath); // Delete uploaded file
//       fs.unlink(outputPath); // Delete generated file
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error processing file");
//   }
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });