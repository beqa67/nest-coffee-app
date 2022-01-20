import { Body, Controller, Get, Param, Patch, Post, Delete, Query } from '@nestjs/common';
import { CoffesService } from 'src/coffees/coffes.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { updateCoffeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeService: CoffesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
       return this.coffeService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(typeof id);
        
        return this.coffeService.findOne('' + id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        
        return this.coffeService.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeDto: updateCoffeDto) {
        return this.coffeService.update(id, updateCoffeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeService.remove(id)
    }
}
