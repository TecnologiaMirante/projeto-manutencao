import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { Antena } from 'src/app/equipments/equipment/antena/data-access/antena';
import { ArCondicionado } from 'src/app/equipments/equipment/ar-condicionado/data-access/ar-condicionado';
import { Cabo } from 'src/app/equipments/equipment/cabo/data-access/cabo';
import { Combinador } from 'src/app/equipments/equipment/combinador/data-access/combinador';
import { Disjuntor } from 'src/app/equipments/equipment/disjuntor/data-access/disjuntor';
import { DPS } from 'src/app/equipments/equipment/dps/data-access/dps';
import { Exaustor } from 'src/app/equipments/equipment/exaustor/data-access/exaustor';
import { Nobreak } from 'src/app/equipments/equipment/nobreak/data-access/nobreak';
import { Parabolica } from 'src/app/equipments/equipment/parabolica/data-access/parabolica';
import { Receptor } from 'src/app/equipments/equipment/receptor/data-access/receptor';
import { Switch } from 'src/app/equipments/equipment/switch/data-access/switch';
import { Telemetria } from 'src/app/equipments/equipment/telemetria/data-access/telemetria';
import { Torre } from 'src/app/equipments/equipment/torre/data-access/torre';
import { Transmissor } from 'src/app/equipments/equipment/transmissor/data-access/transmissor';

export interface listaEquipments {
    items: {
        eletrica: itemsEletrica1;
        refrigeracao: itemsRefrigeracao1;
        irradiacao: itemsIrradiacao1;
        telemetria: itemsTelemetria1;
    };
}
  
interface itemsEletrica {
    disjuntores: Disjuntor[];
    dps: DPS[];
    nobreaks: Nobreak[]
}

interface itemsRefrigeracao {
    ar_condicionados: ArCondicionado[];
    exaustor: Exaustor[];
}

interface itemsIrradiacao {
    antenas: Antena[];
    cabos: Cabo[];
    combinadores: Combinador[];
    parabolicas: Parabolica[];
    receptores: Receptor[];
    torres: Torre[];
    transmissores: Transmissor[];
}
  
interface itemsTelemetria {
    telemetria: Telemetria[];
    switches: Switch[];
}

interface itemsEletrica1 {
    disjuntores: DadosGerais[];
    dps: DadosGerais[];
    nobreaks: DadosGerais[]
}

interface itemsRefrigeracao1 {
    ar_condicionados: DadosGerais[];
    exaustor: DadosGerais[];
}

interface itemsIrradiacao1 {
    antenas: DadosGerais[];
    cabos: DadosGerais[];
    combinadores: DadosGerais[];
    parabolicas: DadosGerais[];
    receptores: DadosGerais[];
    torres: DadosGerais[];
    transmissores: DadosGerais[];
}
  
interface itemsTelemetria1 {
    telemetria: DadosGerais[];
    switches: DadosGerais[];
}