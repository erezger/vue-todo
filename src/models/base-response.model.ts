import {TodoModel} from '@/models/todo.model';

export interface BaseResponse<> {
  records: TodoModel[];
}
