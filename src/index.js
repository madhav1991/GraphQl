import React from 'react';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { typeDefs } from './schema';

// server setup
 const server = new ApolloServer({
  //typeDefs- definitions of types of data,
  typeDefs
  //resolvers - resolver functions to handle graphql queries,
 })

 const {url} = await startStandaloneServer(server, {liste: {port: 4000}});
 console.log("Server ready at port", 4000);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
