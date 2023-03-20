//1 required packages for ssr
//const express = require("express"); //common JS way of importing modules
import express from 'express'; // module JS or ES6;

//need to write same code on
//server-side and client-side

//2 react setup to ssr
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;
import React  from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';
//

//1 started/initalized express app
const app = express();
//

//1 PORT number to run server
const PORT = 3000;
//

//1 to serve req at endpoint "/"
app.get("/", (req, res) => {
  //2 create string version of JSX / react component
  const content = renderToString(<Home />);

  //2 sending content genrated from renderToString to user
  res.send(content);
});
//

//1 server listening/running
app.listen(PORT, () => {
  console.log(`Server running on port number : ${PORT}`);
});
//
