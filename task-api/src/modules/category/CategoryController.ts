import {Application, Request, Response} from 'express'
import Category from './entity/Category';
import CategoryService from "./service/CategoryService";

export default class CategoryController {
    private service : CategoryService;

    public constructor(private app : Application, service : CategoryService) { 
        this.service = service
    }

    public init() {
        this.app.get('/categories',     (_req, _res) => { this.getCategories(_req, _res)});
    }

    private getCategories(req : Request, res : Response) {
        const categories : Category[] = this.service.getCategories();
        res.json(categories); 
    }
}


