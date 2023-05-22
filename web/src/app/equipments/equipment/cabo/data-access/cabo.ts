import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { CaboType } from './cabo-type';

export interface Cabo {
    id?: number;
    dados_gerais: DadosGerais;
    status: string;
    category: string;
    tamanho: number;
    tipo: string;
    tensao: number;
}