import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 10,
    duration: '20s',
  };


export default function () {
  var url = 'http://test.k6.io/login';
  var payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

//   let res = http.post(url, payload, params);

  let res = http.get('http://test.k6.io/')

  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
