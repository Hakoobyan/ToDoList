function addTask() {
    let value = document.getElementById('task').value
    let li = document.createElement('li')
    let del = document.createElement('span')
    del.className = 'remove';
    del.innerText = '\u{274C}';
    li.innerText = value;
    li.appendChild(del)
    let ul = document.querySelector('#toDoList ul')
    if (value != '') {
        ul.appendChild(li)
        document.querySelector('#error').classList.remove('show')
    }
    else {
        document.querySelector('#error').classList.add('show')

    }
    document.getElementById('task').value = ''
}
document.querySelector('#toDoList ul').onclick = function (ev) {
    console.log(ev.target)
    if (ev.target.tagName == 'SPAN') {
        ev.target.parentElement.remove()
    }
    else if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked')
    }
}