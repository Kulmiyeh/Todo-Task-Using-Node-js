const readline = require('readline');
const TodoList = require('./Todo');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todoList = new TodoList();

function displayMenu() {
  console.log('Todo List Actions');
  console.log('_________________________________')
  console.log('Add todo task(add)');
  console.log('Update todo task(update)');
  console.log('Delete todo task(delete)');
  console.log('Display all todo tasks(display)');
  console.log('__________________________________');
}
displayMenu();
function promptUser() {
 
  rl.question('Enter your Action: ', (choice) => {
    switch (choice) {
      case 'add':
        rl.question('Enter the todo Task: ', (Task) => {
                if (Task.trim() === '') {
                  console.log('Todo Task cannot be empty!');
                  
                }    else{
                    todoList.addTodo(Task);

                }
         
          
          rl.close();
          
      });
        break;
      case 'update':
        todoList.showTodos();
        rl.question('Enter the Task ID to update: ', (id) => {
          rl.question('Enter the updated Task: ', (Task) => {
            todoList.updateTodo(parseInt(id), Task);
            rl.close();
            
          });
        });
        break;
      case 'delete':
        rl.question('Enter the Task ID to delete: ', (id) => {
          todoList.deleteTodo(parseInt(id)); 
          rl.close();
        });
        break;
      case 'display':
        todoList.showTodos();
        rl.close();
        break;
       
      default:
        console.log('Invalid Action! Please try again.');
        rl.close();
        break;
         
    }
  });
}
 
promptUser();
