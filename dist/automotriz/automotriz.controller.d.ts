import { AutomotrizService } from './automotriz.service';
export declare class AutomotrizController {
    private readonly automotrizService;
    constructor(automotrizService: AutomotrizService);
    getAutomotriz(): string;
    postAutomotriz(): string;
}
