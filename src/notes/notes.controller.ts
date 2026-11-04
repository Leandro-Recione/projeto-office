import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotesService } from './notes.service.js';
import { CreateNoteDto } from './dto/create-note-dto.js';
import { UpdateNoteDto } from './dto/update-note-dto.js';

@Controller('notes')
export class NotesController {
constructor(private readonly notesService: NotesService){}

@Get()
findAll(){
    return this.notesService.findAll();
}

@Get(':id')
findOne(@Param('id') id: number){
    return this.notesService.findOne(id);
}

@Post()
create(@Body() createNoteDto: CreateNoteDto){
return this.notesService.create(createNoteDto);
}

@Put(':id')
upadate(@Param('id') id: number, @Body() updateNoteDto: UpdateNoteDto){
    return this.notesService.update(id, updateNoteDto);
}

@Delete(':id')
delete(@Param('id') id: number ){
    return this.notesService.delete(id);
        return { mensagem: "Nota excluída com sucesso"};
}

}
