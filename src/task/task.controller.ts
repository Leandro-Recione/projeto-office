import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service.js';
import { CreateTaskDto } from './dto/create-task-dto.js';
import { UpdateTaskDto } from './dto/update-task-dto.js';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService){}

@Get()
findAllTask(){
    return this.taskService.findAllTask();
}

@Get(':id')
findOneTask(@Param('id') id: number){
    return this.taskService.findOneTask(id);
}

@Post()
createTask(@Body() createTaskDto: CreateTaskDto){
    return this.taskService.createTask(createTaskDto);
}

@Put(':id')
updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto){
    return this.taskService.updateTask(id, updateTaskDto);
}

@Delete(':id')
deleteTask(@Param('id') id: number){
    return this.taskService.deleteTask(id);
}

}
