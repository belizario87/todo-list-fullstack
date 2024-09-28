const getConn = require("./connection");

const getAll = async () => {
  const conn = await getConn();
  const [rows] = await conn.query("SELECT * FROM tasks");
  conn.release();
  console.log(rows);

  return rows;
};

const createTask = async (task) => {
  const conn = await getConn();
  const { title } = task;
  const dateUtc = await new Date(Date.now()).toUTCString();
  const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";

  const [createdTask] = await conn.query(query, [title, "pendente", dateUtc]);

  return createdTask;
};

module.exports = {
  getAll,
  createTask,
};
