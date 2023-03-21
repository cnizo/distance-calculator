import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Search {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100
  })
  source: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  destination: string;

  @Column({ nullable: true })
  distance!: number;
}
