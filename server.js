const http = require("http");

http.createServer((req, res) => {
  const env = process.env.APP_ENV || "Not Set";
  const secret = process.env.DB_PASSWORD || "Not Set";

  res.end(`ENV: ${env}\nSECRET: ${secret}`);
}).listen(8080);

