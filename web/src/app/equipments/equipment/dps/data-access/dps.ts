import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface DPS {
    id?: number;
    dados_gerais: DadosGerais;
    status: string;
    category: string;
    corrente_maxima: number;
    classe: string;
}