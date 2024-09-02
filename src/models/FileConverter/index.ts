import { FileFormat } from "./FileFormats";

export default function fileConvertion(abstraction: FileFormat, into: string) {
  abstraction.convert(into);
}
