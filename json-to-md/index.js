const url = require("./code.json");
const fs = require("fs")
// console.log("url :>> ", url);

var s = "";

Object.keys(url).map((e, i) => {
  var name = "## " + e + '\n';
  s=s+name
  url[e].list.map((c,i)=>{
    var d = `* [${c.name}](${c.link}) \n`
    s+=d;
  })

});
fs.writeFileSync('out.md',s,'utf8')
