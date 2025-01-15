const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== ''){
        const innerList = document.createElement('li');
        const deleteButton = document.createElement('button');
        innerList.textContent = input.value;
        deleteButton.textContent = '❌';
        innerList.appendChild(deleteButton);
        list.appendChild(innerList);
        deleteButton.addEventListener('click', function() {
            list.removeChild(innerList);
            input.focus();       
        });
        input.value = '';
        input.focus();
    }
})