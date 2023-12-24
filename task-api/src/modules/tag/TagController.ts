import {Application, Request, Response} from 'express'
import TagService from './service/TagService'
import Tag from './entity/Tag';

export default class TagController {
    private service : TagService;

    public constructor(private app : Application, service : TagService) { 
        this.service = service
    }

    public init() {
        this.app.get('/tags',     (_req, _res) => { this.getTags(_req, _res)});
    }

    private getTags(req : Request, res : Response) {
        const tags : Tag[] = this.service.getTags();
        res.json(tags)
    }
}


