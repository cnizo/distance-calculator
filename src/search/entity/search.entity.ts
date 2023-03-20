import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Search {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100
  })
  sourceAddress: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  destinationAddress: string;

  @Column({ nullable: true })
  distance!: number;
}
