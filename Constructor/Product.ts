class Product{
 pid:string;
 price:number;
 constructor(pid:string,price:number){
    this.pid = pid;
    this.price = price;
 }
}
class Order{
    constructor(private prod:Product){
        console.log("Order Confirmed for " +prod.pid + " pay the amount of "+ prd.price );
    }
}

let prd = new Product('abcq123',1000);

let o = new Order(prd);

