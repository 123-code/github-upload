import {ApolloServer} from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import { User } from './db.js';
import { readFile } from 'fs';
import { Resolvers } from './resolvers.js';


const PORT = 9000;
const JWT_SECRET = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();
app.use(cors(), express.json(), expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret: JWT_SECRET,
}));

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne((user) => user.email === email);
  if (user && user.password === password) {
    const token = jwt.sign({ sub: user.id }, JWT_SECRET);
    res.json({ token });  
  } else {
    res.sendStatus(401);
  }
});

// graphql type definitions.
const typeDefs =  readFile('./schema.graphql','utf8',function(){
  return typeDefs
});




const apolloServer = new ApolloServer({typeDefs,Resolvers})
await apolloServer.start()
// expose graphQL server as part of the express server.
apolloServer.applyMiddleware({app,path:'./graphql'});


app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});