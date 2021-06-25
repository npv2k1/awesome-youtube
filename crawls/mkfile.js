// Crawls link preview data
const dt = require("./url.json");
const fetch = require("node-fetch");
var res = dt;
fs = require("fs");
const typeChanels = Object.keys(res);
Promise.all(
  typeChanels.map(
    async (e) =>
      await Promise.all(
        res[e].list.map(async (channel, i) => {
          // console.log('channel.url :>> ', channel.link);
          await fetch(
            `http://localhost:3000/api/linkpreview?url=${channel.link}`
          )
            .then((r) => r.json())
            .then((t) => {
              console.log(t);
              res[e].list[i] = { ...res[e].list[i], ...t };
            });
        })
      )
  )
).then((ok) => {
  fs.writeFileSync("channels.json", JSON.stringify(res), "utf8");
});
