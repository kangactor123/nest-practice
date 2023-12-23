import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // Query 데코레이터로 쿼리파람을 가져올 수 있음
  //   @Get('search')
  //   search(@Query('year') year: string) {
  //     return `we are searching for movie made after: ${year}`;
  //   }

  // Param 데코레이터로 path param 을 받아냄
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    const movie = this.moviesService.getOne(movieId);

    if (!movie) {
      throw new NotFoundException(`Movie with ID not found:${movieId}`);
    }

    return movie;
  }

  @Post()
  createMovie(@Body() movieDto: CreateMovieDto) {
    return this.moviesService.createMovie(movieDto);
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patchMovie(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.updateMovie(movieId, updateData);
  }
}
