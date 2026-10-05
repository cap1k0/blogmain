"use client";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";

const weights = [
  { name: "Lexicon rules", value: 20 },
  { name: "Context classifier", value: 40 },
  { name: "Counterfactual test", value: 30 },
  { name: "Human review", value: 10 },
];

const report = [
  { dim: "Gender", score: 70 },
  { dim: "Identity & orientation", score: 55 },
  { dim: "Age", score: 30 },
  { dim: "Origin", score: 20 },
  { dim: "Ability", score: 15 },
  { dim: "Family shape", score: 60 },
];

export function WeightsChart() {
  return (
    <div className="rounded-lg border border-neutral-200 p-4">
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={weights} layout="vertical" margin={{ top: 10, right: 20, left: 20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis type="number" domain={[0, 50]} unit="%" tick={{ fontSize: 13 }} />
          <YAxis type="category" dataKey="name" width={130} tick={{ fontSize: 13 }} />
          <Tooltip />
          <Bar dataKey="value" name="Draft weight" fill="#2563eb" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ReportRadar() {
  return (
    <div className="rounded-lg border border-neutral-200 p-4">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={report} outerRadius="75%">
          <PolarGrid stroke="#e5e5e5" />
          <PolarAngleAxis dataKey="dim" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
          <Radar name="Signal strength" dataKey="score" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Pipeline() {
  const steps = [
    ["1", "Segment", "sentences, fields, story"],
    ["2", "Lexicon", "known flagged terms"],
    ["3", "Context", "classifier for assumptions"],
    ["4", "Swap test", "change group terms, compare"],
    ["5", "Report", "score + neutral rewrite"],
  ];
  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 p-4">
      <svg viewBox="0 0 860 120" className="min-w-[640px]" role="img" aria-label="Five-step bias detection pipeline">
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#a3a3a3" />
          </marker>
        </defs>
        {steps.map(([n, t, d], i) => {
          const x = 10 + i * 170;
          return (
            <g key={n}>
              <rect x={x} y={20} width={140} height={80} rx={12} fill="#f5f5f5" stroke="#d4d4d4" />
              <circle cx={x + 20} cy={40} r={10} fill="#2563eb" />
              <text x={x + 20} y={44} textAnchor="middle" fontSize={11} fill="#fff">{n}</text>
              <text x={x + 38} y={44} fontSize={14} fontWeight={600} fill="#171717">{t}</text>
              <text x={x + 12} y={74} fontSize={11} fill="#525252">{d}</text>
              {i < steps.length - 1 && (
                <line x1={x + 142} y1={60} x2={x + 166} y2={60} stroke="#a3a3a3" strokeWidth={1.5} markerEnd="url(#arr)" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
