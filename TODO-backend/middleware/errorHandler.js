const { logEvents } = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error 

    res.status(status)

    // We using Redux, then therefore isError must be set to True
    // to allow other people to know that we r facing an error
    res.json({ message: err.message, isError: true })
}

module.exports = errorHandler 