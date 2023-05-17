export interface EquipmentStatus {
    title: string;
    value: string;
}

export const EquipmentsStatusList:EquipmentStatus[] = [
    {
        title: 'Funcionando',
        value: 'FUNCIONANDO'
    },
    {
        title: 'Stand-by',
        value: 'STAND-BY'
    },
    {
        title: 'Defeito',
        value: 'DEFEITO'
    },
];