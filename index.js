"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = {
    Embed(Base) {
        return class extends Base {
            Serialize(...args) {
                return "";
            }
            Deserialize(messsage) {
                return [];
            }
        };
    },
};
exports.default = lib;
