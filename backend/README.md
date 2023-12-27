1. Config Eslint
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    create .eslintrc.js

    ```js 
            {
            "compilerOptions": {
                "target": "ES2015",
                "outDir": "./build",
                "strict": true,
                "module": "CommonJS",
                "esModuleInterop": true
            }
        } 
    ```

    and dev and build command to package.json
    `"dev": "ts-node-dev --respawn --transpile-only --files src/index.ts"`
2. Create express server 
    npm i express 
    npm i --save-dev @types/express 

3. Create src/index.ts 
    copy data.ts and Products.ts from frontend to backend 

    ```js
        import express, {Request, Response} from 'express' 
        import {sampleProducts} from './data'
        const app = express();
        app.get('/api/products', (req:Request, res: Response))=>{
            res.json(sampleProducts)
        }
        const PORT = 4000;
        app.listen(PORT, ()=>{
            console.log(`server started at http://localhost:${PORT}`)
        })
    ```