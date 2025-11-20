# 📘 Church Platform – Monolito Node.js

Plataforma web para iglesias, construida con **Node.js + Express + EJS**, que incluye dashboard administrativo, gestión de parqueos, visitantes nuevos, talleres, servicios en vivo y servicios grabados.

Este proyecto está diseñado para ser **simple**, **extensible** y **fácil de desplegar** en cualquier servidor. Ideal para iglesias pequeñas o medianas, y perfecto como base para desarrollos más grandes.

---

## 🚀 Características principales

### ✔️ Dashboard administrativo  
Interfaz moderna con estadísticas, tarjetas de información, calendario y lista de eventos.

### ✔️ Gestión de parqueos  
Visualización de parqueos, asignación de espacios, estados (disponible, ocupado, reservado).

### ✔️ Visitantes nuevos  
Registro simple, listado del día, vista para ujieres.

### ✔️ Talleres / cursos  
CRUD de talleres, detalles, inscripción.

### ✔️ Servicios
- **En vivo:** usando URL de YouTube / Facebook Live / Vimeo.
- **Grabados:** servicios pasados con video incrustado.

### ✔️ Sidebar colapsable  
Botón ☰ para expandir/ocultar la barra lateral.

### ✔️ Totalmente en Node.js  
Monolito sencillo y organizado por módulos.

---

## 🧱 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **EJS** (motor de plantillas)
- **CSS personalizado** o **Tailwind (opcional)**
- **Nodemon** para desarrollo
- **PostgreSQL / MySQL** (futuro)
- **JavaScript puro** para interactividad

---

## 📦 Instalación

```bash
git clone https://github.com/tu-repo/church-platform.git
cd church-platform

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Ejecutar en modo producción
npm start
