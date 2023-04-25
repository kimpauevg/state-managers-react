const listItems = ['apple', 'banana', 'carrot', 'donkey', 'elk']
    .join(',')
    .repeat(500)
    .split(',')
    .map(function (item, i) {
        return item + i;
    });

export default listItems