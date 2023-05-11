import { Controller, Get, Param, Render  } from '@nestjs/common';
import { AppService } from './app.service';

//toda rota cadastrada e uma junção do prefixo registrado no controller
//mais o prefixo registrado no decorator
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hbs')//template hbs
  @Render('index.hbs')
  root(){
    return {message: 'MyHealth'}
  }
  @Get('?:id')//req.params
    findOne(@Param('id') id: string): string {
      return this.appService.getYou(id);
  }
}
