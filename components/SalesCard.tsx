type SalesCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function SalesCard({
  title,
  value,
  description,
}: SalesCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-cyan-400">
        {description}
      </p>
    </div>
  );
}