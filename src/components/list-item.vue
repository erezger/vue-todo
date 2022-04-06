<template>
  <div class="">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" :checked="todo.fields.Status === 'Done'" class="custom-control-input success"
             :id="'check' + idx"
             @change="toggle">
      <label class="custom-control-label" :for="'check' + idx">{{ todo.fields.Text }}</label>
      <div class="delete-cont">
        <i class="fa fa-trash" @click="deleteTodo"></i>
      </div>
    </div>
    <div class="tags-cont">
      <div class="tags">
        <span class="tag" v-if="todoTags && todoTags.length" v-for="(tag, idx) in todoTags" :key="idx">{{ tag }}</span>
      </div>
      <input type="text" required class="form-control mb-2" id="tag" placeholder="add tag" width="100"
             v-model="tag" @keyup.enter="addTodoTag">
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TodoModel} from '@/models/todo.model';

@Component({})
export default class ListItem extends Vue {

  @Prop() public todo!: TodoModel;
  @Prop() public idx!: number;

  public todoTags: string[] = [];
  public tag: string = '';

  public created(): void {
    this.todoTags = JSON.parse(this.todo.fields.Tags);
  }

  public toggle(event): void {
    const todo = {...this.todo};
    this.todo.fields.Tags = JSON.stringify(this.todoTags);
    this.todo.fields.Status = event.target.checked ? 'ToDo' : 'Done';
    this.$emit('patch', todo);
  }

  public addTodoTag(): void {
    this.todoTags.push(this.tag);
    const todo = {...this.todo};
    this.todo.fields.Tags = JSON.stringify(this.todoTags);
    this.$emit('patch', todo);
  }

  public deleteTodo(): void {
    this.$emit('delete', this.todo.id);
  }
}
</script>
