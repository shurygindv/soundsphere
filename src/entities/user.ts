import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryColumn()
  public id: string;

  @Column({length: 100})
  public firstName: string;

  @Column({length: 100})
  public lastName: string;
}
