# StudyMate Agent

> An AI-powered Multi-Agent Study Assistant that helps students plan, learn, practice, and improve using specialized AI agents powered by Google Gemini.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Gemini](https://img.shields.io/badge/Google-Gemini-orange)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

## Overview

StudyMate Agent is a multi-agent educational assistant designed to help students prepare more effectively for exams and coursework.

Instead of relying on a single AI assistant, StudyMate uses a Master Agent that intelligently routes student requests to specialized agents responsible for planning, teaching, assessment, and feedback.

The project demonstrates how AI agents can collaborate to solve real educational challenges while providing personalized and structured learning support.

---

## Problem Statement

Students often struggle with:

* Creating effective study plans
* Understanding difficult concepts
* Finding quality practice questions
* Identifying weak areas before exams
* Managing preparation efficiently

Most AI chatbots provide generic responses and do not specialize in different learning tasks.

StudyMate Agent addresses this challenge through a multi-agent architecture where each agent focuses on a specific educational responsibility.

---

## Solution

StudyMate Agent provides:

### Planner Agent

Creates personalized study schedules, roadmaps, revision plans, and exam preparation strategies.

### Tutor Agent

Explains concepts in simple language using examples, analogies, and step-by-step breakdowns.

### Quiz Agent

Generates MCQs, practice questions, and self-assessment quizzes.

### Evaluator Agent

Evaluates answers, identifies mistakes, highlights weak areas, and provides improvement recommendations.

### Master Agent

Acts as the orchestrator and automatically routes requests to the most appropriate specialized agent.

---

## Multi-Agent Architecture

```text
User
  │
  ▼
Next.js Frontend
  │
  ▼
Master Agent
  │
  ├───────────────┐
  │               │
  ▼               ▼
Planner Agent   Tutor Agent
  │               │
  └───────┬───────┘
          │
          ▼
      Quiz Agent
          │
          ▼
   Evaluator Agent
          │
          ▼
      Gemini API
          │
          ▼
       Response
```

---

## Features

* Multi-Agent AI Architecture
* Intelligent Request Routing
* Study Plan Generation
* Concept Explanation
* Quiz Creation
* Answer Evaluation
* Responsive User Interface
* Secure API Key Management
* Cloud Deployment with Vercel
* Powered by Google Gemini

---

## Technology Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* TypeScript

### AI

* Google Gemini API
* @google/genai SDK

### Deployment

* Vercel

---

## Project Structure

```text
studymate-agent/
│
├── app/
│   ├── api/
│   │   ├── planner/
│   │   ├── tutor/
│   │   ├── quiz/
│   │   ├── evaluator/
│   │   └── master/
│   │
│   └── page.tsx
│
├── lib/
│   └── agents/
│       ├── planner.ts
│       ├── tutor.ts
│       ├── quiz.ts
│       ├── evaluator.ts
│       └── master.ts
│
├── public/
│
└── README.md
```

---

## Security

The application follows secure development practices:

* API keys are stored in environment variables
* No secrets are exposed to the frontend
* Sensitive credentials are excluded from GitHub
* `.env.local` is ignored by version control

Example:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

## Local Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/studymate-2.0.git
```

Move into the project:

```bash
cd studymate-agent
```

Install dependencies:

```bash
npm install
```

Create environment file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Deployment

This project is deployed using Vercel.

Deployment steps:

1. Push code to GitHub
2. Import repository into Vercel
3. Add environment variables
4. Deploy

---

## Example Use Cases

### Study Planning

```text
I have a Data Structures exam in 7 days.
Create a study plan.
```

### Concept Learning

```text
Explain Binary Search in simple words.
```

### Quiz Generation

```text
Create a quiz on Object-Oriented Programming.
```

### Performance Evaluation

```text
Evaluate my answers and identify weak areas.
```

---

## Future Improvements

* Conversation Memory
* Student Profiles
* Progress Tracking
* PDF Export
* Subject-Specific Knowledge Bases
* Learning Analytics Dashboard
* Voice Interaction
* NotebookLM Integration

---

## Kaggle AI Agents Capstone Project

This project was created as part of the:

**AI Agents: Intensive Vibe Coding Capstone Project**

The solution demonstrates:

* Multi-Agent Systems
* Agent Orchestration
* AI-Powered Learning Assistance
* Secure Deployment Practices
* Real-World Educational Impact

---

## Author

**Muhammad Sufyan Jura**

BS Computer Science Student

NUML University

Pakistan

---

## License

This project is released under the MIT License.
