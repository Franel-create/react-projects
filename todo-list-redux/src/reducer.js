const initialState = {
    tasks: [],
    completed: []
}

const ADD_NEW_TASK = 'ADD_NEW_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const FINISH_TASK = 'FINISH_TASK';
const COMPLETED_TASK = 'COMPLETED_TASK';

const getId = (state) => {
    return state.tasks.reduce((maxId, el) => {
        return Math.max(el.id, maxId)
    }, -1) + 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK: {
            const newTask = {
                id: getId(state),
                text: action.newTaskText,
                finished: false
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }
        }
        case COMPLETED_TASK: {
            const objTasks = state.tasks.filter(el => el.finished === true).shift();
            return {
                ...state,
                completed: [...state.completed, objTasks]
            }
        }
        case FINISH_TASK: {
            const itemIndex = state.tasks.findIndex((item) => item.id === action.payload.id);
            return {
                ...state,
                tasks: state.tasks.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            finished: true
                        }
                    } else {
                        return item;
                    }
                })
            }
        }
        case UPDATE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(el => el.finished === false)
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== action.payload.id)
            }
        }
        default:
            return state;
    };
};

export const addTaskAC = (newTaskText) => ({ type: ADD_NEW_TASK, newTaskText });
export const deleteTaskAC = (taskId) => ({ type: DELETE_TASK, payload: { id: taskId } });
export const finishTaskAC = (taskId) => ({ type: FINISH_TASK, payload: { id: taskId } });
export const completedTaskAC = () => ({ type: COMPLETED_TASK });
export const updateTaskAC = () => ({ type: UPDATE_TASK });

export default reducer;


