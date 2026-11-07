import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entiy/task-entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task-dto.js';
import { UpdateTaskDto } from './dto/update-task-dto.js';

@Injectable()
export class TaskService {
     constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>){}

findAllTask(){
    return this.taskRepository.find();
}

async findOneTask(id: number){
    const task = await this.taskRepository.findOneBy({ id });
        if (!task) throw new NotFoundException(`Nota ${id} não encontrada`);
          return task;
}

async createTask(dto: CreateTaskDto){
    const task = this.taskRepository.create(dto);
        return await this.taskRepository.save(task);
}

async updateTask(id: number, dto: UpdateTaskDto){
    await this.findOneTask(id);
        await this.taskRepository.update(id, dto);
            return this.findOneTask(id);
}

async deleteTask(id: number){
    await this.findOneTask(id);
        await this.taskRepository.delete(id);
            return {mensagem: 'Tarefa excluída com sucesso!'}
}

}
