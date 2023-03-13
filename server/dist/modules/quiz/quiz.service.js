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
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const quiz_schema_1 = require("../../schema/quiz.schema");
let QuizService = class QuizService {
    constructor(QuizModel) {
        this.QuizModel = QuizModel;
    }
    async create(quiz) {
        const newBook = new this.QuizModel(quiz);
        return newBook.save();
    }
    async getAllQuiz() {
        const quizData = await this.QuizModel.find();
        if (!quizData || quizData.length == 0) {
            throw new common_1.NotFoundException('quiz data not found!');
        }
        return quizData;
    }
    async readbyId(id) {
        return await this.QuizModel.findById(id);
    }
    async updatebyId(id) {
        return await this.QuizModel.findByIdAndUpdate(id, quiz_schema_1.quiz, { new: true });
    }
    async delete(id) {
        return await this.QuizModel.findByIdAndDelete(id);
    }
};
QuizService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(quiz_schema_1.quiz.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QuizService);
exports.QuizService = QuizService;
//# sourceMappingURL=quiz.service.js.map