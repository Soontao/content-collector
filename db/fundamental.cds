using {
  cuid,
  managed
} from '@sap/cds/common';


entity LoginUser : managed {
  key login_name   : String(50) not null;
      login_secret : String(64) not null; // sha256 hashed secret
}

entity Session : cuid {
  content : LargeString;
}
