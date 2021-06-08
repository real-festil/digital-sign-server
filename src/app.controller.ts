import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return 'Hello World!';
  }

  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'privateKey', maxCount: 1 },
      { name: 'file', maxCount: 1 },
    ]),
  )
  @Post('sign')
  signFile(@UploadedFiles() { privateKey: [privateKey], file: [file] }) {
    return this.appService.signFile(privateKey.buffer.toString(), file.buffer);
  }

  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'publicKey', maxCount: 1 },
      { name: 'file', maxCount: 1 },
    ]),
  )
  @Post('verify')
  verifyFile(
    @UploadedFiles() { publicKey: [publicKey], file: [file] },
    @Body('signature') signature,
  ) {
    return this.appService.verifyFile(
      publicKey.buffer.toString(),
      signature,
      file.buffer,
    );
  }
}
