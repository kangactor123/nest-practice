import { Injectable } from '@nestjs/common';
import { Movie } from './entity/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private readonly movieRepo: Repository<Movie>,
  ) {}

  async getAll(): Promise<Movie[]> {
    return await this.movieRepo.find();
  }

  // 한 개를 가져올 땐 findOneBy 메서드 사용
  async getOne(id: number): Promise<Movie> {
    // 조회해온 값이 없을 때 예외처리
    // const movie = await this.movieRepo.findOneBy({ id });

    // if (!movie) {
    //   throw new NotFoundException('존재하지 않는 영화 Id');
    // }
    // return movie;
    return await this.movieRepo.findOneByOrFail({ id });
  }

  // 값을 insert 할 땐 save
  async createMovie(dto: CreateMovieDto) {
    return await this.movieRepo.save(dto);
  }

  async deleteOne(id: number) {
    return await this.movieRepo.delete({ id });
  }

  async updateMovie(id: number, updateData: UpdateMovieDto) {
    return await this.movieRepo.update({ id }, updateData);
  }
}
