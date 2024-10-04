function Task(title, about, id, onDelete){

    function _render(){
        const container = document.createElement('div');
        container.className = 'task-container yellow-bordered';
        container.id = id;
        container.innerHTML = `
            <div class="task-container__text">
                <h3>${title}</h3>
                <p>${about}</p>
            </div>
            <input type="button" value="x" class="yellow-bordered" id="deleteButton">
        `;
        return container;
    }

    function _setupListeners(element){
        let deleteButton = element.querySelector('#deleteButton');

        deleteButton.addEventListener('click', () => {
            onDelete();
        });
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

export default Task;