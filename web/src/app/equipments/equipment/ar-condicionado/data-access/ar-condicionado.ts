import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface ArCondicionado {
    id?: number;
    dados_gerais: DadosGerais;
    status: string;
    category: string;
    potencia: number;
    tensao: number;
}