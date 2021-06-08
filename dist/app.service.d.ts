export declare class AppService {
    signFile(privateKey: any, fileBuffer: any): Promise<any>;
    verifyFile(publicKey: any, signature: any, fileBuffer: any): Promise<any>;
}
