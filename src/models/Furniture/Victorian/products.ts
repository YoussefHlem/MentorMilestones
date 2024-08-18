import { Chair, CoffeeTable, Sofa } from "../Interfaces";

export class VictorianChair implements Chair {
  doAction(): void {
    console.log("Victorian Chair Created");
  }
}

export class VictorianCoffeeTable implements CoffeeTable {
  doAction(): void {
    console.log("Victorian Coffee Table Created");
  }
}

export class VictorianSofa implements Sofa {
  doAction(): void {
    console.log("Victorian Sofa Created");
  }
}
