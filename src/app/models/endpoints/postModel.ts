export interface Post {

    id:string;
    author: string;
    authorName: string;
    timestamp:string;
    text: string;
    isMod:boolean;
    parentId:string;
    flaggedBy: string[]

}