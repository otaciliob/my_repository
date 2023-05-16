import { Controller, Get, Param, Post, Query, Render, Response  } from '@nestjs/common';
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
<<<<<<< HEAD
  }*/
  
  @Get('hbs')
=======
  }
  @Get('hbs')//template hbs
>>>>>>> 5c38638278ed58355bef97f8a6881f40cae2091a
  @Render('index.hbs')
  root(){
    return {message: 'MyHealth'}
  }
<<<<<<< HEAD

  @Post('auth/obj')
  getObj(@Response() response: Response){
    return this.appService.postYou(null);
  }

  /*@Get(':id')
=======
  @Get('?:id')//req.params
>>>>>>> 5c38638278ed58355bef97f8a6881f40cae2091a
    findOne(@Param('id') id: string): string {
      return this.appService.getYou(id);
  }*/

  @Get('?')
    findAll(@Query('id') id: string) {
      return this.appService.postYou(id);
  }

}
