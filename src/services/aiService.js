import { SYSTEM_PROMPT } from '../utils/prompts';

/**
 * Analyzes an image using Google Gemini API to generate a math solution.
 * @param {File} imageFile - The image file uploaded by the user.
 * @param {string} requirement - The specific question to solve (e.g. "Question 15").
 * @param {string} apiKey - The user's Gemini API Key.
 * @returns {Promise<Object>} - The structured problem object.
 */
export async function analyzeImage(imageFile, requirement, apiKey) {
    if (!apiKey) {
        throw new Error("API Key is missing");
    }

    // 1. Convert image to Base64
    const base64Image = await fileToBase64(imageFile);

    // 2. Prepare Request Body for Gemini 1.5 Flash
    // Endpoint: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-001:generateContent?key=YOUR_API_KEY
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-001:generateContent?key=${apiKey}`;

    const payload = {
        contents: [
            {
                parts: [
                    { text: SYSTEM_PROMPT },
                    { text: `User Requirement: ${requirement}` },
                    {
                        inline_data: {
                            mime_type: imageFile.type,
                            data: base64Image.split(',')[1] // Remove "data:image/jpeg;base64," prefix
                        }
                    }
                ]
            }
        ],
        generationConfig: {
            response_mime_type: "application/json"
        }
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || "API Request Failed");
        }

        const data = await response.json();

        // 3. Parse Response
        const textOutput = data.candidates[0].content.parts[0].text;

        // Clean up markdown code blocks if present (though system prompt says not to, LLMs sometimes do)
        const jsonString = textOutput.replace(/```json/g, '').replace(/```/g, '').trim();

        return JSON.parse(jsonString);

    } catch (error) {
        console.error("AI Analysis Error:", error);
        throw error;
    }
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
