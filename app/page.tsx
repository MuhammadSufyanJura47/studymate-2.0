"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import logo from "../components/logo.png";

type AgentType = "master" | "planner" | "tutor" | "quiz" | "evaluator";
type DoodleKind =
  | "book"
  | "pencil"
  | "calculator"
  | "atom"
  | "cap"
  | "ruler"
  | "bulb"
  | "globe"
  | "beaker"
  | "note";

type Doodle = {
  kind: DoodleKind;
  top: string;
  left: string;
  size: number;
  color: string;
  delay: string;
  duration: string;
  rotate: string;
  drift: string;
  sway: string;
  opacity: number;
};

const doodles: Doodle[] = [
  {
    kind: "book",
    top: "9%",
    left: "7%",
    size: 86,
    color: "#38bdf8",
    delay: "-2s",
    duration: "13s",
    rotate: "-12deg",
    drift: "-26px",
    sway: "8deg",
    opacity: 0.34,
  },
  {
    kind: "atom",
    top: "16%",
    left: "82%",
    size: 88,
    color: "#a78bfa",
    delay: "-7s",
    duration: "16s",
    rotate: "10deg",
    drift: "-34px",
    sway: "-7deg",
    opacity: 0.32,
  },
  {
    kind: "pencil",
    top: "35%",
    left: "3%",
    size: 72,
    color: "#fbbf24",
    delay: "-4s",
    duration: "11s",
    rotate: "18deg",
    drift: "-22px",
    sway: "10deg",
    opacity: 0.36,
  },
  {
    kind: "calculator",
    top: "57%",
    left: "88%",
    size: 78,
    color: "#34d399",
    delay: "-5s",
    duration: "14s",
    rotate: "-8deg",
    drift: "-30px",
    sway: "6deg",
    opacity: 0.31,
  },
  {
    kind: "cap",
    top: "76%",
    left: "10%",
    size: 84,
    color: "#fb7185",
    delay: "-10s",
    duration: "15s",
    rotate: "7deg",
    drift: "-28px",
    sway: "-8deg",
    opacity: 0.33,
  },
  {
    kind: "ruler",
    top: "82%",
    left: "72%",
    size: 90,
    color: "#22d3ee",
    delay: "-1s",
    duration: "12s",
    rotate: "-18deg",
    drift: "-24px",
    sway: "9deg",
    opacity: 0.3,
  },
  {
    kind: "bulb",
    top: "7%",
    left: "51%",
    size: 68,
    color: "#fde047",
    delay: "-8s",
    duration: "14s",
    rotate: "5deg",
    drift: "-32px",
    sway: "7deg",
    opacity: 0.32,
  },
  {
    kind: "globe",
    top: "63%",
    left: "2%",
    size: 76,
    color: "#60a5fa",
    delay: "-6s",
    duration: "17s",
    rotate: "-5deg",
    drift: "-36px",
    sway: "6deg",
    opacity: 0.28,
  },
  {
    kind: "beaker",
    top: "29%",
    left: "91%",
    size: 70,
    color: "#2dd4bf",
    delay: "-3s",
    duration: "13s",
    rotate: "13deg",
    drift: "-24px",
    sway: "-10deg",
    opacity: 0.31,
  },
  {
    kind: "note",
    top: "88%",
    left: "40%",
    size: 74,
    color: "#f472b6",
    delay: "-9s",
    duration: "18s",
    rotate: "11deg",
    drift: "-38px",
    sway: "-7deg",
    opacity: 0.28,
  },
];

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [activeAgent, setActiveAgent] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");
  const [loading, setLoading] = useState(false);

  const agentLabels: Record<AgentType, string> = {
    master: "Master Agent",
    planner: "Planner Agent",
    tutor: "Tutor Agent",
    quiz: "Quiz Agent",
    evaluator: "Evaluator Agent",
  };

  async function runAgent(agentType: AgentType) {
    if (!userInput.trim()) {
      alert("Please enter your study request first.");
      return;
    }

    setLoading(true);
    setResult("");
    setSelectedAgent("");
    setActiveAgent(agentLabels[agentType]);

    try {
      const response = await fetch(`/api/${agentType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();

      if (!data.success) {
        setResult("Error: " + data.error);
        return;
      }

      setResult(data.result);

      if (data.selectedAgent) {
        setSelectedAgent(data.selectedAgent);
      }
    } catch {
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#111322] text-white">
      <EducationDoodles />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-12">
        <div className="mb-8 text-center">
          <div className="mb-5 flex justify-center">
            <Image
              src={logo}
              alt="StudyMate logo"
              priority
              className="h-20 w-auto drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]"
            />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            AI Multi-Agent Study Assistant
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            StudyMate Agent
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Plan, learn, quiz, and evaluate your study progress using a master
            AI agent that routes your request to specialized study agents.
          </p>
        </div>

        <div className="w-full rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <label className="mb-3 block text-sm font-medium text-slate-200">
            Enter your study request
          </label>

          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Example: I have Data Structures exam in 7 days OR explain binary search OR create a quiz on stack."
            className="min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-slate-900 p-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />

          <div className="mt-5 grid gap-4 sm:grid-cols-5">
            <button
              onClick={() => runAgent("master")}
              disabled={loading}
              className="rounded-2xl bg-white px-5 py-4 font-semibold text-slate-950 transition hover:bg-slate-200 disabled:opacity-60"
            >
              Ask Master
            </button>

            <button
              onClick={() => runAgent("planner")}
              disabled={loading}
              className="rounded-2xl bg-cyan-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60"
            >
              Study Plan
            </button>

            <button
              onClick={() => runAgent("tutor")}
              disabled={loading}
              className="rounded-2xl bg-violet-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-violet-300 disabled:opacity-60"
            >
              Explain
            </button>

            <button
              onClick={() => runAgent("quiz")}
              disabled={loading}
              className="rounded-2xl bg-emerald-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:opacity-60"
            >
              Quiz
            </button>

            <button
              onClick={() => runAgent("evaluator")}
              disabled={loading}
              className="rounded-2xl bg-amber-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-amber-300 disabled:opacity-60"
            >
              Evaluate
            </button>
          </div>

          {loading && (
            <p className="mt-4 text-center text-sm text-slate-300">
              {activeAgent} is thinking...
            </p>
          )}
        </div>

        {result && (
          <div className="mt-8 w-full rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-bold">{activeAgent} Response</h2>

              <div className="flex gap-2">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  {activeAgent}
                </span>

                {selectedAgent && (
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                    Routed to: {selectedAgent}
                  </span>
                )}
              </div>
            </div>

            <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-200">
              {result}
            </pre>
          </div>
        )}
      </section>
    </main>
  );
}

function EducationDoodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#111322]/72" />

      {doodles.map((doodle, index) => (
        <div
          key={`${doodle.kind}-${index}`}
          className="education-doodle absolute drop-shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
          style={
            {
              top: doodle.top,
              left: doodle.left,
              width: `${doodle.size}px`,
              height: `${doodle.size}px`,
              color: doodle.color,
              opacity: doodle.opacity,
              "--doodle-delay": doodle.delay,
              "--doodle-duration": doodle.duration,
              "--doodle-rotate": doodle.rotate,
              "--doodle-drift": doodle.drift,
              "--doodle-sway": doodle.sway,
            } as CSSProperties
          }
        >
          <DoodleIcon kind={doodle.kind} />
        </div>
      ))}
    </div>
  );
}

function DoodleIcon({ kind }: { kind: DoodleKind }) {
  const commonProps = {
    className: "h-full w-full",
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M12 14c8 0 14 2 20 7v31c-6-5-12-7-20-7V14Z" />
          <path d="M52 14c-8 0-14 2-20 7v31c6-5 12-7 20-7V14Z" />
          <path d="M18 23c4 .4 7.5 1.5 10.5 3.4" />
          <path d="M45.5 23c-4 .4-7.5 1.5-10.5 3.4" />
        </svg>
      );
    case "pencil":
      return (
        <svg {...commonProps}>
          <path d="M14 48 45 17l7 7-31 31-11 4 4-11Z" />
          <path d="m40 22 7 7" />
          <path d="m14 48 7 7" />
          <path d="M47 15c2-2 5-2 7 0s2 5 0 7l-2 2-7-7 2-2Z" />
        </svg>
      );
    case "calculator":
      return (
        <svg {...commonProps}>
          <rect x="15" y="9" width="34" height="46" rx="6" />
          <path d="M22 17h20v9H22z" />
          <path d="M23 35h.1" />
          <path d="M32 35h.1" />
          <path d="M41 35h.1" />
          <path d="M23 44h.1" />
          <path d="M32 44h.1" />
          <path d="M41 44h.1" />
        </svg>
      );
    case "atom":
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="3.5" />
          <ellipse cx="32" cy="32" rx="23" ry="8" />
          <ellipse cx="32" cy="32" rx="23" ry="8" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="23" ry="8" transform="rotate(120 32 32)" />
        </svg>
      );
    case "cap":
      return (
        <svg {...commonProps}>
          <path d="M8 25 32 13l24 12-24 12L8 25Z" />
          <path d="M18 31v11c7 6 21 6 28 0V31" />
          <path d="M52 28v16" />
          <path d="M52 44c-3 2-3 5 0 7 3-2 3-5 0-7Z" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...commonProps}>
          <path d="M10 42 42 10l12 12-32 32-12-12Z" />
          <path d="m24 28 5 5" />
          <path d="m30 22 3 3" />
          <path d="m36 16 5 5" />
          <path d="m18 34 3 3" />
        </svg>
      );
    case "bulb":
      return (
        <svg {...commonProps}>
          <path d="M24 28a8 8 0 1 1 16 0c0 5-5 8-5 13h-6c0-5-5-8-5-13Z" />
          <path d="M28 47h8" />
          <path d="M29 53h6" />
          <path d="M18 28h-5" />
          <path d="M51 28h-5" />
          <path d="m21 17-4-4" />
          <path d="m43 17 4-4" />
        </svg>
      );
    case "globe":
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="28" r="19" />
          <path d="M13 28h38" />
          <path d="M32 9c6 6 8 12 8 19s-2 13-8 19" />
          <path d="M32 9c-6 6-8 12-8 19s2 13 8 19" />
          <path d="M21 52h22" />
        </svg>
      );
    case "beaker":
      return (
        <svg {...commonProps}>
          <path d="M25 10h14" />
          <path d="M28 10v15L16 50c-1 3 1 5 4 5h24c3 0 5-2 4-5L36 25V10" />
          <path d="M22 43h20" />
          <path d="M25 35c4 2 10 2 14 0" />
        </svg>
      );
    case "note":
      return (
        <svg {...commonProps}>
          <path d="M18 10h23l8 8v36H18V10Z" />
          <path d="M41 10v9h8" />
          <path d="M25 29h17" />
          <path d="M25 38h17" />
          <path d="M25 47h10" />
        </svg>
      );
  }
}
