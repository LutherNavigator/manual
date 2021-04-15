const http = require("http");
const fs = require("fs");
const path = require("path");
const { Remarkable } = require("remarkable");

const port = parseInt(process.env.PORT);

const staticDir = "static";
const markdownDir = "markdown";
const mainHTML = "main.html";

const homeRedirect = "manual";

const md = new Remarkable();

function sendMarkdown(res, urlPath, callback) {
  fs.readFile(path.join(__dirname, staticDir, mainHTML), (err, htmlData) => {
    if (err) {
      callback(err);
    } else {
      fs.readFile(
        path.join(__dirname, markdownDir, urlPath + ".md"),
        (err, markdownData) => {
          if (err) {
            callback(err);
          } else {
            const markdownAsHTML = md.render(markdownData.toString());
            const data = htmlData.toString().replace("{}", markdownAsHTML);
            res.writeHeader(200, { "Content-Type": "text/html" });
            res.write(data, (writeErr) => {
              if (writeErr) {
                callback(writeErr);
              } else {
                callback(null);
              }
            });
          }
        }
      );
    }
  });
}

function sendStatic(res, urlPath, callback) {
  fs.readFile(path.join(__dirname, staticDir, urlPath), (err, data) => {
    if (err) {
      callback(err);
    } else {
      res.write(data, (writeErr) => {
        if (writeErr) {
          callback(writeErr);
        } else {
          callback(null);
        }
      });
    }
  });
}

const server = http.createServer((req, res) => {
  const urlPath = req.url.slice(1);

  if (fs.existsSync(path.join(__dirname, markdownDir, urlPath + ".md"))) {
    sendMarkdown(res, urlPath, (err) => {
      if (err) {
        console.error(err);
      }
      res.end();
    });
  } else if (
    fs.existsSync(path.join(__dirname, staticDir, urlPath)) &&
    fs.lstatSync(path.join(__dirname, staticDir, urlPath)).isFile()
  ) {
    sendStatic(res, urlPath, (err) => {
      if (err) {
        console.error(err);
      }
      res.end();
    });
  } else if (req.url === "/") {
    res.writeHead(302, {
      Location: homeRedirect,
    });
    res.end();
  } else {
    // 404
    res.end();
  }
});

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});
