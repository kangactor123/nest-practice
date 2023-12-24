import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entity/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  async getAll(): Promise<Movie[]> {
    return await this.moviesService.getAll();
  }

  // Query 데코레이터로 쿼리파람을 가져올 수 있음
  //   @Get('search')
  //   search(@Query('year') year: string) {
  //     return `we are searching for movie made after: ${year}`;
  //   }

  // Param 데코레이터로 path param 을 받아냄
  @Get(':id')
  async getOne(@Param('id') movieId: number): Promise<Movie> {
    return await this.moviesService.getOne(movieId);
  }

  @Post()
  async createMovie(@Body() movieDto: CreateMovieDto) {
    return await this.moviesService.createMovie(movieDto);
  }

  @Delete(':id')
  async deleteMovie(@Param('id') movieId: number) {
    return await this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patchMovie(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.updateMovie(movieId, updateData);
  }
}
