import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Transmissor {
    id?: number;
    dados_gerais: DadosGerais;
    status: string; //ENUM
    category: string; //ENUM
    programmed_power: number;
    canal_fisico: number;
    canal_virtual?: number;
    receptor_id?: number;
    antena_id?: number;
}