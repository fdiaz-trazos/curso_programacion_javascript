function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Jane' };

// Usamos apply para establecer el contexto this y pasar los argumentos como un array
greet.apply(person, ['Hi', '...']);
greet.call(person, 'Hi', '...')
