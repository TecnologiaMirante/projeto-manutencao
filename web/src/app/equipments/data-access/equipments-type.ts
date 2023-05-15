export interface EquipmentType {
    title: string;
    value: string;
}

export const EquipmentsTypeList:EquipmentType[] = [
    { 
        title: 'Refrigeração',
        value: 'REFRIGERACAO' 
    }, 
    { 
        title: 'Elétrica',
        value: 'ELETRICA' 
    }, 
    { 
        title: 'Telemetria',
        value: 'TELEMETRIA' 
    }, 
    { 
        title: 'Irradiação',
        value: 'IRRADIACAO' 
    }, 
];