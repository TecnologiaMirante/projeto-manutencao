import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Switch {
    id?: number;
    dados_gerais: DadosGerais;
    status: string;
    category: string;
    qtdPortas: number;
}