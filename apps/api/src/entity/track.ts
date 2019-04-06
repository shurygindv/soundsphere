import {Entity, PrimaryColumn, BaseEntity} from 'typeorm';

@Entity()
export class TrackEntity extends BaseEntity {
  @PrimaryColumn()
  public id: string;

  constructor(id: string) {
    super();

    this.id = id;
  }
}
