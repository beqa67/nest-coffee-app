"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCoffeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_coffee_dto_1 = require("./create-coffee.dto");
class updateCoffeDto extends (0, mapped_types_1.PartialType)(create_coffee_dto_1.CreateCoffeeDto) {
}
exports.updateCoffeDto = updateCoffeDto;
//# sourceMappingURL=update-coffee.dto.js.map