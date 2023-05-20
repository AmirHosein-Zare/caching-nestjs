import { Controller, Post, Body, Delete, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) {}

  @Post()
  getHello(@Body() input: { name : string}) {
    return this.appService.getHello(input.name);
  }

  @Delete(':key')
  deleteKey(@Param('key') key): void{
      this.appService.delValue(key);
  }
}
