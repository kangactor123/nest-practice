import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15 })
  title: string;

  @Column('int')
  year: number;

  @Column({
    array: true,
    type: 'varchar',
  })
  genres: string[];
}
