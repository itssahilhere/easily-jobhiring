import express from 'express'
import path from 'path'
import ProductsController from './controller/product.controller.js';
import { uploadfiles } from './middleware/file-upload.middleware.js';
import UserController from './controller/user.controller.js';
import session from 'express-session';
import { auth } from './middleware/auth.middleware.js';
import { setLastVisit } from './middleware/lastVisit.middleware.js';
import cookieParser from 'cookie-parser';
const app=express()
app.use(cookieParser());
app.use(setLastVisit);
app.use(express.static('view'));
app.set('views','view')
app.set('view engine','ejs');
app.use(express.json())
app.use(
    session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    })
    );    
app.use(express.urlencoded({extended:true}))
const ProductController=new ProductsController();
const UsersController=new UserController();
app.get("/",ProductController.getLanding)
app.get("/jobs",ProductController.getJobs)
app.get("/jobs/:id",setLastVisit,ProductController.getJobsDetails)
app.post("/apply/:id",uploadfiles.single('resume'),ProductController.jobposted)
app.post("/register",UsersController.postRegister)
app.post("/login",UsersController.postLogin)
app.get("/login",UsersController.getLogin)
app.get("/postjob",auth,UsersController.addJob)
app.post("/job",auth,UsersController.postaddJob)
app.get("/logout",UsersController.logout)
app.get('/job/update/:id',auth,UsersController.getUpdateJob)
app.post('/job/update/',auth,UsersController.postUpdateJob)
app.get("/job/delete/:id", UsersController.deleteProduct);
app.listen(3000,()=>{
    console.log("server is listening at 3000");
})
