import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Receptor {
    id?: number;
    parabolica_id?: number;
    dados_gerais: DadosGerais;
    status: string; //ENUM
    category: string; //ENUM
    canal: number;
    frequency: number;
    symbol_rate: number;
}