using {
  cuid,
  managed
} from '@sap/cds/common';

entity Token : managed {
  key ID     : Integer; // integer token, sequence
      value  : String(200) not null;
      expire : DateTime;
}
