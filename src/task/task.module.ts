import { Module } from '@nestjs/common';
import { TaskController } from './task.controller.js';
import { TaskService } from './task.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entiy/task-entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
