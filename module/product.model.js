export default class ProductModel{
    constructor(_id,_category,_jobdesignation,_joblocation,_comapanyname,_salary,_applyby,_numberofopening,numberofapplicant){
        this.id=_id,
        this.category=_category,
        this.jobdesignation=_jobdesignation,
        this.joblocation=_joblocation,
        this.comapanyname=_comapanyname,
        this.salary=_salary,
        this.applyby=_applyby,
        this.numberofopening=_numberofopening
        this.numberofapplicant=numberofapplicant

    }
    static get(){
        return products
    }
    static getById(id){
        return products.find((p) =>p.id==id)
    }
    static updateapplicants(index){
        const pro=products.find((p) =>p.id==index)
        pro.numberofapplicant=pro.numberofapplicant+1;
    }
    static addProduct(pObj){
        let newjob=new ProductModel(products.length+1,pObj.category,pObj.jobdesignation,pObj.joblocation,pObj.comapanyname,pObj.salary,pObj.numberofopening,pObj.addProduct,0)
        products.push(newjob)
    }
    static update(pObj){
        const index=products.findIndex((p)=>p.id==pObj.id);
        // console.log(products[index]);
        products[index]=pObj
        return products[index]
    }
    static delete(id) {
        const index = products.findIndex(p => p.id == id);
        products.splice(index, 1);
    }   
    
}
var products=[
    new ProductModel(1,'TECH','SDE','BANGLORE','CODING NINJAS',"14-20","30 AUG 2024",5,0),
    new ProductModel(2,'TECH','ANGULAR DEVELOPER','KOLKATA','GO DIGIT',"6-10","30 AUG 2024",7,0),    
    new ProductModel(3,'TECH','SDE','BANGLORE','JUSPAY',"20-26","30 AUG 2024",5,0)
]