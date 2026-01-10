const h1 = React.createElement('h1',{key:'h1'}, 'Hello Nandani from react js');

const h2 = React.createElement('h2',{key:'h2'},'Hello Manish from react js');

const h3 = React.createElement('h3',{key:'h3'},'Hello Baby from react js');

const div = React.createElement('div', {id:'parent',}, [h1,h2,Box(),h3])

const container = document.querySelector('#container');

const root = ReactDOM.createRoot(container);

root.render(div)

import Box from './test.js';