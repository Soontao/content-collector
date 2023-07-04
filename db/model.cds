using {
  cuid,
  managed
} from '@sap/cds/common';
using {LoginUser} from './fundamental';


// the content format
type ContentFormat : String(10) enum {
  html;
  markdown;
  link;
}

entity Content : cuid, managed {
  link    : String(500);
  content : LargeString not null;
  fotmat  : ContentFormat not null;

  tags    : Association to many Tag
              on tags.content = $self;
}

entity Tag : cuid {
  name    : String(30);
  content : Association to one Content;
}
