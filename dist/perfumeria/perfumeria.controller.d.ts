import { PerfumeriaService } from './perfumeria.service';
export declare class PerfumeriaController {
    private readonly perfumeriaservice;
    constructor(perfumeriaservice: PerfumeriaService);
    getPerfumeria(): string;
    postPerfumeria(): string;
}
