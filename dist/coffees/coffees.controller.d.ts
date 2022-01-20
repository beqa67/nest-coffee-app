import { CoffesService } from 'src/coffees/coffes.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { updateCoffeDto } from './dto/update-coffee.dto';
export declare class CoffeesController {
    private readonly coffeService;
    constructor(coffeService: CoffesService);
    findAll(paginationQuery: any): import("./entities/coffes.entity").Coffee[];
    findOne(id: number): import("./entities/coffes.entity").Coffee;
    create(createCoffeeDto: CreateCoffeeDto): any;
    update(id: string, updateCoffeDto: updateCoffeDto): void;
    remove(id: string): void;
}
