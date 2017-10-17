import { Library } from "@wowts/tslib";
export interface AceSerializer {
    Serialize(...args: any[]): string;
    Deserialize(messsage: string): any[];
}
declare const lib: Library<AceSerializer>;
export default lib;
