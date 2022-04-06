export interface TodoModel {
  id?: string;
  fields: TodoField;
  createdTime?: Date;
}

export interface TodoField {
  Text: string;
  Status: string;
  Tags: string;
}
