//1 required packages for ssr
//const express = require("express"); //common JS way of importing modules
import express from "express"; // module JS or ES6;

//need to write same code on
//server-side and client-side

//2 react setup to ssr
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";
//

//1 started/initalized express app
const app = express();
//

//1 PORT number to run server
const PORT = 3000;
//

//serve js or file to every request made for static resource
app.use(express.static('public'));
//

//1 to serve req at endpoint "/"
app.get("/", (req, res) => {
  //2 create string version of JSX / react component
  const content = renderToString(<Home />);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR with react</title>
</head>
<body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
</body>
</html>`;

  //2 sending content genrated from renderToString to user
  res.send(html);
});
//

//1 server listening/running
app.listen(PORT, () => {
  console.log(`Server running on port number : ${PORT}`);
});
//
