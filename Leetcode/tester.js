var _ = require('lodash');

let ninjas = [
  { name: 'shikamaru', element: 'mind'},
  { name: 'itach', element: 'fire'},
  { name: 'sasuke', element: 'fire'}
];

let hasElement = _.curry((element, obj) => {
  console.log(`loggged ${obj}`);
  return obj.element === element;
})

let fireNinajs = ninjas.filter(hasElement('fire'));

console.log(fireNinajs);
