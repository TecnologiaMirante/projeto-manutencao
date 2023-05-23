import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Torre {
    id?: number;
    dados_gerais: DadosGerais;
    status: string;
    category: string;
    estrutura: string;
    altura: number;
    aterramento: boolean;
}