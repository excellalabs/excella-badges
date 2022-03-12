"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_1 = require("./user");
const crypto_1 = require("crypto");
const util_1 = require("util");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let UserService = class UserService {
    constructor(repo) {
        this.repo = repo;
        this.repo = repo;
    }
    async create(newUser) {
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(newUser.password, salt, 32));
        const hashedPassword = salt + '.' + hash.toString('hex');
        newUser.password = hashedPassword;
        const user = this.repo.create(newUser);
        return this.repo.save(user);
    }
    findOne(id) {
        if (!id)
            return null;
        return this.repo.findOne(id);
    }
    findByEmail(email) {
        return this.repo.find({ email });
    }
    findAll() {
        return this.repo.find();
    }
    async update(id, attrs) {
        const user = await this.findOne(id);
        if (!user) {
            console.error('Update user: user not found');
            return null;
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user) {
            console.error('Update user: user not found');
            return null;
        }
        return this.repo.delete(id);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map