import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

//root module
@Module({
  imports: [],
  controllers: [MoviesController], //router
  providers: [MoviesService],
})
export class AppModule {}
