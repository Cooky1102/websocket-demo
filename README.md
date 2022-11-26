## Installation

```bash
npm install
```

## Usage

包含一个服务端 3000 端口，一个客户端 3001 端口。 `npm run start` 启动这两个服务。

服务端默认启动 WebsocketServer

浏览器访问 127.0.0.1:3001,客户端一进入默认连接服务端 websocket

1. 演示过程查看浏览器控制台以及服务端控制台
2. 可以输入消息，点击发送。
3. 可以在客户端连接状态尝试连接，提示已连接。
4. 可以断开客户端的连接。
5. 可以发送请求来断开服务端的 WSS 服务。 弹窗提示后，再次点击断开客户端连接，查看控制台。

## 文档参考
https://www.npmjs.com/package/ws
https://github.com/websockets/ws/blob/master/doc/ws.md
https://blog.csdn.net/qq_32442973/article/details/120249959
