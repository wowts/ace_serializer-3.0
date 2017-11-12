import { Constructor, Library } from "@wowts/tslib";

export interface AceSerializer {
    Serialize(...args: any[]): string;
    Deserialize(messsage: string): any[];
}

const lib: Library<AceSerializer> = {
    Embed<T extends Constructor<{}>>(Base: T): Constructor<AceSerializer> & T {
        return class extends Base {
            public Serialize(...args: any[]): string {
                return "";
            }
            public Deserialize(messsage: string): any[] {
                return [];
            }
        };
    },
};
export default lib;
