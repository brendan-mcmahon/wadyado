import axios from "axios";

const baseUrl =
  "https://hjastailqk.execute-api.us-east-1.amazonaws.com/production";

function getLogs(next) {
  axios.get(`${baseUrl}/logs`).then((res) => next(res));
}

function addLog(log, next) {
  console.log(log);
  axios.post(`${baseUrl}/logs`, { activity: log }).then((res) => next(res));
}

export { getLogs, addLog };
