# StudyMate Agent

### AI-Powered Multi-Agent Learning Assistant for Personalized Education

StudyMate Agent is an intelligent multi-agent educational platform built with **Next.js**, **TypeScript**, and **Google Gemini AI**. It helps students create personalized study plans, understand difficult concepts, generate quizzes, and evaluate learning progress through specialized AI agents coordinated by a Master Agent.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-orange)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black)
![License](https://img.shields.io/badge/License-MIT-green)

---

# Live Demo

🚀 **Application:** https://studymate-20.vercel.app/

---

# Overview

Students often struggle with:

* Creating effective study plans
* Understanding difficult academic concepts
* Finding quality practice questions
* Evaluating their understanding before exams
* Managing learning efficiently

Most AI chatbots provide generic responses regardless of the educational task.

StudyMate Agent solves this challenge through a **Multi-Agent AI Architecture**, where each agent specializes in a specific learning responsibility, resulting in more focused, accurate, and helpful educational support.

---

# Problem Statement

Modern students have access to large amounts of information but often lack personalized guidance.

Traditional study methods can be:

* Time-consuming
* Unstructured
* Difficult to personalize
* Inefficient for exam preparation

Students frequently switch between multiple tools for planning, learning, practicing, and assessment.

StudyMate Agent combines these activities into a single intelligent platform powered by specialized AI agents.

---

# Solution

StudyMate Agent introduces a Master Agent that intelligently routes user requests to specialized educational agents.

## Master Agent

Acts as the central orchestrator.

Responsibilities:

* Understands user intent
* Selects the most appropriate specialized agent
* Routes requests automatically
* Returns the final response

---

## Planner Agent

Creates:

* Study schedules
* Exam preparation roadmaps
* Daily learning plans
* Revision strategies

Example:

```text
I have a Data Structures exam in 7 days.
Create a study plan.
```

---

## Tutor Agent

Provides:

* Concept explanations
* Real-world examples
* Analogies
* Simplified learning material

Example:

```text
Explain Binary Search in simple words.
```

---

## Quiz Agent

Generates:

* MCQs
* Practice questions
* Self-assessment quizzes
* Knowledge checks

Example:

```text
Create a quiz on Object-Oriented Programming.
```

---

## Evaluator Agent

Performs:

* Answer evaluation
* Weak-area identification
* Feedback generation
* Learning recommendations

Example:

```text
Evaluate my answers and identify weak areas.
```

---

# Multi-Agent Architecture

```text
                    User
                      │
                      ▼
             Next.js Frontend
                      │
                      ▼
                Master Agent
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
 Planner Agent   Tutor Agent    Quiz Agent
       │              │              │
       └──────────────┼──────────────┘
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

# Key Features

* Multi-Agent AI Architecture
* Intelligent Agent Routing
* Personalized Study Planning
* Concept Explanation
* Quiz Generation
* Learning Assessment
* Secure API Key Management
* Responsive User Interface
* Cloud Deployment
* Educational AI Assistance
* Real-Time AI Responses
* Master Agent Orchestration

---

# Technology Stack

| Category     | Technology         |
| ------------ | ------------------ |
| Frontend     | Next.js 16         |
| Language     | TypeScript         |
| Styling      | Tailwind CSS       |
| AI Model     | Google Gemini      |
| SDK          | @google/genai      |
| API Layer    | Next.js API Routes |
| Deployment   | Vercel             |
| Architecture | Multi-Agent System |

---

# Project Structure

```text
studymate-agent/
│
├── app/
│   ├── api/
│   │   ├── master/
│   │   ├── planner/
│   │   ├── tutor/
│   │   ├── quiz/
│   │   └── evaluator/
│   │
│   └── page.tsx
│
├── lib/
│   └── agents/
│       ├── master.ts
│       ├── planner.ts
│       ├── tutor.ts
│       ├── quiz.ts
│       └── evaluator.ts
│
├── public/
│
└── README.md
```

---

# Security

This project follows secure development practices.

### Security Measures

* API keys stored in environment variables
* No secrets exposed to frontend code
* Credentials excluded from GitHub
* Environment variables managed through Vercel
* Sensitive information protected during deployment

Example:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

# Local Installation

Clone repository:

```bash
git clone https://github.com/YOUR_USERNAME/studymate-agent.git
```

Move into project:

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

# Deployment

The project is deployed on Vercel.

Deployment workflow:

1. Push source code to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Deploy application
5. Verify production environment

---

# Example Use Cases

## Study Planning

```text
I have a Linear Algebra exam in 10 days.
Create a study roadmap.
```

## Learning Concepts

```text
Explain Recursion with a simple example.
```

## Practice Testing

```text
Create a quiz on Data Structures.
```

## Performance Assessment

```text
Evaluate my answers and identify weak areas.
```

---

# Future Enhancements

* Conversation Memory
* Student Profiles
* Progress Tracking Dashboard
* PDF Export
* Learning Analytics
* Subject-Specific Knowledge Bases
* Voice Interaction
* NotebookLM Integration
* Multi-Language Support
* Academic Performance Insights

---

# Kaggle AI Agents Capstone Project

This project was developed for the:

**AI Agents: Intensive Vibe Coding Capstone Project**

The solution demonstrates:

* Multi-Agent Systems
* Agent Orchestration
* Educational AI Applications
* Secure AI Deployment
* Real-World Problem Solving
* Human-Centered Learning Support

---

# Impact

StudyMate Agent aims to make quality educational assistance more accessible by combining planning, teaching, assessment, and feedback into a single intelligent platform.

The project demonstrates how AI agents can collaborate to improve learning outcomes and support students throughout their educational journey.

---

# Author

## Muhammad Sufyan Jura

BS Computer Science Student
National University of Modern Languages (NUML)
Rawalpindi, Pakistan

### Connect

* GitHub: https://github.com/MuhammadSufyanJura47
* Live Demo: https://studymate-20.vercel.app/

---

# License

This project is licensed under the MIT License.

---

### Keywords

AI Agents, Multi-Agent System, Educational AI, Study Assistant, Google Gemini, Next.js, TypeScript, Personalized Learning, AI Tutor, AI Quiz Generator, Student Productivity, AI Education Platform, Learning Assistant, Agent Orchestration, Generative AI.
