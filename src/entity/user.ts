import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({length: 100})
  public firstName: string;

  @Column({length: 100})
  public lastName: string;

  constructor (firstName: string, lastName: string);
  constructor(firstName: string, lastName: string, id?: number) {
    super();

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
