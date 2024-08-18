import { Chair, CoffeeTable, Sofa, FurnitureFactory } from "../Interfaces";
import { VictorianChair, VictorianCoffeeTable, VictorianSofa } from "./products";

export class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }
}
