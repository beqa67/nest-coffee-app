import { Coffee } from '../coffees/entities/coffes.entity';
export declare class CoffesService {
    private coffees;
    findAll(): Coffee[];
    findOne(id: string): Coffee;
    create(createCoffeeDto: any): any;
    update(id: string, updateCoffeDto: any): void;
    remove(id: string): void;
}
