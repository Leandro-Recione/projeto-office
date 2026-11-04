import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller.js';
import { NotesService } from './notes.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './entity/note-entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Notes])],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
