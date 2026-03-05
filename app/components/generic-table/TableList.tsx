/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableColumn } from "@/app/types/dashboardData";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import DontResultSetDataComponent from "../error/DontResultSetDataComponent";

type TableListProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
};

// Neste caso a maneira que encontrei para acessar os campos dinamicamente foi utilizando o record PASSANDO O TYPE ANY... 
// pois não sabemos qual o campo o usuario passar como especificação

// VOU ENTREGAR A MAIS PARA COMPENSAR A FALTA PELO USO DO  ANY, MAS SE TIVER ALGUMA SUGESTÃO DE MELHORIA PARA MANTER O TIPO FORTE, FICO ABERTO A SUGESTÕES

export default function TableList<T extends Record<string, any>>({
  columns,
  data,
}: TableListProps<T>) {


  return (
    <div className="w-full bg-white rounded-xl shadow">
      <div className="max-h-[600px]  overflow-y-auto rounded-xl">
        {!data || data?.length === 0 ? (
          <div className="w-full  flex justify-center items-center m-auto">
            <DontResultSetDataComponent
              title="Nenhuma Campanha Econtrada"
            />
          </div>

        ) : (
          <table className="w-full  border-collapse">
            <TableHeader columns={columns} />
            <tbody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  index={index}
                  item={item}
                  columns={columns}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}