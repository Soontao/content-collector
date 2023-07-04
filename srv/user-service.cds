@protocol: 'rest'
@impl    : './impl/user-service.cjs'
service UserService {

  @open
  action auth() returns {}

}
