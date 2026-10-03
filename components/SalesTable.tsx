type SalesData = {
  month: string;
  sales: number;
};

type SalesTableProps = {
  data: SalesData[];
};

export default function SalesTable({
  data,
}: SalesTableProps) {
  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      
      <div className="border-b border-slate-800 p-6">
        <h3 className="text-xl font-semibold text-white">
          Monthly Sales
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Detailed sales information
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          
          <thead className="bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-sm font-medium text-slate-300">
                Month
              </th>

              <th className="px-6 py-4 text-sm font-medium text-slate-300">
                Sales
              </th>

              <th className="px-6 py-4 text-sm font-medium text-slate-300">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.month}
                className="border-t border-slate-800 transition hover:bg-slate-800/40"
              >
                <td className="px-6 py-4 text-white">
                  {item.month}
                </td>

                <td className="px-6 py-4 font-medium text-white">
                  {formatCurrency(item.sales)}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                    Above threshold
                  </span>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-10 text-center text-slate-400"
                >
                  No sales found above this threshold.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </section>
  );
}