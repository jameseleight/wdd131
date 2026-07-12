// This code implements the basic assignment and adds "Prevent Duplicates"

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() != '') {
        // create a flag and check if the item is already in the list
        let flag = false;
        for (item of list.children) {
            console.log(item.textContent);
            if (item.textContent == input.value + '❌')
            {
                flag = true;
            }
        }
        console.log(flag)
        // create new list item if !flag = true
        if (!flag) {
        const liItem = document.createElement('li');
        liItem.textContent = input.value;
        // create new delete button
        const deleteButton = document.createElement('button')
        deleteButton.textContent = '❌';
        deleteButton.setAttribute("aria-label", "Remove Scripture");
        deleteButton.setAttribute("id", "close-button");
        // add a listener for the new delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(liItem);
            input.focus();
        });        
        liItem.appendChild(deleteButton);
        list.appendChild(liItem);
        input.value = "";
        }
        else {
            input.value = "";
            input.focus();
        }
    }
    else {
        input.focus()
    }
});