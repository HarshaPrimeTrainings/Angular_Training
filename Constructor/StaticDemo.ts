class StaticDemo{
  static username:string = 'Hello';

 static display(){
    console.log('Hello Iam Static Method');
 }
}

console.log(StaticDemo.username);
StaticDemo.display();