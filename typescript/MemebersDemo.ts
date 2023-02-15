class Person{
    public username:string = 'joe';
    protected addr: string = 'NY';
    private contact: string = '+102345678';

    private secretData(){
        console.log("Secret message some one was sleeping" );
    }

    public getData(){
        this.secretData();
        console.log(this.username + " :: " + this.addr + " :: "+ this.contact);
    }

    protected getProtectedData(){
        console.log(" ==== Protected Data ===");
    }

}

class child extends Person{
    getparentdata(){
        console.log(this.username + " :: " + this.addr );
        this.getProtectedData();
    }
}

let p = new Person();
console.log(p.username);
p.getData();

let c = new child();
console.log(" ===== Child Class ===");
console.log(c.username);
c.getparentdata();