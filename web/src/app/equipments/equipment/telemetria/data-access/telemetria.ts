import { DadosGerais } from "../../../data-access/dados-gerais";
export interface Telemetria {
    id?: number;
    codigo: string;
    status: string;
    marca: string;
    modelo: string;
    category: string;
}
