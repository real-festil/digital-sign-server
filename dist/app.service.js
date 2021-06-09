"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const digitalSign = require("digital-signing");
const fs = require("fs");
const path = require("path");
let AppService = class AppService {
    async writeCert(buffer) {
        const certPath = path.resolve(`temp-certificates/${Date.now()}.p12`);
        await fs.promises.writeFile(certPath, buffer);
        return certPath;
    }
    rmCert(certPath) {
        return fs.promises.rm(certPath);
    }
    async signFile(privateKeyBuffer, password, fileBuffer) {
        const certPath = await this.writeCert(privateKeyBuffer);
        const result = digitalSign.signFile(certPath, password, fileBuffer);
        await this.rmCert(certPath);
        return result;
    }
    async verifyFile(publicKeyBuffer, password, signature, fileBuffer) {
        const certPath = await this.writeCert(publicKeyBuffer);
        const result = digitalSign.verifyFile(certPath, password, signature, fileBuffer);
        await this.rmCert(certPath);
        return result;
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map