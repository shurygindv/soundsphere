import {Entity, Column, PrimaryColumn, BaseEntity} from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  public id: string;

  @Column({length: 100})
  public firstName: string;

  @Column({length: 100})
  public lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    super();

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
