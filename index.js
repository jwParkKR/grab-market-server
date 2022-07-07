var http = require("http");
var hostname = "127.0.0.1"; // 나의 컴퓨터를 가르키는 내부 IP 주소
var port = 8080;

// 서버에 어떠한 요청이 오든 무조건 http.createServer 메소드 안의 call function이 호출됨
// 어떤 클라이언트가 요청을 했을 때의 요청정보는 req에 담기고, 우리가 응답하는 내용은 res에 들어감
const server = http.createServer(function (req, res) {
  // 요청할 때, url과 method가 있었지
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      // node.js에서 response로 어떠한 배열을 보내줘야 함
      // HTTP에서 Body와 Head부분이 있는데, Head부분에 정상적으로 요청했을 때의 status code를 200으로 넣어주고
      // Head에 json 형식의 응답을 보내줄 것임을 알려주는 객체를 하나 넣어줌
      res.writeHead(200, { "Content-Type": "application/json" });
      // 보내줄 데이터를 처리하는 과정에서 node.js의 end 함수의 첫 번째 인자로는 string 형태가 들어가줘야 함
      // -> JSON.stringfy를 사용하여 배열을 string 형태로 만들어줌
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다!");
    }
  }
});

server.listen(port, hostname); //해당 hostname과 port 번호로 요청을 기다리고 있겠다는 의미

console.log("grab market server on!");
