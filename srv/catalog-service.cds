using { my.bookshop as my } from '../db/schema';

service CatalogService {
  entity Books as projection on my.Books;

  action reabastecer(ID: Integer, quantidade: Integer) returns String;
}