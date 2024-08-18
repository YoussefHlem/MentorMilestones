export interface Chair {
  doAction(): void;
}

export interface CoffeeTable {
  doAction(): void;
}

export interface Sofa {
  doAction(): void;
}

export interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
  createSofa(): Sofa;
}
