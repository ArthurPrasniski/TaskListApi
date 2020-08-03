import { Router, Request, Response } from 'express'
import { getTasks, saveTask, getTask, updateTask, finnishedTask, deleteTask } from './controller/TasksController'

const routes = Router()

routes.get('/',(request: Request, response: Response)=>{
    return response.json({message:"hello world"})
})

routes.get('/tasks', getTasks)
routes.post('/tasks', saveTask)
routes.get('/tasks/:id', getTask)
routes.put('/tasks/:id', updateTask)
routes.patch('/tasks/:id', finnishedTask)
routes.delete('/tasks/:id', deleteTask)

export default routes