import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 300,
  duration: "180s"
};

export default function() {
  let random = Math.random();
  let randomId;
  if (random <= 0.2) {
    randomId = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  } else {
    randomId = Math.floor(Math.random() * (10000000 - 1001 + 1)) + 1001;
  }
  let res = http.get(`http://localhost:9100/restaurant/${randomId}/review`);
  check(res, {
    "success": (r) => r.status == 200
  });
  sleep(1);
};
