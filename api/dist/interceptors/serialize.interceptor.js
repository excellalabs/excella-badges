"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializerInterceptor = exports.Serialize = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
function Serialize(dto) {
    return (0, common_1.UseInterceptors)(new SerializerInterceptor(dto));
}
exports.Serialize = Serialize;
class SerializerInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            return (0, class_transformer_1.plainToInstance)(this.dto, data, {
                excludeExtraneousValues: true,
            });
        }));
    }
}
exports.SerializerInterceptor = SerializerInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map