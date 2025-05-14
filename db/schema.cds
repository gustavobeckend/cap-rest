namespace my.bookshop;

entity Books {
  key ID    : Integer;
      title : String;
      author: String(50);
      stock : Integer;
}