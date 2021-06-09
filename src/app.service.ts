import { Injectable } from '@nestjs/common';
import * as digitalSign from 'digital-signing';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
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

    const result = digitalSign.verifyFile(
      certPath,
      password,
      signature,
      fileBuffer,
    );

    await this.rmCert(certPath);

    return result;
  }
}
