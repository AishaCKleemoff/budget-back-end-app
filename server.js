const app = require("./app.js");
// .env values
require("dotenv").config();
// this is a 'short-circuit'
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🎧 live on port ${PORT} 🦻🏾`);
});
