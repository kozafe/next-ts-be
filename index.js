const express = require("express")();

express.listen(3010, () => {
  console.log("server is running on 3010");
});

express.get("/", (req, res) => {
  res.send("tess ldsas");
});
