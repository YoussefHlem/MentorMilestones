import { Chair, CoffeeTable, Sofa } from "../Interfaces";

export class ModernChair implements Chair {
  doAction(): void {
    console.log("Modern Chair Created");
  }
}

export class ModernCoffeeTable implements CoffeeTable {
  doAction(): void {
    console.log("Modern Coffee Table Created");
  }
}

export class ModernSofa implements Sofa {
  doAction(): void {
    console.log("Modern Sofa Created");
  }
}
