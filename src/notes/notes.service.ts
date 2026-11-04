import { Injectable } from '@nestjs/common';
import { Notes } from './entity/note-entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNoteDto } from './dto/create-note-dto.js';
import { UpdateNoteDto } from './dto/update-note-dto.js';

@Injectable()
export class NotesService {
    constructor(@InjectRepository(Notes) private readonly notesRepository: Repository<Notes>){}

findAll(){
    return this.notesRepository.find();
}

findOne(id: number){
    return this.notesRepository.findOneBy({ id });
}

async create(dto: CreateNoteDto){
    const note = this.notesRepository.create(dto);
        return await this.notesRepository.save(note);
}

async update(id: number, dto: UpdateNoteDto){
    await this.findOne(id);
        await this.notesRepository.update(id, dto);
            return this.findOne(id);
}

async delete(id: number){
    await this.findOne(id);
        await this.notesRepository.delete(id);
            return { mensagem:'Nota excluída com sucesso!'};
}

}
