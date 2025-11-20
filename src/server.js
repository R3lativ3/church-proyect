const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// archivos estáticos (css, js, imágenes)
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
