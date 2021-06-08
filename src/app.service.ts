import { Injectable } from '@nestjs/common';
import * as digitalSign from 'digital-signing';

@Injectable()
export class AppService {
  async signFile(privateKey, fileBuffer) {
    return digitalSign.signFile(privateKey, fileBuffer);
  }

  async verifyFile(publicKey, signature, fileBuffer) {
    return digitalSign.verifyFile(publicKey, signature, fileBuffer);
  }
}
