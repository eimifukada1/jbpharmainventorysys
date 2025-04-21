class apiError extends Error{
    statusCode = 500
    constructor(statusCode, msg){
        super(msg)
        this.message = msg
        this.statusCode = statusCode;
    }
//Error
}

module.exports = apiError