const fs = require('fs');
const { normalize } = require('path');

class TodoList {
  constructor() {
    this.todos = [];
    this.loadTodos();
  }

  loadTodos() {
    try {
      const data = fs.readFileSync('Todo.json', 'utf8');
      this.todos = JSON.parse(data);
    } catch (err) {
      console.log('Error loading todo data:', err.message);
    }
  }

  saveTodos() {
    try {
      fs.writeFileSync('Todo.json', JSON.stringify(this.todos, null, 2), 'utf8');
    } catch (err) {
      console.log('Error saving Task data:', err.message);
    }
  }

  addTodo(Task) {
    const todo = {
      id: Math.ceil(Math.random() * 1000),
      Task
    };
    this.todos.push(todo);
    this.saveTodos();
    console.log('Task added successfully!');
  }

  updateTodo(id, Task) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.Task = Task;
      this.saveTodos(); 
      console.log('Task updated successfully!');
    } else {
      console.log('Task not found!');
    }
  }

  deleteTodo(id) {
    const index = this.todos.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
      console.log('Task deleted successfully!');
    } else {
      console.log('Task not found!');
    }
  }

  showTodos() {
    if (this.todos.length === 0) {
      console.log('Task Not found!');
    } else {
      console.log('All Tasks');
      console.log('______________________')
      this.todos.forEach((todo) => {
        console.log(`ID: ${todo.id}`);
        console.log(`Task: ${todo.Task}`);
        console.log('______________________');
      });
      console.log('-------------------------');
    }
  }
}

module.exports = TodoList;