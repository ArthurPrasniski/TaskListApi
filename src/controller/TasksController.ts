import {getRepository} from 'typeorm'
import {Tasks} from '../entity/Tasks'
import {Request, Response} from 'express'
import { request } from 'http'
import { get } from 'https'

export const getTasks = async (request: Request, response: Response) =>{
    const tasks = await getRepository(Tasks).find()
    return response.json(tasks)
}

export const saveTask = async (request: Request, response: Response) =>{
    const task = await getRepository(Tasks).save(request.body)
    return response.json(task)
}

export const getTask = async (request: Request, response: Response) =>{
    const {id} = request.params
    const task = await getRepository(Tasks).findOne(id)
    return response.json(task)
}

export const updateTask = async (request: Request, response: Response) =>{
    const {id} = request.params
    const task = await getRepository(Tasks).update(id, request.body)

    if (task.affected === 1) {
        const taskUpdate = await getRepository(Tasks).findOne(id)
        return response.json(taskUpdate)
    }

    return response.status (404).json({
        message:'Essa tarefa não existe'
    })
}

export const finnishedTask = async (request: Request, response: Response) =>{
    const {id} = request.params

    const task = await getRepository(Tasks).update(id,{
        finished: true
    })
    if (task.affected === 1){
        const taskUpdate = await getRepository(Tasks).findOne(id)
        return response.json({message: 'Tarefa Concluida'})
    }
    return response.status(404).json({
        message:'Essa tarefa não existe'
    })
}

export const deleteTask = async (request: Request, response: Response) =>{
    const {id} = request.params
    const task = await getRepository(Tasks).delete(id)

    if (task.affected === 1){
        const taskUpdate = await getRepository(Tasks).findOne(id)
        return response.json({message: 'Tarefa deletada!'})
    }

    return response.status(404).json({
        message:'Essa tarefa não existe'
    })
}
