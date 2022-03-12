import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { useState } from 'react';

function App() {
    const onDelete = (todo)=>{
        console.log("I am onDelete",todo);
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }))
    }
    const addTodo = (title,desc)=>{
        console.log("I am adding todo",title,desc)
        let sno =todos[todos.length-1].sno+1;
        const myTodo = {
            sno:sno,
            title : title,
            desc:desc
        }
        setTodos([...todos,myTodo]);
        console.log(myTodo);
    }
    const [todos, setTodos] = useState( [
        {
            sno:1,
            title:"Go to the market",
            desc:"You need to go to market to get this job"
        },
        {
            sno:2,
            title:"Go to the mall",
            desc:"You need to go to market to get this job2"
        },
        {
            sno:3,
            title:"Go to the hosp",
            desc:"You need to go to market to get this job3"
        },
    ])
    return (
        <>
            <Header title="My Todo List" />
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete} />
            <Footer/>
        </>
    );
}

export default App;