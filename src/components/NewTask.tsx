import styles from "./NewTask.module.css"

import Plus from "../assets/plus.svg"
import { ChangeEvent, FormEvent, useState } from "react"

interface NewTaskProps {
    handleCreateNewTask: ( event : FormEvent ) => void;
    handleChangeInput : ( event : ChangeEvent<HTMLInputElement> ) => void;
    content: string;
    isNewTaskEmpty: boolean;
}

export function NewTask({ handleChangeInput, handleCreateNewTask, content, isNewTaskEmpty } : NewTaskProps ) {

    return (
        <>
            <form className={styles.newTaskForm} >
                <input type="text" placeholder="Adicione uma nova tarefa" value={content} onChange={handleChangeInput}  />
                <button disabled={isNewTaskEmpty}  type="button" onClick={handleCreateNewTask} className={styles.newTaskButton}>
                    Criar
                    <img src={Plus} />
                </button>
            </form>            
        </>
    )
}