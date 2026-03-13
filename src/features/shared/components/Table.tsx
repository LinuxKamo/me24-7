import { memo } from "react";

interface TableProp {
  heading: string;
  tableHeadings: string[];
  row: React.ReactNode[]; // must be <tr>[]
}

function Table({ row, heading, tableHeadings }: TableProp) {
  return (
    <div className="bg-white/80 shadow-xl rounded-2xl p-6 border border-gray-100">
      <h2 className="px-4 py-3 font-semibold font-serif text-3xl tracking-wider">
        {heading}
      </h2>

      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full text-sm rounded-xl">
          <thead className="bg-yellow-950/50 text-white text-left">
            <tr>
              {tableHeadings.map((head, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {row && row.length > 0 ? (
              row
            ) : (
              <tr>
                <td
                  colSpan={tableHeadings.length}
                  className="text-neutral-600 text-center h-10"
                >
                  No records available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default memo(Table);
