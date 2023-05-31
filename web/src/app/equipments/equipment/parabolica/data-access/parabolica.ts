import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Parabolica {
    id?: number;
    estacao_id?: number;
    dados_gerais: DadosGerais;
    status: string; //ENUM
    category: string; //ENUM
    diametro: number;
    satelite?: string;    
}