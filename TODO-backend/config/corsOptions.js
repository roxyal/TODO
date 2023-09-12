const allowedOrigins = require('./allowedOrigins')

// origin: a function that check whether if the requested origin is allowed anot
// If allowedOrigings return null, true then it is ALLOWED else we incur a message Not ALLOWED BY CORS
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true, // true - means that we allow cookies, authorization headers
    optionsSuccessStatus: 200 // return status 200 (successful status)
}

module.exports = corsOptions 