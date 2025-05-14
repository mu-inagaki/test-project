// utils/auth.js
const jwt = require("jsonwebtoken")
const seclet_key = "iwakichi-tegata"

const auth = async(req, res, next) => {
    if(req.method === "GET"){
        return next()
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml3YWtpY2hpQG1penVpd2EuY28uanAiLCJpYXQiOjE3NDcxODY5MDMsImV4cCI6MTc0NzI2OTcwM30.KuTJfD8Qyv4-6mqOvTMvAXQNLaxASWIL8Pdc8mM_yuY"
    // const token = await req.headers.authorization.split(" ")[1]

    if(!token){
        return res.status(400).json({message: "トークンがありません"})
    }

    try{
        const decoded = jwt.verify(token, seclet_key)
        req.body.email = decoded.email
        return next()
    } catch(err) {
        return res.status(400).json({message: "トークンが正しくないので、ログインしてください"})
    }
}

module.exports = auth