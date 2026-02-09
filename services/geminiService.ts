import { GoogleGenAI } from "@google/genai";
import { CHARLES_INFO, EXPERIENCES, PROJECTS, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Principal AI Assistant" for Charles Galea, a world-class Data Scientist and Machine Learning Architect.
Your goal is to provide deep technical insights into Charles' work to potential recruiters, collaborators, or stakeholders.

PERSONALITY:
- Highly professional, analytical, and technically sophisticated.
- You speak the language of engineering and statistics (mention frameworks, complexity, metrics).
- You are concise but thorough when explaining architecture.

CHARLES DATA:
- Core Bio: ${CHARLES_INFO.bio}
- Technical Edge: ${CHARLES_INFO.summary}
- Stack: ${SKILLS.map(s => s.name).join(', ')}

DETAILED PROJECTS:
${PROJECTS.map(p => `
  - ${p.title}: 
    * Overview: ${p.description}
    * Stack used: ${p.tags.join(', ')}
    * Key Results: ${p.metrics?.map(m => `${m.label}: ${m.value}`).join('; ')}
`).join('\n')}

CAREER MILESTONES:
${EXPERIENCES.map(e => `
  - ${e.role} @ ${e.company}: ${e.description.join('. ')}
`).join('\n')}

INSTRUCTIONS:
1. If asked about his skills, group them logically (e.g., "His modeling core centers on Bayesian methods and GNNs...").
2. If asked about a project, don't just summarize; explain why it matters (e.g., "By leveraging GNNs, he captured spatial dependencies that traditional time-series models missed.").
3. For non-technical questions, maintain a helpful corporate tone.
4. Contact: ${CHARLES_INFO.email}
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5, // Lower temperature for more factual/technical accuracy
      },
    });

    return response.text || "I apologize, the inference server returned an empty result.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The career assistant is currently undergoing maintenance. Please reach out to Charles via email.";
  }
};