export class client{
    Cid:number;
    CName:string;
    CEmail:string;
    CPhone:number;

    constructor(CName:string,CEmail:string,CPhone:number,Cid:number){
        this.CName=CName;
        this.CEmail=CEmail;
        this.CPhone=CPhone;
        this.Cid=Cid;
    }
}