/*async function display()
{
    try
    {
    var res=await fetch("https://jsonplaceholder.typicode.com/users")
    var a=await res.json()
    console.log(a)
    }
    catch(exception)
    {
        console.log("failed")
    }
}
display()*/

/*async function display() {
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",//used to add
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Shiva",
                gender: "female"
            })
        });

        var data = await res.json();
        console.log(data);
    }
    catch (e) {
        console.log("fail");
    }
}

display();*/

//to update
// async function display() {
//     try {
//         var res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
//             method: "PUT",//used to update
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: "dhiva",
//                 gender: "female"
//             })
//         });

//         var data = await res.json();
//         console.log(data);
//     }
//     catch (e) {
//         console.log("fail");
//     }
// }
// display()

//delete
async function display() {
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "DELETE",//used to delete
            });

        
        console.log("deleted  ",res);
    }
    catch (e) {
        console.log("fail");
    }
}
display();

