import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffesService } from './coffes.service';

@Module({
    controllers: [CoffeesController], 
    providers: [CoffesService]
})
export class CoffeesModule {}
