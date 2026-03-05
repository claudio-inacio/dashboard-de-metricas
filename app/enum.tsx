export const colorButtoEnum = {
    primary: 'bg-primary hover:bg-blue-800',
    secundary: 'bg-secondary',
    success: 'bg-green-500 hover:bg-green-700',
    error: 'bg-red-500 hover:bg-red-700',
    warning: 'bg-yellow-500 hover:bg-yellow-700',
    info: 'bg-blue-500 hover:bg-blue-700',
}



export const statusEnum = {
    ATIVA: 'ativa',
    PAUSADA: 'pausada',
    FINALIZADA: 'finalizada',
}

export const statusColorEnum = {
    [statusEnum.ATIVA]: 'bg-green-700 text-green-800',
    [statusEnum.PAUSADA]: 'bg-gray-600 text-gray-800',
    [statusEnum.FINALIZADA]: 'bg-red-700 text-red-800',
}