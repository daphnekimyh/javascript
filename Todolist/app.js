let saying = prompt("What would you like to do");
const lists = ['Collect Chicken Eggs', 'Clean Litter Box'];

while (saying !== 'quit' && saying !== 'q') {
    if (saying === 'list') {
        console.log('**********');
        for (let i = 0; i < lists.length; i++) {
            console.log(`${i}: ${lists[i]}`);
        }
        console.log('**********');
    } else if (saying === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        lists.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (saying === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete?'));
        if (!Number.isNaN(index)) {
            const deleted = lists.splice(index, 1);
            console.log(`Ok, deleted ${deleted[index]}`);
        } else {
            console.log('Unknown index');
        }
    }
    saying = prompt('what would you like to do?');
}
console.log("OK, QUIT THE APP!")
