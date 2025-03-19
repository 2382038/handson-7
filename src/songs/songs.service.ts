import { Injectable } from '@nestjs/common';
import { CreateSongDTO} from './create-song.dto';
import { Songs } from './songs.entity';

@Injectable()
export class SongsService {
    private currentId: number = 0;
    private songs: Songs[] = [];


    findAll() : Songs[] {
        return this.songs;
    }

    findOne(id:number) : Songs[] {
        return this.songs.filter((song) => song.id == id);

    }

    delete(id:number) {
        this.songs = this.songs.filter((song) => song.id !=id);
    }

    create(createSongDTO: CreateSongDTO) {
        const song: Songs ={
            id: this.currentId,
            title: createSongDTO.title,
            artist: createSongDTO.artist,
        };

        ++this.currentId;
        this.songs.push(song);
    }

    updateOne(id:number, createSongDTO: CreateSongDTO) {
        this.songs.forEach((song) => {
            if (song.id == id) {
                song.artist = createSongDTO.artist;
                song.title = createSongDTO.title;
            }
        });
    }
}