const express = require("express");
const app = express();
const ws = require("ws");
const cors = require("cors");

app.use(cors());

const wss = new ws.WebSocketServer({
  port: 9000,
});

wss.on("connection", function (ws) {
  console.log("已连接");
  ws.send("你已成功连接服务端");

  ws.on("message", function (data) {
    ws.send("服务器已收到你发送过来的消息：" + data.toString());
  });
});

wss.on("error", function () {
  console.log("WebSocketServer发生错误");
});
wss.on("close", function () {
  console.log("WebSocketServer已关闭");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/closeWSS", function (req, res) {
  wss.close(function () {
    console.log("在 onClose 之后触发的 cb");
  });
  res.send();
});

app.listen(3000);
