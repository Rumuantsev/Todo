function CreateTaskInput(onTaskCreated){

    let titleInput, aboutInput, addButton;

    function _render(){
        const container = document.createElement('div');
        container.className = 'create-task-container';
        container.innerHTML = `
            <div class="create-task-container__input-container">
                <input placeholder="Title..." class="yellow-bordered" id="titleInput">
                <input placeholder="About..." class="yellow-bordered" id="aboutInput">
            </div>
            <input type="button" value="+" class="yellow-bordered" id="addButton">
        `;
        return container;
    }

    function _setupListeners(element){
        titleInput = element.querySelector('#titleInput');
        aboutInput = element.querySelector('#aboutInput');
        addButton = element.querySelector('#addButton');

        addButton.addEventListener('click', _handleAddTask);
    }

    function _handleAddTask() {
        const title = titleInput.value.trim();
        const about = aboutInput.value.trim();

        if (title && about) {
            const newTask = { title, about };
            
            // Вызываем функцию обратного вызова с новой задачей
            if (typeof onTaskCreated === 'function') {
                onTaskCreated(newTask);
            }

            // Очистка полей ввода после добавления задачи
            titleInput.value = '';
            aboutInput.value = '';
            
        } else {
            alert('Поля не должны быть пустыми.');
        }
    }

    function init(){
        let element = _render();
        _setupListeners(element);
        return element;
    }

    return {
        init
    }
}

export default CreateTaskInput;