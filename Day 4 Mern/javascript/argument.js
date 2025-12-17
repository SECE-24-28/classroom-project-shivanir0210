
/*a=[2,3,4,9,5,6,7]
for(let arr in a)
console.log(arr)*/

/*function add(a,b)
{
let c=a+b;
console.log("hellow")
console.log(c)
}
let ans=add(2,3)
console.log("hellow")*/

/*function add(a, b)
{
let c=a+b;
console.log("hellow")
return c;
}
let ans=add(3,4)
console.log(ans) */

/*function add()
{
    let c=3+3
    console.log(c)
}
add()
console.log("hellow")*/

/*const add=(a,b)=>
{
    var c=a+b;
    console.log(c)
    console.log("hellow")
}
add(2,2)
console.log("hellow")*/

/*const sub=()=> console.log("hellow")
sub()*/

/*const sub=(a,b)=>
{
    let c=a+b
    console.log("hellow")
    return c
}
res=sub(1,1)
console.log(res)
*/

/*const mul=(a,b)=>
{
    let c=a+b
    console.log(c)
}
mul(3,3)
console.log("hellow")
*/

/*var a=["shiva","aarthi","kani","mani"]
var arr=[]
for(var i=0;i<a.length;i++)
{
    arr.push(a[i].toUpperCase())
}
console.log(arr)  */


/*var a=["shiva","aarthi","kani","mani","aswin"]
const b=a.map((d)=>d.toUpperCase())
console.log(b)*///it is used when we want to performm specific operation

/*a=[1,3,4,5,6,7,8]
arr=[]
for(var i=0;i<a.length;i++)
{
    if(a[i]%2==0)
    {
        arr.push(a[i])
    }
}
console.log(arr)*/

/*a=[3,4,5,6,7]
const arr=a.filter((d)=>{return d%2==0})
console.log(arr)*/

/*a=[3,4,5,6,7]
const arr=a.find((d)=>{return d>6})
console.log(arr)//return the first occurrence*/

/*a=[2,3,4,5,67]
const arr=a.reduce((a,b)=>{return a+b})
console.log(arr)
*/
/*let person=
{
    name:"shiva",
    dept:"IT"
}
console.log(person)
console.log(person.name)*/

/*let person=new Object()
person.name="shiva"
person.age=20
console.log(person)
console.log(person.name)*/

function Person(name, age)//the Person p should be capital otherwise it will take it as function name
{
    this.name=name;
    this.age=age;
    console.log(this.name,name)
}
let person=new Person("shiva", 20)










