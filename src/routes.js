const express = require("express");
const router = express.Router();

// dummy data para el dashboard
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
  res.render("dashboard", { data: dashboardData });
});

module.exports = router;
