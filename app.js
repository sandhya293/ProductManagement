const express = require('express');
const product = require("./product");
const seller = require("./seller");
const company = require("./company");
const app = express();
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => res.send('WELCOME TO PRODUCT MANAGEMENT'))

app.post(("/addproduct"),(req,res) => {
    const productID = req.body.productID;  
    const title = req.body.title;  
    const catagory = req.body.catagory;  
    const price = req.body.price;  
    const comapanyID = req.body.comapanyID;  
    const sellerID = req.body.sellerID;

    const pro = product.filter((p) => p.title === title);;

    if(pro.length === 0)
    {
            return res.json({data:"product added successful"});
    }else{
        return res.json({data:"title already taken"});
    }
});
app.post(("/addcompany"),(req,res) => {
    const companyId = req.body.companyId;
    const name = req.body.name;
    const productID = req.body.productID;

    const com = company.filter((c) => c.name === name);;

    if(com.length === 0)
    {
            return res.json({data:"company added successful"});
    }else{
        return res.json({data:"company name  already taken"});
    }
});
app.post(("/addseller"),(req,res) => {
    const sellerID = req.body.sellerID;
    const name = req.body.name;
    const productID = req.body.productID;

    const sell = seller.filter((s) => s.name === name);;

    if(sell.length === 0)
    {
            return res.json({data:"seller added successful"});
    }else{
        return res.json({data:"seller name  already taken"});
    }
});
app.post("/productlist",(req,res) =>{
    const companyID = req.body.companyID;
    
    let productlist = product.filter(p => p.companyID === companyID);;

    if(productlist.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:productlist});
    }
});
app.post("/productlists",(req,res) =>{
    const sellerID = req.body.sellerID;
    
    let productlist = product.filter(p => p.sellerID === sellerID);;

    if(productlist.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:productlist});
    }
});
app.post("/sellerlist",(req,res) =>{
    const sellerID = req.body.sellerID;
    
    let sellerlist = seller.filter(c => c.sellerID === sellerID);;

    if(sellerlist.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:sellerlist});
    }
});
app.post("/companylist",(req,res) =>{
    const companyID = req.body.companyID;
    
    let companylist = company.filter(c => c.companyID === companyID);;

    if(companylist.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:companylist});
    }
});
app.post("/updateproduct",(req,res) =>{
    const productID = req.body.productID;
  //  const category = req.body.catagory;
    
    let list = product.filter(p => p.productID === productID);;

    if(list.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:" category updated succssfully"});
    }
});
app.post("/updatecompany",(req,res) =>{
    const companyID = req.body.companyID;
    
    let list = company.filter(c => c.companyID === companyID);;

    if(list.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:" product updated succssfully"});
    }
});
app.post("/updateseller",(req,res) =>{
    const sellerID = req.body.sellerID;
    
    let list = seller.filter(s => s.sellerID === sellerID);;

    if(list.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:" product updated succssfully"});
    }
});
app.post("/deleteseller",(req,res) =>{
    const sellerID = req.body.sellerID;
    
    let list = seller.filter(s => s.sellerID === sellerID);;

    if(list.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:"seller deleted succssfully"});
    }
});
app.post("/deleteproduct",(req,res) =>{
    const productID = req.body.productID;
    
    let list = product.filter(s => s.productID === productID);;

    if(list.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:"product deleted succssfully"});
    }
});
app.post("/deletecompany",(req,res) =>{
    const companyID = req.body.companyID;
    
    let list = company.filter(s => s.companyID === companyID);;

    if(list.length === 0)
    {
            return res.json({data:"no data found"});
    }else{
        return res.json({data:" company deleted succssfully"});
    }
});
app.listen(port, () => console.log(`Example app listening on port 5000!`))
