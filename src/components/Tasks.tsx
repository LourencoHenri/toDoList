import { ITask } from "../App";
import { Empty } from "./Empty";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface TasksProps {
    tasks: ITask[];
    taskDone: boolean;
    onDeleteTask: (task: ITask) => void;
    onDoneTask: (id : number) => void;
}

export function Tasks({ tasks, onDeleteTask, onDoneTask } : TasksProps) {

    const countDoneTasks = tasks.reduce((count, task) => count + (task.done ? 1 : 0), 0)

    return (
        <div className={styles.tasksContainer}>
            <div className={styles.tasksHeader} >
                <span>
                    Tarefas criadas
                    <span className={styles.counter}>
                        {tasks.length}
                    </span>
                </span>
                <span>
                    Concluídas
                    <div className={styles.counter}>
                        {tasks.length ?
                        <span>
                            {`${countDoneTasks} de ${tasks.length}`}
                        </span>
                        :
                        <span>
                            {tasks.length}                  
                        </span>}
                    </div>
                </span>
            </div>

            <div className={styles.list}>
                

                {tasks.length ? <>{tasks.sort(( a, b ) => {
                    if (a.done && !b.done) {
                        return 1
                    }
                    
                    if (!a.done && b.done) {
                        return -1
                    }

                    if (a.done && b.done) {
                        return a.id - b.id
                    }

                    if (!a.done && !b.done) {
                        return b.id - a.id
                    }

                    return 0

                }).map(task => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            onDeleteTask={onDeleteTask}
                            onDoneTask={onDoneTask}
                        />
                    )
                })}</> : <Empty />}

            </div>

        </div>
    )
}