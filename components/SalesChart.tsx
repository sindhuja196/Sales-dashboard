"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type SalesData = {
  month: string;
  sales: number;
};

type SalesChartProps = {
  data: SalesData[];
  chartType: "bar" | "line" | "pie";
};

export default function SalesChart({
  data,
  chartType,
}: SalesChartProps) {
  if (!data.length) {
    return (
      <div className="flex h-[400px] items-center justify-center text-slate-400">
        No sales data matches your filter.
      </div>
    );
  }

  const formatValue = (value: number) =>
    `₹${value.toLocaleString("en-IN")}`;

  const tooltipStyle = {
    backgroundColor: "#0f172a",
    border: "1px solid #334155",
    borderRadius: "10px",
    color: "#fff",
  };

  // BAR CHART
  if (chartType === "bar") {
    return (
      <div className="h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94a3b8" }}
              axisLine={{ stroke: "#475569" }}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94a3b8" }}
              axisLine={{ stroke: "#475569" }}
              tickLine={false}
              tickFormatter={(value) =>
                `₹${Number(value) / 1000}k`
              }
            />

            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [
                formatValue(Number(value)),
                "Sales",
              ]}
            />

            <Legend />

            <Bar
              dataKey="sales"
              name="Sales"
              fill="#22d3ee"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // LINE CHART
  if (chartType === "line") {
    return (
      <div className="h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94a3b8" }}
              axisLine={{ stroke: "#475569" }}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94a3b8" }}
              axisLine={{ stroke: "#475569" }}
              tickLine={false}
              tickFormatter={(value) =>
                `₹${Number(value) / 1000}k`
              }
            />

            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [
                formatValue(Number(value)),
                "Sales",
              ]}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="sales"
              name="Sales"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#22d3ee",
              }}
              activeDot={{
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // PIE CHART
  return (
    <div className="h-[420px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={140}
            innerRadius={65}
            paddingAngle={2}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  [
                    "#22d3ee",
                    "#38bdf8",
                    "#818cf8",
                    "#a78bfa",
                    "#c084fc",
                    "#e879f9",
                    "#f472b6",
                    "#fb7185",
                    "#fb923c",
                    "#facc15",
                    "#4ade80",
                    "#2dd4bf",
                  ][index % 12]
                }
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value) => [
              formatValue(Number(value)),
              "Sales",
            ]}
          />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}