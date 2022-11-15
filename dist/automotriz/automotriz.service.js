"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomotrizService = void 0;
const common_1 = require("@nestjs/common");
let AutomotrizService = class AutomotrizService {
    getAutomotriz() {
        return 'Toyota Corolla, Renault Fluence, Nissan Sentra.';
    }
    postAutomotriz() {
        return 'Toyota Corolla: $4.000.000, Renault Fluence: $2.800.000, Nissan Sentra: $4.200.000';
    }
};
AutomotrizService = __decorate([
    (0, common_1.Injectable)()
], AutomotrizService);
exports.AutomotrizService = AutomotrizService;
//# sourceMappingURL=automotriz.service.js.map