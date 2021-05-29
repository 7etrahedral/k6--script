import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export let options = {
  vus: 1, // 1 user looping for 1 minute
  duration: '5s',

  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export default () => {
  let loginRes = http.post(`${__ENV.BASE_URL}/auth/token/login/`, {
    'username': __ENV.USERNAME,
    'password': __ENV.PASSWORD,
  });

  check(loginRes, {
    'logged in successfully': (resp) => {
        if (resp.status !== 200) {
            console.log(resp.body);
        }
        return resp.status == 200;
    }
  });

  let authHeaders = {
    headers: {
      Authorization: `Bearer ${loginRes.json('access')}`,
    },
  };

  let myObjects = http.get(`${__ENV.BASE_URL}/my/crocodiles/`, authHeaders).json();
  check(myObjects, { 'retrieved crocodiles': (obj) => {
      return obj.length > 0 
    }
  });
};

