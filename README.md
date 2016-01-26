# Logger
A Simple Javascript Logger for full potential!

## Usage
Logger can be used by initializing a new Logger Object.

`var log = new Logger();`

You can send additional information to the Logger Constructor like:

`var log = new Logger('main.js');`

Now the Logger will put this at the end of the console.logs.
Use the Logger Object like this:

`log.err() // outputs 'Error'` 
`log.inf() // outputs 'Info'`
`log.cat() // outputs 'Catch'`

You can give location / information to all of them like this:

`log.err('This is an error!') // outputs 'Error: This is an error!`

`log.inf('Information are important!', 'HelloWorldFunction()') //outputs 'Info: Information are important! > HelloWorldFunction()`
