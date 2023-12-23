import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    return this.movies.find((movie) => movie.id === id);
  }

  createMovie(dto: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...dto,
    });
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  updateMovie(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
