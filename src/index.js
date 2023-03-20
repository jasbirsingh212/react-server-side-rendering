//1 required packages for ssr
const express = require("express");

//2 react setup to ssr
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default;
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
