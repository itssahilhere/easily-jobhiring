import multer from "multer";
const storageconfig=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'src/resume/')
    },
    filename:(req,file,cb)=>{
        const name=Date.now()+"-"+file.originalname;
        cb(null,name);
    },
});
export const uploadfiles=multer({storage:storageconfig})