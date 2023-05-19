import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { completedTaskAC } from "../reducer";


const CompletedTasks = (props) => {
    const navigate = useNavigate();
    const completed = useSelector(state => state.completed);

    return (
        <div className="page">
        <div className="container">
            <div className="todo">
                <div className="todo__title">Completed Tasks</div>
                <div className="todo__container">
                    <div className="todo__body">
                        <button className='todo__btn btn' onClick={() => navigate(-1)}>Go back</button>
                        <div className="todo__completed completed">
                            <ul className="completed__ul">
                                {completed ? completed.map(el => {
                                    return <li key={el.id}>{el.text}</li>
                                }): 'No completed tasks'}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CompletedTasks;




