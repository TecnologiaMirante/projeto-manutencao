import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Antena {
    id?: number;
    dados_gerais: DadosGerais;
    status: string; //ENUM
    category: string; //ENUM
    gain: string;
    fendas: number;
    tipos_antena: string; //ENUM
    nv?: number;
    posicao_torre?: number;
}