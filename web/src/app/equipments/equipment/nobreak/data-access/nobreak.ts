import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

export interface Nobreak {
    id?: number;
    dados_gerais: DadosGerais;
    status: string;
    category: string;
    tensaoEntrada: number;
    tensaoSaida: number;
}