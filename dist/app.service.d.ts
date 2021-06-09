export declare class AppService {
    writeCert(buffer: any): Promise<string>;
    rmCert(certPath: any): Promise<void>;
    signFile(privateKeyBuffer: any, password: any, fileBuffer: any): Promise<any>;
    verifyFile(publicKeyBuffer: any, password: any, signature: any, fileBuffer: any): Promise<any>;
}
