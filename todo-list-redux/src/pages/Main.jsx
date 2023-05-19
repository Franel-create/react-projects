import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Task from "../components/Task";
import { addTaskAC, finishTaskAC, deleteTaskAC, completedTaskAC, updateTaskAC } from "../reducer";



const Main = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            addTask(text);
        }
    }

    const addTask = (text) => {
        if (text) {
            dispatch(addTaskAC(text));
        }
        setText('');
    }

    const removeTask = (id) => {
        dispatch(deleteTaskAC(id));
    }

    const completedTasks = () => {
        dispatch(completedTaskAC());
    }


    const finishTask = (id) => {
        dispatch(finishTaskAC(id));
        completedTasks();
        dispatch(updateTaskAC());
    }


    return (
        <div className="page">
            <div className="container">
                <div className="todo">
                    <div className="todo__title">Todo List</div>
                    <div className="todo__container">
                        <div className="todo__body">

                            <div className="todo__sections sections">
                                <div className="sections__wrap">
                                    <Link to={'/completed'}>
                                        <button className="sections__completed btn">Completed</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="tasks">
                                {tasks && tasks.length
                                    ? tasks.map((el) => {
                                        return <Task key={el.id} {...el} removeTask={removeTask} finishTask={finishTask}/>;
                                        })
                                    : "No tasks"}
                            </div>
                            <div className="add-task">
                                <div className="add-task__wrap">
                                    <div className="add-task__body">
                                        <input type="text" 
                                            className="add-task__text" 
                                            placeholder="Add todo"
                                            onChange={handleChange}
                                            onKeyDown={handleKey}
                                            value={text}/>
                                        <button className="add-task__btn" 
                                            onClick={() => {addTask(text)}}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;