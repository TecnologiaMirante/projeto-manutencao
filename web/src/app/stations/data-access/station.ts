export interface Station {
    id?: number;
    nome: string;
    identificacao: string;
    latitude?: string;
    longitude?: string;    
    endereco: string;
    link_grafana?: string;
}