"use client";

import { useEffect, useState } from "react";
import SalesChart from "@/components/SalesChart";
import SalesCard from "@/components/SalesCard";
import SalesTable from "@/components/SalesTable";
import YearSelector from "@/components/YearSelector";

type SalesData = {
  month: string;
  sales: number;
};

type SalesResponse = {
  "2022": SalesData[];
  "2023": SalesData[];
  "2024": SalesData[];
};

export default function Home() {
  const [salesData, setSalesData] = useState<SalesResponse | null>(null);

  const [selectedYear, setSelectedYear] = useState("2024");

  const [chartType, setChartType] = useState<
    "bar" | "line" | "pie"
  >("bar");

  const [threshold, setThreshold] = useState(0);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Fetch sales data from our API
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        setLoading(true);

        const response = await fetch("/api/sales");

        if (!response.ok) {
          throw new Error("Failed to fetch sales data");
        }

        const data: SalesResponse = await response.json();

        setSalesData(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load sales data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  // Loading screen
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />

          <p className="text-slate-400">
            Loading sales data...
          </p>
        </div>
      </main>
    );
  }

  // Error screen
  if (error || !salesData) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="rounded-2xl border border-red-500/30 bg-slate-900 p-8 text-center">
          <h1 className="text-xl font-semibold text-red-400">
            Something went wrong
          </h1>

          <p className="mt-2 text-slate-400">
            {error || "Sales data is unavailable."}
          </p>
        </div>
      </main>
    );
  }

  // Get selected year's data
  const currentData = salesData[selectedYear as keyof SalesResponse];

  // Apply threshold filter
  const filteredData = currentData.filter(
  (item) => item.sales >= threshold
   );

  // Calculate statistics
  const totalSales = currentData.reduce(
    (total, item) => total + item.sales,
    0
  );

  const averageSales =
    totalSales / currentData.length;

  const highestSale = Math.max(
    ...currentData.map((item) => item.sales)
  );

  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold">
              Sales Analytics
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Business performance dashboard
            </p>
          </div>

          <YearSelector
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />

        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* INTRO */}
        <section className="mb-8">

          <p className="text-sm font-semibold tracking-wider text-cyan-400">
            SALES OVERVIEW
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {selectedYear} Performance
          </h2>

          <p className="mt-2 max-w-2xl text-slate-400">
            Analyze monthly sales performance, compare trends,
            and explore yearly business data.
          </p>

        </section>

        {/* SUMMARY CARDS */}
        <section className="grid gap-5 md:grid-cols-3">

          <SalesCard
            title="Total Sales"
            value={formatCurrency(totalSales)}
            description="Annual revenue"
          />

          <SalesCard
            title="Average Monthly Sales"
            value={formatCurrency(
              Math.round(averageSales)
            )}
            description="Monthly average"
          />

          <SalesCard
            title="Highest Monthly Sale"
            value={formatCurrency(highestSale)}
            description="Best performing month"
          />

        </section>

        {/* CHART */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <div>
              <h3 className="text-xl font-semibold">
                Sales Performance
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Monthly sales visualization for {selectedYear}
              </p>
            </div>

            {/* CHART BUTTONS */}
            <div className="flex gap-2">

              <button
                onClick={() => setChartType("bar")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  chartType === "bar"
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Bar
              </button>

              <button
                onClick={() => setChartType("line")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  chartType === "line"
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Line
              </button>

              <button
                onClick={() => setChartType("pie")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  chartType === "pie"
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Pie
              </button>

            </div>

          </div>

          <div className="mt-6">

            <SalesChart
              data={filteredData}
              chartType={chartType}
            />

          </div>

        </section>

        {/* CUSTOM FILTER */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold text-cyan-400">
                CUSTOM FILTER
              </p>

              <h3 className="mt-1 text-xl font-semibold">
                Filter Sales
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Show only months above your selected
                sales threshold.
              </p>

            </div>

            <div>

              <label className="mb-2 block text-sm text-slate-400">
                Minimum Sales
              </label>

              <input
                type="number"
                min="0"
                value={threshold}
                onChange={(e) =>
                  setThreshold(Number(e.target.value))
                }
                placeholder="Example: 100000"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-white outline-none transition focus:border-cyan-400 md:w-64"
              />

            </div>

          </div>

          <div className="mt-4 text-sm text-slate-400">
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredData.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-white">
              {currentData.length}
            </span>{" "}
            months
          </div>

        </section>

        {/* TABLE */}
        <SalesTable data={filteredData} />

        {/* FOOTER */}
        <footer className="py-10 text-center text-sm text-slate-500">

          Sales Analytics Dashboard

          <span className="mx-2">•</span>

          Next.js 15

          <span className="mx-2">•</span>

          TypeScript

          <span className="mx-2">•</span>

          Tailwind CSS

          <span className="mx-2">•</span>

          Recharts

        </footer>

      </div>

    </main>
  );
}