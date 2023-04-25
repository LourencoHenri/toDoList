import styles from "./Task.module.css"

import { Check, Trash } from "@phosphor-icons/react"
import { ITask } from "../App";

interface TaskProps {
    task: ITask;
    onDeleteTask: (task: ITask) => void;
    onDoneTask: (id : number) => void;
}

export function Task( { task, onDeleteTask, onDoneTask } : TaskProps) {

    function handleDeleteTask() {

        onDeleteTask(task)
    }

    function handleDone() {
        onDoneTask(task.id)
    }

    return (
        <div className={styles.task}>
            <label className={styles.hiddenCheckbox} > 
                <input type="checkbox" id="check" checked={task.done} onChange={handleDone}/>
                <span className={styles.currentCheckbox} >
                    { task.done ? <Check size={24} color="var(--gray-100)" className={styles.checkIcon} /> : "" }
                </span>
            </label>
            <p>
                {task.done ?
                <s className={styles.checkedTask}>{task.content}</s>
                :
                <>{task.content}</>}
            </p>
            <button type="button" className={styles.deleteTask} onClick={handleDeleteTask} >
                <Trash size={20} />
            </button>
        </div>
    )
}