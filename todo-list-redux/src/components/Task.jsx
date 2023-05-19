import React from "react";

const Task = (props) => {
    const {id, text, removeTask, finishTask} = props;

    return (
        <div className="task">
            <div className="task__wrap">
                <input type='checkbox' className="task__check" onClick={() => {finishTask(id)}}/>
                <div className="task__text">{text}</div>
                <button className="task__edit btn">Edit</button>
                <button className="task__delete btn" onClick={() => {removeTask(id)}}>Delete</button>
            </div>
        </div> 
    )
}

export default Task;




