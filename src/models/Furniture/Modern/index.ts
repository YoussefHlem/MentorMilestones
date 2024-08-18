import { Chair, CoffeeTable, Sofa, FurnitureFactory } from "../Interfaces";
import { ModernChair, ModernCoffeeTable, ModernSofa } from "./products";

export class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }
  createSofa(): Sofa {
    return new ModernSofa();
  }
}
