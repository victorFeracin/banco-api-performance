import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  // Iterations for the test
  iterations: 50,

  thresholds: {
    http_req_duration: ['p(90)<2000', 'max<5000'], // 95% of requests should be below 2000ms and the maximum duration should be below 5000ms
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  },
};

export default function () {
  // Test
  const url = 'http://localhost:3000/login';
  const payload = JSON.stringify({
    username: 'julio.lima',
    senha: '123456'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  // Verify the functional part of the request
  check(res, {
    'Validate if status is 200': (r) => r.status === 200,
    'Validate if Token is a string': (r) => typeof(r.json().token) == 'string',
  }); 

  sleep(1);
}