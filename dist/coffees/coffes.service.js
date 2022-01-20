"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffesService = void 0;
const common_1 = require("@nestjs/common");
let CoffesService = class CoffesService {
    constructor() {
        this.coffees = [
            {
                id: 1,
                name: 'beka lazarashvili',
                brand: 'apple',
                flavors: ['chocolate', 'vanila']
            }
        ];
    }
    findAll() {
        return this.coffees;
    }
    findOne(id) {
        const coffee = this.coffees.find(item => item.id === +id);
        if (!coffee) {
            throw new common_1.NotFoundException(`coffe ${id} not found`);
        }
        return coffee;
    }
    create(createCoffeeDto) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }
    update(id, updateCoffeDto) {
        const existingCoffe = this.findOne(id);
        if (existingCoffe) {
        }
    }
    remove(id) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
};
CoffesService = __decorate([
    (0, common_1.Injectable)()
], CoffesService);
exports.CoffesService = CoffesService;
//# sourceMappingURL=coffes.service.js.map