function convertHTML(str) {
  let htmlMap = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  }

  // return str.split("").map(e => htmlMap[e] || e).join("");
  // return str.replace(/([&<>\"'])/g, match => htmlMap[match]);

  let out = "";
  for (let i = 0; i < str.length; i++){
    if (htmlMap[str[i]]) {
      out += htmlMap[str[i]]
    } else {
      out += str[i];
    }
  }
  return out;
}

convertHTML("Dolce & Gabbana");
