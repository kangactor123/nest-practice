import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      port: 5432,
      username: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: 'postgres',
      synchronize: true, // 스키마 자동 동기화
      dropSchema: false, // 애플리케이션 실행 시 기존 스키마 삭제 여부
      logging: true,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      extra: {
        max: 100,
      },
    };
  }
}
