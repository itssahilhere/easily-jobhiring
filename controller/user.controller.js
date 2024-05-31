import ProductModel from "../module/product.model.js";
import UserModel from "../module/user.model.js";
export default class UserController {
    getLogin(req, res) {
        res.render('login',{userEmail:req.session.userEmail});
    }
    postRegister(req, res) {
        // console.log(req.body)
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        req.session.userName = name;
        res.render('login',{userEmail:req.session.userEmail,name:req.session.userName});
    }
    postLogin(req, res) {
        const { email, password } = req.body;
        const user = UserModel.isValid(
            email,
            password
        );
        if (!user) {
            return res.render('error', {
            message: 'user not found pls register',
            });
        }
        req.session.userEmail = email;
        res.redirect("/jobs")
        // console.log("login successful")
    }
    addJob(req,res){
        res.render("addnewjob",{userEmail:req.session.userEmail,name:req.session.userName})
    }
    postaddJob(req,res){
        ProductModel.addProduct(req.body)
        let products=ProductModel.get()
        res.render('job',{products:products,userEmail:req.session.userEmail,name:req.session.userName})
    }
    logout(req, res) {
        // on logout, destroy the session
        req.session.destroy((err) => {
        if (err) {
        console.log(err);
        } else {
        res.redirect('/');
        }
        });
    }
    getUpdateJob(req,res){
        const id=req.params.id
        const upadtejob=ProductModel.getById(id)
        console.log(upadtejob);
        if(upadtejob){
            res.render('updateform',{product:upadtejob,userEmail:req.session.userEmail,name:req.session.userName})
        }
        else{
            res.render('error',{message:'Product not found'})
        }
    }
    postUpdateJob(req,res){
        console.log("postupdate");
        console.log(req.body)
        const up=ProductModel.update(req.body)
        // console.log(up);
        let products=ProductModel.get()
        console.log(products);
        res.render('job',{products:products,userEmail:req.session.userEmail,name:req.session.userName})
    }
    deleteProduct(req, res) {
        const id = req.params.id;
        ProductModel.delete(id);
        let products = ProductModel.get();
        res.render('job',{products:products,userEmail:req.session.userEmail,name:req.session.userName})
        }
                
}