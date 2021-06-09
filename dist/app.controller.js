"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return 'Hello World!';
    }
    signFile({ privateKey: [privateKey], file: [file] }, password) {
        return this.appService.signFile(privateKey.buffer, password, file.buffer);
    }
    verifyFile({ publicKey: [publicKey], file: [file] }, password, signature) {
        return this.appService.verifyFile(publicKey.buffer, password, signature, file.buffer);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.UseInterceptors(platform_express_1.FileFieldsInterceptor([
        { name: 'privateKey', maxCount: 1 },
        { name: 'file', maxCount: 1 },
    ])),
    common_1.Post('sign'),
    __param(0, common_1.UploadedFiles()),
    __param(1, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "signFile", null);
__decorate([
    common_1.UseInterceptors(platform_express_1.FileFieldsInterceptor([
        { name: 'publicKey', maxCount: 1 },
        { name: 'file', maxCount: 1 },
    ])),
    common_1.Post('verify'),
    __param(0, common_1.UploadedFiles()),
    __param(1, common_1.Body('password')),
    __param(2, common_1.Body('signature')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "verifyFile", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map