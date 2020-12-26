//process.argv.forEach((val, index)=>{
//	console.log(`${index}: ${val}`)
//})

const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args['name'])
console.log(args['file'])

const express = require('express')

const app = express()

app.get('/', (req, res)=>{
	res.send('Hi!')
})

const server = app.listen(3000, ()=>console.log('Server is ready.'))

process.on('SIGTERM', ()=>{
	server.close(()=>{
		console.log('Process terminated.')
	})
})
