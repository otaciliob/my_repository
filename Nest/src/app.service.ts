import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getYou(text: string): string {
    return 'Hello '+ text + '!';
  }
}
