import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import { useState } from 'react';

function App() {
    const onDelete = (todo)=>{
        console.log("I am onDelete",todo);
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }))
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
            <Todos todos={todos} onDelete={onDelete} />
            <Footer/>
        </>
    );
}

export default App;