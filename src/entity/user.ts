import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  public id: string;

  @Column({ length: 100 })
  public firstName: string;

  @Column({ length: 100 })
  public lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
