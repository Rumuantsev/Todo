import taskManager from "../../domain/TaskManager.js";
import CreateTaskInput from "../component/create_task_input/CreateTaskInput.js";
import Task from "../component/task/Task.js";

function MainPage(){

    let root;
    let todoContainer;

    function onTaskCreated(task){
        taskManager.addTask(task);
        todoContainer.appendChild(Task(task.title, task.about).init());
    }

    function onTaskDeleted(task){
        taskManager.deleteTask(task.id);
        todoContainer.removeChild(todoContainer.querySelector('#' + task.id));
    }

    function _render(){
        const mainContainer = document.createElement('div');
        mainContainer.className = 'main-container';

        todoContainer = document.createElement('div');
        todoContainer.className = 'todo-container';
        
        const createTaskInput = CreateTaskInput(onTaskCreated).init();
        todoContainer.appendChild(createTaskInput);
        mainContainer.appendChild(todoContainer);

        root.appendChild(mainContainer);

        taskManager.getTasks().forEach(task => {
            todoContainer.appendChild(Task(task.title, task.about, task.id, () => {
                onTaskDeleted(task);
            }).init());
        });
    }

    function _init(_root){
        root = _root;
        _render();
    }

    return {
        render: _init
    }
}

export default MainPage();