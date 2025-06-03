"use client";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { languageData } from "@/data/chartData";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/20 backdrop-blur-sm border border-border p-3 rounded-md shadow-md">
        <p className="font-semibold text-black">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-black/60">
            {entry.name}: {entry.value} million
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export function LanguageChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={languageData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barGap={0}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis
            dataKey="language"
            tick={{ fill: "white" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
            axisLine={{ stroke: "hsl(var(--border))" }}
          />
          <YAxis
            tick={{ fill: "white" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              paddingTop: "10px",
            }}
            formatter={(value) => (
              <span className="text-sm  font-medium">{value}</span>
            )}
          />
          <Bar
            dataKey="nativeSpeakers"
            name="Native Speakers"
            fill="#FC64B7"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="totalSpeakers"
            name="Total Speakers"
            fill="#F9C771"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
