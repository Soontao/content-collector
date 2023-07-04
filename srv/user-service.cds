// this service is public
@protocol: 'rest'
@impl    : './impl/user-service.cjs'
service UserService {

  // do authentication (with session)
  @open
  action auth() returns {}

}
