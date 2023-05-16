import { Controller, Get, Param, Post, Query, Render, Body, Redirect  } from '@nestjs/common';
import { AppService } from './app.service';
import { response } from 'express';

//toda rota cadastrada e uma junção do prefixo registrado no controller
//mais o prefixo registrado no decorator
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get()
  getHello(): string {
    return this.appService.getHello();
  }*/
  
  @Get('hbs')
  @Render('index.hbs')
  root(){
    return {message: 'MyHealth'}
  }

  @Post('hbs')
  getObj(@Body('nome')nome: string){
    return this.appService.postYou(null);
  }

  @Get('myhealth')
  @Redirect('hbs')

  /*@Get(':id')
    findOne(@Param('id') id: string): string {
      return this.appService.getYou(id);
  }*/

  @Get('?')
    findAll(@Query('id') id: string) {
      return this.appService.postYou(id);
  }

}
