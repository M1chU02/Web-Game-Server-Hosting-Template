"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { time: "00:00", cpu: 45, ram: 12 },
  { time: "04:00", cpu: 85, ram: 25 },
  { time: "08:00", cpu: 35, ram: 18 },
  { time: "12:00", cpu: 92, ram: 42 },
  { time: "16:00", cpu: 55, ram: 30 },
  { time: "20:00", cpu: 75, ram: 38 },
  { time: "24:00", cpu: 65, ram: 22 },
];

export function UsageChart() {
  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="time" 
            stroke="#52525b" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis 
            stroke="#52525b" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(value) => `${value}%`} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
            itemStyle={{ color: '#fafafa' }}
          />
          <Line 
            type="monotone" 
            dataKey="cpu" 
            stroke="#6366f1" 
            strokeWidth={3} 
            dot={false} 
          />
          <Line 
            type="monotone" 
            dataKey="ram" 
            stroke="#10b981" 
            strokeWidth={3} 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
