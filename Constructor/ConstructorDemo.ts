class ConstructorDemo{
    username:string;

    constructor(username:string, id:number){
        this.username = username;
    }

}
let cd = new ConstructorDemo('Harsha',1);

console.log(cd.username);
