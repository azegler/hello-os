const os = require("os");
const p = os.platform();
let msg;
if (p === "win32") msg = "Witaj na Windows!";
else if (p === "linux") msg = "Witaj na Linux!";
else msg = `Witaj na ${p}!`;
console.log(msg);
