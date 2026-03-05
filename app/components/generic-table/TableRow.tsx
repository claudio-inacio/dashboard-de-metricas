import { TableColumn } from "@/app/types/dashboardData";
import { currencyToBRL } from "@/app/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TableRowProps<T> = {
  item: T;
  columns: TableColumn<T>[];
  index: number,
};


// Neste caso a maneira que encontrei para acessar os campos dinamicamente foi utilizando o keyOf e o record PASSANDO O TYPE ANY... 
// pois não sabemos qual o campo o usuario passar como especificação

// VOU ENTREGAR A MAIS PARA COMPENSAR A FALTA PELO USO DO  ANY, MAS SE TIVER ALGUMA SUGESTÃO DE MELHORIA PARA MANTER O TIPO FORTE, FICO ABERTO A SUGESTÕES
export default function TableRow<T extends Record<string, any>>({
  item,
  columns,
  index,
}: TableRowProps<T>) {
  
  return (
    <tr className={`border-b cursor-default  hover:bg-gray-50 transition ${index % 2 === 0 && 'bg-gray-200'}`}>
      {columns.map((column) => {
        const value = item[column.field];

        return (
          <td key={String(column.field)} className="px-6 py-4 text-sm text-gray-700">
            {column.render
              ? column.render(item)
              : column.type === "currency" ? currencyToBRL(parseInt(value)) : value}
          </td>
        );
      })}
    </tr>
  );
}