// Arranque básico de Express con EJS y layout compartido
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Motor de vistas: EJS + layouts
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");

// Archivos estáticos (css, js, imágenes)
app.use(express.static(path.join(__dirname, "public")));

// Guarda ruta actual en locals para marcar el item activo del sidebar
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
