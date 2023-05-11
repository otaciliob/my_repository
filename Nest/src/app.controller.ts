import { Controller, Get, Param, Render  } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hbs')
  @Render('index.hbs')
  root(){
    return {message: 'MyHealth'}
  }
  @Get('?:id')
    findOne(@Param('id') id: string): string {
      return this.appService.getYou(id);
  }
}
