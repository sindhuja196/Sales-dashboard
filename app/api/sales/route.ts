import { NextResponse } from "next/server";

const salesData = {
  "2022": [
    { month: "Jan", sales: 65000 },
    { month: "Feb", sales: 82000 },
    { month: "Mar", sales: 71000 },
    { month: "Apr", sales: 95000 },
    { month: "May", sales: 88000 },
    { month: "Jun", sales: 105000 },
    { month: "Jul", sales: 92000 },
    { month: "Aug", sales: 115000 },
    { month: "Sep", sales: 98000 },
    { month: "Oct", sales: 125000 },
    { month: "Nov", sales: 110000 },
    { month: "Dec", sales: 135000 },
  ],

  "2023": [
    { month: "Jan", sales: 85000 },
    { month: "Feb", sales: 92000 },
    { month: "Mar", sales: 108000 },
    { month: "Apr", sales: 99000 },
    { month: "May", sales: 125000 },
    { month: "Jun", sales: 118000 },
    { month: "Jul", sales: 135000 },
    { month: "Aug", sales: 142000 },
    { month: "Sep", sales: 130000 },
    { month: "Oct", sales: 155000 },
    { month: "Nov", sales: 148000 },
    { month: "Dec", sales: 175000 },
  ],

  "2024": [
    { month: "Jan", sales: 105000 },
    { month: "Feb", sales: 118000 },
    { month: "Mar", sales: 125000 },
    { month: "Apr", sales: 132000 },
    { month: "May", sales: 145000 },
    { month: "Jun", sales: 138000 },
    { month: "Jul", sales: 155000 },
    { month: "Aug", sales: 162000 },
    { month: "Sep", sales: 175000 },
    { month: "Oct", sales: 168000 },
    { month: "Nov", sales: 185000 },
    { month: "Dec", sales: 205000 },
  ],
};

export async function GET() {
  return NextResponse.json(salesData);
}