import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from '../coffees/entities/coffes.entity';

@Injectable()
export class CoffesService {
    private coffees: Coffee[] = [
     {
        id: 1,
        name: 'beka lazarashvili',
        brand: 'apple',
        flavors: ['chocolate', 'vanila']
     }   
    ];
    findAll() {
        return this.coffees
    }

    findOne(id: string) {
        const coffee = this.coffees.find(item => item.id === +id)
        
        if (!coffee) {
            throw new NotFoundException(`coffe ${id} not found`)
        }
        return coffee
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto) 
        return createCoffeeDto
    }

    update(id: string, updateCoffeDto: any) {
        const existingCoffe = this.findOne(id)
        if (existingCoffe) {
            // update the existing coffe
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1)
        }
    }
}
