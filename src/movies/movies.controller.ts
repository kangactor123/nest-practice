import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  //   Query,
  //   Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

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
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  createMovie(@Body() movieDto) {
    // console.log(movieDto);
    // return 'This will create movie';
    return this.moviesService.createMovie(movieDto);
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patchMovie(@Param('id') movieId: string, @Body() movieDto) {
    return {
      updateMovieId: movieId,
      ...movieDto,
    };
  }

  //   @Put('/:id')
  //   updateMovie()
}
