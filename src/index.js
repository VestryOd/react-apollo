import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import client from "./client";
import { ApolloProvider } from "@apollo/client";

console.log("___HOST", process.env.HOST);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
