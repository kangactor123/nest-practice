import { IsNumber, IsOptional, IsString } from 'class-validator';

// class validator 을 통해 유효성 검증
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsString({ each: true })
  @IsOptional()
  readonly genres: string[];

  @IsNumber()
  readonly year: number;
}
