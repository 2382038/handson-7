import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './create-song.dto';
import { ExecutionTime } from 'src/execution-time.interceptors';

@Controller('songs')
export class SongsController {
        constructor(private readonly songsService: SongsService){}
    
    @Get()
    findAll(){
        return this.songsService.findAll;
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.songsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createSongDTO: CreateSongDTO){
        return this.songsService.updateOne(id, createSongDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.songsService.delete(id);
    }

    @Post()
    @UseInterceptors(ExecutionTime)
    create(@Body() createSongDTO: CreateSongDTO){
        return this.songsService.create(createSongDTO);
}
}