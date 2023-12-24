import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import {ControllerBuilder} from './ControllerBuilder';
import {JsonDataProvider} from './providers/JsonDataProvider';
import {JsonServiceProvider} from './providers/JsonServiceProvider';

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const dataProvider      : JsonDataProvider    = new JsonDataProvider()
const serviceProvider   : JsonServiceProvider = new JsonServiceProvider(dataProvider)

const controllerBuilder : ControllerBuilder   = new ControllerBuilder(app, serviceProvider)
controllerBuilder.init();


const port: number = process.env.PORT == undefined 
    ? 5000 
    : parseInt(process.env.PORT);
 
 
// Server setup
app.listen(port, () => {
    console.log(`Task API Server on:
         http://localhost:${port}/`);
});
