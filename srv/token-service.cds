using {Token} from '../db/model';

@requires: 'authenticated-user'
@protocol: 'rest'
service TokenService {

  @readonly
  entity Tokens as projection on Token;

  action genearte_token(expire : DateTime) returns String;

  action validate_token(token : String)    returns {
    id : Integer;
    expire : DateTime;
  };
}
