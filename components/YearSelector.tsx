type YearSelectorProps = {
  selectedYear: string;
  onYearChange: (year: string) => void;
};

export default function YearSelector({
  selectedYear,
  onYearChange,
}: YearSelectorProps) {
  return (
    <select
      value={selectedYear}
      onChange={(e) => onYearChange(e.target.value)}
      className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white outline-none transition focus:border-cyan-400"
    >
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
  );
}