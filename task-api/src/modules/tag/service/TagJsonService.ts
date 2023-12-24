import Tag from "../entity/Tag";
import TagService from "./TagService";

export class TagsJsonService implements TagService {

    public constructor(private tags : Tag[]) {}
    
    getTags(): Tag[] {
        return [...this.tags];
    }

    getTag(id: number): Tag {
        const foundTag = this.tags.find((tag) => {
            return tag.id == id
        })

        if(foundTag == undefined)
            throw new Error('Tag not found with this id');

        return foundTag;
    }

    createTag(): boolean {
        throw new Error("Method not implemented.");
    }

    updateTag(): boolean {
        throw new Error("Method not implemented.");
    }

}
