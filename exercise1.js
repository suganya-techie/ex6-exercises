let input = [
    {text: 'ES6 is awesome', type: 'p'},
    {text: 'ES6 is significant update in JS history', type: 'li'},
    {text: 'const creates immutable variables', type: 'li'},
    {text: 'Block scoping via let and const', type: 'li'},
    {text: 'ES6 was released in 2015', type: 'h3'}
];
let filteredInputs = input.filter(input => input.type === 'li');
for(let input of filteredInputs){
	let [type, text] = [input.type,input.text];
	console.log(`Element type is ${type} with text ${text}`);
}
