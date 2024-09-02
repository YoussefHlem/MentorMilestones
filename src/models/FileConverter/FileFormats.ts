import { ConvertionMethod } from "./interfaces";

export abstract class FileFormat {
  protected ConvertionMethod: ConvertionMethod;

  constructor(ConvertionMethod: ConvertionMethod) {
    this.ConvertionMethod = ConvertionMethod;
  }

  convert(into: string) {
    this.ConvertionMethod.convertFile(this.constructor.name, into);
  }
}

export class PDFFile extends FileFormat {
  PDFConvert(into: string) {
    console.log("Coverting...");
    this.convert(into);
  }
}

export class DOCXFile extends FileFormat {
  DOCXConvert(into: string) {
    console.log("Coverting...");
    this.convert(into);
  }
}

export class TXTFile extends FileFormat {
  TXTConvert(into: string) {
    console.log("Coverting...");
    this.convert(into);
  }
}
