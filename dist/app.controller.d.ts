import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    signFile({ privateKey: [privateKey], file: [file] }: {
        privateKey: [any];
        file: [any];
    }, password: any): Promise<any>;
    verifyFile({ publicKey: [publicKey], file: [file] }: {
        publicKey: [any];
        file: [any];
    }, password: any, signature: any): Promise<any>;
}
