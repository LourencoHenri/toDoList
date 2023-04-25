import { ChangeEvent, FormEvent, useState } from 'react';

import { Header } from "./components/Header"
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

export interface ITask {
  id: number;
  content: string;
  done: boolean;
}

export function App() {

  const [newTaskContent, setNewTaskContent] = useState("")
  const [tasks, setTasks] = useState<ITask[]>([])

  const [taskDone, setTaskDone] = useState(false)
  const [Ids, SetIds] = useState<number[]>([])

  function handleChangeInput( event: ChangeEvent<HTMLInputElement> ) {
    setNewTaskContent(event.target.value)
  }

  function handleDeleteTask(taskToDelete : ITask) {

    const tasksWithoutDeletedOne = tasks.filter(task => {
        return (
            task.id != taskToDelete.id
        )
    })

    setTasks(tasksWithoutDeletedOne)

  }

  const isNewTaskEmpty = newTaskContent.length < 2;

  function handleCreateNewTask(event : FormEvent ) {
    event.preventDefault()

    const idList = tasks.map( c => c.id)

    const biggestId = idList.reduce(( a, b ) => {
      return Math.max( a , b )
    }, 0)

    const newTask : ITask = {
      content: newTaskContent,
      id: tasks.length ? biggestId + 1 : 0,

      done: taskDone,
    }

    setTasks(state => [newTask,...state ])
    setNewTaskContent("")
    
  }

  function toggleDoneTask(id : number) {

    const newTasks = tasks.map(task => {

      if (task.id === id) {
        task.done = !task.done
      }

      return task
    });

    setTasks(newTasks)
  }

  return (
    <>
      <Header />
      <NewTask isNewTaskEmpty={isNewTaskEmpty} content={newTaskContent} handleChangeInput={handleChangeInput} handleCreateNewTask={handleCreateNewTask} />
      <Tasks tasks={tasks} taskDone={taskDone} onDeleteTask={handleDeleteTask} onDoneTask={toggleDoneTask} />
    </>
  )
}