export interface Contact {
  Msg: String;
  Name: String;
  Email: String;
}
export interface Success{
    lastRowid: String,
    rowsAffected: Number
}
export interface Err{
    errorNum: Number,
    offset: Number,
    Msg:String
}