import { TableColumn } from "@/app/types/dashboardData";

type TableHeaderProps<T> = {
  columns: TableColumn<T>[];
};

export default function TableHeader<T>({ columns }: TableHeaderProps<T>) {
  return (
    <thead className="bg-slate-700 text-white">
      <tr>
        {columns.map((column) => (
          <th
            key={String(column.field)}
            className="sticky top-0 bg-slate-700 px-6 py-3 text-left text-sm font-semibold"
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}