var url = require('url')
var add = 'https://localhost:8080?age=21&height=5.5'
var query = url.parse(add, true)
console.log(query)

console.log("Name of the protocol is", query['protocol'])
console.log('Name of the host is', query['host'])
console.log("Nmae of the port is", query['port'])
console.log('query string params are', query['query'])


/*
  {
	  protocol: 'https:',
	  slashes: true,
	  auth: null,
	  host: 'localhost:8080',
	  port: '8080',
	  hostname: 'localhost',
	  hash: null,
	  search: '?age=21&height=5.5',
	  query: { age: '21', height: '5.5' },
	  pathname: '/',
	  path: '/?age=21&height=5.5',
	  href: 'https://localhost:8080/?age=21&height=5.5' 
  }

*/