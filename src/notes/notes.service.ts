import { Injectable, NotFoundException } from '@nestjs/common';
import { Notes } from './entity/note-entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNoteDto } from './dto/create-note-dto.js';
import { UpdateNoteDto } from './dto/update-note-dto.js';

@Injectable()
export class NotesService {
    constructor(@InjectRepository(Notes) private readonly notesRepository: Repository<Notes>){}

findAllNotes(){
    return this.notesRepository.find();
}

async findOneNote(id: number){
    const note = await this.notesRepository.findOneBy({ id });
        if (!note) throw new NotFoundException(`Nota ${id} não encontrada`);
  return note;
}

async createNote(dto: CreateNoteDto){
    const note = this.notesRepository.create(dto);
        return await this.notesRepository.save(note);
}

async updateNote(id: number, dto: UpdateNoteDto){
    await this.findOneNote(id);
        await this.notesRepository.update(id, dto);
            return this.findOneNote(id);
}

async deleteNote(id: number){
    await this.findOneNote(id);
        await this.notesRepository.delete(id);
            return { mensagem:'Nota excluída com sucesso!'};
}

}
