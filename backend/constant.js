class PUBLIC_DATA{

    static port = process.env.PORT || 4000
    static mongo_uri = process.env.MONGO_URI || 'mongodb://localhost/jbpharmainvsys'

}

module.exports = {
    PUBLIC_DATA
}