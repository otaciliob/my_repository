import { Controller, Get, Param, Post, Query, Render, Response  } from '@nestjs/common';
import { AppService } from './app.service';
import { response } from 'express';

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

  @Post('auth/obj')
  getObj(@Response() response: Response){
    return this.appService.postYou(null);
  }

  /*@Get(':id')
    findOne(@Param('id') id: string): string {
      return this.appService.getYou(id);
  }*/

  @Get('?')
    findAll(@Query('id') id: string) {
      return this.appService.postYou(id);
  }

}
