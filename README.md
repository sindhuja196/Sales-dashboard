# Sales Analytics Dashboard

A responsive sales analytics dashboard built using Next.js 15, TypeScript, Tailwind CSS and Recharts.

## Features

- Sales data for 2022, 2023 and 2024
- Year selection
- Total sales calculation
- Average monthly sales
- Highest monthly sales
- Bar chart
- Line chart
- Pie chart
- Custom sales threshold filter
- Sales data table
- API integration using Next.js API routes
- Responsive dashboard interface

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS
- Recharts
- React

## Project Structure

```text
sales-dashboard/
├── app/
│   ├── api/
│   │   └── sales/
│   │       └── route.ts
│   ├── dashboard/
│   │   └── page.tsx
│   └── page.tsx
├── components/
│   ├── SalesCard.tsx
│   ├── SalesChart.tsx
│   ├── SalesTable.tsx
│   └── YearSelector.tsx
├── public/
├── package.json
└── README.md