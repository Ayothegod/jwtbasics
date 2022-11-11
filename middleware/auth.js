

const authentication = async (req,res,next) => {
     const authHeader = req.headers.authorization
     if(!authHeader ){
         throw new CustomApiError('no token provided',401)
     }
     const token = authHeader.split(' ')[1]
     try {
         const decoded = jwt.verify(token,'jwtsecret')
         const {id,username} = decoded
         req.user = {id, username}
        //  console.log(req.user);
         next()
     } catch (error) {
         throw new CustomApiError('not authorized to access this route',401)
         
     }
}

module.exports = authentication