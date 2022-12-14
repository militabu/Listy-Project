const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const Post = require('./Models/Post');
require('dotenv').config();
const { auth } = require('express-openid-connect');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
// const authRoute = require('./routes/auth');


const app = express();
app.use(cors());

const PORT = 3030;

//middleware
app.use(express.json());
app.use(helmet())
app.use(morgan('common'))


//address for rest API
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

//IGNORE
// app.use('/api/auth', authRoute);


const atlasUri = process.env.ATLAS_URI

mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => console.log('Database connection successful🍃'))

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:3000',
  clientID: '6aFL4m1lJjcg6n26300PoGgjf8fExYZ1',
  issuerBaseURL: 'https://listy.us.auth0.com',
  secret: 'o6XnZn_6Fh2Y9pw2RC4s5ZcBZvpPJqjsc4xU3povXtI48gH24pOIio-31IoP6wJu'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));


//temporary, will go to the post route later
// app.delete('/post/:id', async (req, res) => {
//   try {
//     const result = await Post.findByIdAndDelete(req.params.id)
//     res.json(result)
//   } catch (error) {
//     console.log(error)
//   }
// })


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT} 🚀`)
})