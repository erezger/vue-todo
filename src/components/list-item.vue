<template>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" :checked="todo.complete" class="custom-control-input success" :id="'check' + idx"
           @change="toggle">
    <label class="custom-control-label" :for="'check' + idx">{{ todo.name }}</label>
    <div class="delete-cont">
      <i class="fa fa-trash" @click="deleteTodo"></i>
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

  public toggle(event): void {
    this.$emit('change', event.target.checked, this.idx);
  }

  public deleteTodo(): void {
    this.$emit('delete', this.idx);
  }
}
</script>
