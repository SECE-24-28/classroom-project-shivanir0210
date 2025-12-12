import { useState } from "react"

const Task1=()=>
{
    const [student,setstudent]=useState(
        {
            username:"",
            age:" ",
            gender:" ",
            dept:""
        }
    )

    const formSubmit=(e)=>
    {
        e.preventDefault()
        const {username,age,gender,dept}=student
        if(!username||!age||!gender||!dept)
        {
            alert("please fill this")
            return
        }
        console.log(student.username,student.age,student.gender,student.dept)
    }
    const change=(e)=>
    {
    setstudent((prev)=>
    {
        return ({
            ...prev,[e.target.name]:e.target.value
        })
    })
    }


    return (
        <>

        <h1>this is task today they gave</h1>
        <form onSubmit={formSubmit}>
        <h2>Name:</h2>
        <input onChange={change} name="username" value={student.username}></input>
        <h2>Age:</h2>
        <input onChange={change} name="age" value={student.age}></input>
        <h2>Gender:</h2>
        <input onChange={change} name="gender" value={student.gender}></input>
        <h2>Dept:</h2>
        <input onChange={change} name="dept" value={student.dept}></input>
        <input type="submit"  value="click!!!!!"></input>
        </form>

        </>
    )
}
export default Task1