function isSession(req, res, next) {
    if (req.session.user) {
        next()
    } else{
        return res.status(401).json({
            meta : {
                status : 401,
                message : "Error when entering, it is necessary to authenticate to continue",
                redirect : "http://localhost:3000/auth/login"
            }
        })
    }
}

module.exports = isSession