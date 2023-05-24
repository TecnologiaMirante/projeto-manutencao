import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Torre {
    id?: number;
    dados_gerais: DadosGerais;
    status: string; //ENUM
    category: string; //ENUM
    estrutura: string; //ENUM
    altura: number;
    aterramento: boolean;
}