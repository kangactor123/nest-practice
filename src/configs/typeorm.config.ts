import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
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
