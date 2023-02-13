const { Router } = require('express');
const postsRouter = Router();


postsRouter.get("/",(req, res)=>{
    res.send("Estpy en post");
});
module.exports = postsRouter;    