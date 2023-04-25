const listItems = ['apple', 'banana', 'carrot', 'donkey', 'elk']
    .join(',')
    .repeat(50)
    .split(',')
    .map(function (item, i) {
        return item + i;
    });

export default listItems