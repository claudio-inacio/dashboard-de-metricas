import StatusComponent from "./components/status/StatusComponent";
import { ListCampaignData, TableColumn } from "./types/dashboardData";

export const colorButtoEnum = {
    primary: 'bg-primary hover:bg-blue-800',
    secundary: 'bg-secondary',
    success: 'bg-green-500 hover:bg-green-700',
    error: 'bg-red-500 hover:bg-red-700',
    warning: 'bg-yellow-500 hover:bg-yellow-700',
    info: 'bg-blue-500 hover:bg-blue-700',
}



export const statusEnum = {
    TODOS: 'todos',
    ATIVA: 'ativa',
    PAUSADA: 'pausada',
    FINALIZADA: 'finalizada',
}

export const statusEnumArray = [
  statusEnum.TODOS, statusEnum.ATIVA, statusEnum.FINALIZADA, statusEnum.PAUSADA
]

export const statusColorEnum = {
    [statusEnum.ATIVA]: 'bg-green-700 text-green-800',
    [statusEnum.PAUSADA]: 'bg-gray-600 text-gray-800',
    [statusEnum.FINALIZADA]: 'bg-red-700 text-red-800',
}


export const campaingColumns: TableColumn<ListCampaignData>[] = [
  { header: "Nome", field: "name", type: "text" },
  { header: "Canal", field: "channel", type: "text" },
  {
    header: "Status", field: "status", type: "custom", render: (item) => (
      <StatusComponent status={item.status} />
    )
  },
  { header: "Investimento", field: "investment", type: "currency" },
  { header: "Início", field: "startDate", type: "date" },
];