const server = require('./api/server')

const port = process.env.port || 4000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));