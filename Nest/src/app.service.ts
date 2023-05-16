import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }
  getYou(text: string) {
    return 'Hello '+ text + '!';
  }
  postYou(id: string) {
    return { msg: 'object ', id};
  }
}
