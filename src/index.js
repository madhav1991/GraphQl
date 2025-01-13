import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js';

const resolvers = {
  Query: {
    reviews() {
      return db.reviews
    },
    games() {
      return db.games
    },
    authors(){
      return db.authors
    }

  },
};
// server setup
 const server = new ApolloServer({
  //typeDefs- definitions of types of data,
  typeDefs,
  resolvers
  //resolvers - resolver functions to handle graphql queries,
 })

 const {url} = await startStandaloneServer(server, {liste: {port: 4000}});
 console.log("Server ready at port", 4000);
