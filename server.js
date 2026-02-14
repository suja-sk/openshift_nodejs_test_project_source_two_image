const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const env = process.env.APP_ENV || "Not Set";

  let secret = "Not Set";
  try {
    secret = fs.readFileSync("/etc/secrets/DB_PASSWORD", "utf8");
  } catch (err) {
    secret = "Secret File Not Found";
  }

  res.end(`ENV: ${env}\nSECRET: ${secret}`);
}).listen(8080);

