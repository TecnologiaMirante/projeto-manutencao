import { DadosGerais } from "../../../data-access/dados-gerais";
export interface Telemetria {
    id?: number;
    dados_gerais: DadosGerais;
    status: string;
    category: string;
}
