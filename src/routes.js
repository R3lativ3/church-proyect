// Rutas principales de la app (dashboard + ejemplo EJS)
const express = require("express");
const router = express.Router();

// Dummy data para el dashboard
const dashboardData = {
  userName: "Waruna Perera",
  role: "Super Admin",
  date: "Saturday, October 14, 2024",
  stats: {
    totalMembers: 123454,
    totalPayments: 4560,
    totalEvents: 267,
    totalServices: 560
  },
  latestEvents: [
    {
      title: "Community Praise & Worship Night",
      date: "Saturday, October 19, 2024",
      time: "6:00 PM – 8:00 PM",
      church: "Grace Fellowship Church"
    },
    {
      title: "Thanksgiving Outreach: Feed the Hungry",
      date: "Friday, November 3, 2024",
      time: "6:00 PM – 9:00 PM",
      church: "Grace Fellowship Church"
    },
    {
      title: "Youth Revival: Ignite Your Faith",
      date: "Wednesday, November 27, 2024",
      time: "7:00 PM – 10:00 PM",
      church: "Grace Fellowship Church"
    }
  ]
};

router.get("/", (req, res) => {
  res.redirect("/dashboard");
});

router.get("/dashboard", (req, res) => {
  // Render del dashboard principal
  res.render("dashboard", {
    layout: "layout",
    title: "Dashboard",
    data: dashboardData
  });
});

router.get("/example-ejs", (req, res) => {
  // Ejemplo simple de datos para la vista de demo
  const user = {
      name: "José",
      role: "Senior Software Engineer",
  };

  const products = [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 25 },
      { name: "Keyboard", price: 45 }
  ];
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  // Se reutiliza el layout y se pasa el topbar
  res.render("partials/ejs", {
    layout: "layout",
    title: "Ejemplo EJS",
    user,
    products,
    date
  });
});

module.exports = router;
