import Controller from "../interfaces/controller.interface";
import { Request, Response, NextFunction, Router } from 'express';
import { checkIdParam } from "../middlewares/deviceIdParam.middleware";

let testArr = [4,5,6,3,5,3,7,5,13,5,6,4,3,6,3,6];

class DataController implements Controller {
    public path = '/api/data';
    public router = Router();
 
    constructor() {
        this.initializeRoutes();
    }
 
    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, checkIdParam, this.getReading);
        this.router.get(`${this.path}/:id/latest`, this.getLatestReadings);
        this.router.get(`${this.path}/:id/:num`, checkIdParam, this.getReadingRange);
        this.router.post(`${this.path}/:id`, checkIdParam, this.addData);
        this.router.delete(`${this.path}/all`, this.cleanArray);
        this.router.delete(`${this.path}/:id`, checkIdParam, this.cleanSelected);
    }
    private getAll = async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(testArr);
    }
    private getLatestReadings = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        const max = testArr.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
        response.status(200).json(max);
    };
    private getReading = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        response.status(200).json(testArr[Number(id)]);
    }
    private getReadingRange = async (request: Request, response: Response, next: NextFunction) => {
        const { id, num } = request.params;

        const array = testArr.slice(Number(id),Number(id)+Number(num));
        response.status(200).json(array);
    }
    private addData = async (request: Request, response: Response, next: NextFunction) => {
        const { elem } = request.body;
        const { id } = request.params;
        testArr.push(Number(id));
        response.status(200).json(id);
    };
    private cleanArray = async (request: Request, response: Response, next: NextFunction) => {
        testArr = [];
        response.status(200).json(testArr);
    };
    private cleanSelected = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        testArr[Number(id)] = 0;
        response.status(200).json(testArr[Number(id)]);
    };
 }
 
 export default DataController;
 