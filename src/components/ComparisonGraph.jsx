"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { x: 0, y: 10 },
  { x: 20, y: 20 },
  { x: 30, y: 40 },
  { x: 40, y: 80 },
  { x: 50, y: 90 },
  { x: 60, y: 50 },
  { x: 70, y: 30 },
  { x: 80, y: 20 },
  { x: 90, y: 10 },
  { x: 100, y: 5 },
]

export function ComparisonGraph() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Comparison Graph</h3>
      <p className="mb-4 text-gray-600">
        You scored 30% percentile which is lower than the average percentile 72% of all the engineers who took this
        assessment
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="x" />
            <YAxis />
            <Area type="monotone" dataKey="y" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

