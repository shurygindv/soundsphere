import { Injectable } from '@graphql-modules/di';


import {TrackEntity} from '../../../entity/track';
import { BaseService } from '../../../core/base-service';

@Injectable()
export class TrackService extends BaseService<TrackEntity> {
    constructor () {
        super(TrackEntity);
    }
}
