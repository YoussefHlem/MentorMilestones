import { ConvertionMethod } from "./interfaces";

export class LocalConversion implements ConvertionMethod {
  convertFile(file: string, into: string): void {
    console.log(`file: ${file}, into: ${into}`);
  }
}

export class CloudConversion implements ConvertionMethod {
  convertFile(file: string, into: string): void {
    console.log(`file: ${file}, into: ${into}`);
  }
}

export class APIConversion implements ConvertionMethod {
  convertFile(file: string, into: string): void {
    console.log(`file: ${file}, into: ${into}`);
  }
}
