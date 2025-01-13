import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js';

const resolvers = {
  Query: {
    reviews() {
      return db.reviews
    },
    review(_,args){
      return db.reviews.find((review) => review.id === args.id)
    },
    games() {
      return db.games
    },
    game(_, args){
      return db.games.find((game) => game.id === args.id)
    },
    authors(){
      return db.authors
    },
    author(_, args){
      return db.authors.find((author) => author.id === args.id)
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
