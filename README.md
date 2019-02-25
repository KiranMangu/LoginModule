Sample application for implementing Login module using Angular 7 and Node

npm install --save-dev babel-cli
npm install --save-dev babel-preset-env
npm install --save-dev babel-watch
npm install express body-parser cors mongoose

-- Error: Start
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module '@babel/core'
-- Error: End
--Fix: Start
npm i --save-dev @babel/core
--Fix: End
