using {
  Content,
  Tag
} from '../db/model';

@requires: 'authenticated-user'
service ContentService {

  entity Contents as projection on Content;
  entity Tags     as projection on Tag;

}
