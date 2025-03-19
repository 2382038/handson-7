import { Injectable } from '@nestjs/common';
import { title } from 'process';

export class CreateSongDTO {
    title : string;
    artist : string;
    
}