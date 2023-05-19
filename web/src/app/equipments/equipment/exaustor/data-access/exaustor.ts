import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Exaustor {
    id?: number;
    dados_gerais: DadosGerais;
    status: string;
    category: string;
}