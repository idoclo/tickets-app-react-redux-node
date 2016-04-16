import axios from 'axios'
import queryString  from 'query-string'

export function create(ticket) {
  let data = queryString.stringify(ticket.toObject());
  let config = {
    headers: {
      'Accept': 'application/json, application/xml, text/play, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
  };
  axios.post('http://localhost:3001/api/tickets', data, config).then(
    response => {
      console.log('Response status: ', response.statusText);
      console.log('Response body: ', response.data)
    }
  ).catch(
    error => {
      console.log('Response error: ', error);
    }
  )
}