import express from 'express';
import morgan from 'morgan'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import { engine  } from 'express-handlebars';

const app = express();


const port = 3000

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', engine({extname: '.hbs'}));
// app.engine('handlebars', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/assets/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})