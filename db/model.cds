using {
  cuid,
  managed
} from '@sap/cds/common';

// the content format
type ContentFormat : String(10) enum {
  html;
  markdown;
  link;
}

entity Token : managed {
  key ID     : Integer; // integer token, sequence
      value  : String(200) not null;
      expire : DateTime;
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
