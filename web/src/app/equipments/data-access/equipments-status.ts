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
        title: 'Stand by',
        value: 'STANDBY'
    },
    {
        title: 'Defeito',
        value: 'DEFEITO'
    },
    {
        title: 'Manutenção',
        value: 'MANUTENCAO'
    },
];