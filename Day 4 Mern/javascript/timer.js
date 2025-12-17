/*function display()
{
console.log("i am inside method")
setTimeout(()=>{
    console.log("i am inside timer")
},3000)it will wait for 3s  while waiting it will run the remainging code
}
display()
console.log("hellow")*/

/*console.log("i am inside method")
setTimeout(()=>{
    console.log("i am inside timer")
},3000)*/

//call back method


/*function display(show){
    let istrue = true;
    if(istrue){
    
        {
            show("shiva") 
        }
    }
    console.log("hello");
}
display(timer)
function timer(a){
    console.log("i am inside timer",a);
}*/


//promise
/*let mypromise=new Promise((resolve,reject)=>{
    let istrue=true
    if(istrue)
    {
        resolve(1000)
    }
    else
    {
        reject()
    }
})
mypromise.then(sucess)
.catch(fail)
function sucess(data)
    {
        console.log("done")
    }
    function fail()
    {
        console.log("fail")
    }
*/
/*let mypromise=new Promise((resolve,reject)=>{
    let istrue=true
    if(istrue)
    {
        resolve(1000)
    }
    else
    {
        reject()
    }
})
mypromise.then((data)=>{
    console.log("done")
})
.catch(()=>{
    console.log("fail")
})*/

/*function display()
{
    return new Promise((resolve,reject)=>{
        let istrue=false
        if(istrue)
        {
            resolve(1000)
        }
        else
        {
            reject()
        }
    })
}
display().then((data)=>{
    console.log("done......")
})
.catch(()=>{
    console.log("fail")
})
*/

/*function display(a){
    return new Promise((resolve,reject)=>{
        let istrue=true
        if(istrue)
        {
            resolve("asdf")
        }
        else{
            reject("rty")
        }
    })
}
async function show()
{
    try{
        var res=await display()
        console.log(res)
    }
    catch(exception)
    {
    console.log("the pb is:",exception)
    }
}
show()*/
let p=new Promise((resolve,reject)=>{
 resolve("shiva")
})
p.then((data)=>{
    console.log(data)
})