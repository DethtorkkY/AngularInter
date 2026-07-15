const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(cors());
const events = [
  { id: 1, name: "React Conf", type: "conference" },
  { id: 2, name: "JS Webinar", type: "webinar" },
  { id: 3, name: "Angular Meetup", type: "meeting" },
  { id: 4, name: "Next.js Conf", type: "conference" },
  { id: 5, name: "TypeScript Webinar", type: "webinar" },
  { id: 6, name: "Vue.js Meetup", type: "meeting" },
  { id: 7, name: "Node.js Conference", type: "conference" },
  { id: 8, name: "GraphQL Webinar", type: "webinar" },
  { id: 9, name: "Docker Meetup", type: "meeting" },
  { id: 10, name: "Kubernetes Conf", type: "conference" },
  { id: 11, name: "Python Webinar", type: "webinar" },
  { id: 12, name: "Go Meetup", type: "meeting" },
  { id: 13, name: "Rust Conference", type: "conference" },
  { id: 14, name: "AWS Webinar", type: "webinar" },
  { id: 15, name: "Azure Meetup", type: "meeting" },
  { id: 16, name: "DevOps Conf", type: "conference" },
  { id: 17, name: "Kafka Webinar", type: "webinar" },
  { id: 18, name: "Redis Meetup", type: "meeting" },
  { id: 19, name: "PostgreSQL Conf", type: "conference" },
  { id: 20, name: "MongoDB Webinar", type: "webinar" },
  { id: 21, name: "Elasticsearch Meetup", type: "meeting" },
  { id: 22, name: "React Native Conf", type: "conference" },
  { id: 23, name: "Flutter Webinar", type: "webinar" },
  { id: 24, name: "Swift Meetup", type: "meeting" },
  { id: 25, name: "Kotlin Conf", type: "conference" },
  { id: 26, name: "Java Webinar", type: "webinar" },
  { id: 27, name: "C# Meetup", type: "meeting" },
  { id: 28, name: "PHP Conf", type: "conference" },
  { id: 29, name: "Ruby Webinar", type: "webinar" },
  { id: 30, name: "Perl Meetup", type: "meeting" },
  { id: 31, name: "Scala Conf", type: "conference" },
  { id: 32, name: "Haskell Webinar", type: "webinar" },
  { id: 33, name: "Clojure Meetup", type: "meeting" },
  { id: 34, name: "Elixir Conf", type: "conference" },
  { id: 35, name: "Erlang Webinar", type: "webinar" },
  { id: 36, name: "F# Meetup", type: "meeting" },
  { id: 37, name: "Assembly Conf", type: "conference" },
  { id: 38, name: "C++ Webinar", type: "webinar" },
  { id: 39, name: "C Meetup", type: "meeting" },
  { id: 40, name: "Julia Conf", type: "conference" },
  { id: 41, name: "R Webinar", type: "webinar" },
  { id: 42, name: "MATLAB Meetup", type: "meeting" },
  { id: 43, name: "Dart Conf", type: "conference" },
  { id: 44, name: "Lua Webinar", type: "webinar" },
  { id: 45, name: "Groovy Meetup", type: "meeting" },
  { id: 46, name: "Crystal Conf", type: "conference" },
  { id: 47, name: "Nim Webinar", type: "webinar" },
  { id: 48, name: "Vlang Meetup", type: "meeting" },
  { id: 49, name: "Zig Conf", type: "conference" },
  { id: 50, name: "Odin Webinar", type: "webinar" }
];
app.get('/api/filter', (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const filter = req.query.filterBy;
  let filteredEvents = events;
  if (filter) {
  filteredEvents = events.filter(event => event.type === filter);
  }
  const paginatedEvents = filteredEvents.slice(offset, offset + limit);
  res.json(paginatedEvents);
});
app.get("/api/data", (req, res) => {
  res.json(events);
});
app.post("/api/submit", (req, res) => {
  console.log("Получены данные");

  res.json({
    success: true,
    message: "Форма успешно отправлена",
  });
});
app.get('/api/event/:id', (req, res) => {
  const id = Number(req.params.id);

  const event = events.find(e => e.id === id);

  if (!event) {
    return res.status(404).json({
      message: 'Мероприятие не найдено'
    });
  }

  res.json(event);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});