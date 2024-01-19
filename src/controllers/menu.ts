import { RequestHandler } from "express";

import { menu,item } from "../database/menu";

export const menuItems:RequestHandler = async (req,res) => {
    try{
        const items = await menu();
      items ? res.status(200).json(items) : res.status(400).json({
        status:'something went wrong'
      })
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:'data not found'
        })
    }
} 
interface Sizes{
    menu_size: string,
    item_price: string,
}
interface Extras{
    name: string,
    price: string,
}
export const menuItem:RequestHandler = async (req,res) => {
    try{
           const {id} = req.body;
           const menuItem = await item(id);
           let title = ""
           const extras:Extras[] = [];
           const sizes: Sizes[] = [];
           const itemData = {
            title: title,
            extras: extras,
            sizes:sizes
           }
           if(menuItem){
               title = menuItem[0].title;
               menuItem.forEach(item => {
                if(item.name){
                    extras.push({name:item.name,price:item.price});
                }
               })
               menuItem.forEach(item => {
                if(item.menu_size){
                    sizes.push({item_price:item.item_price,menu_size:item.menu_size})
                }
               })   
           }
           
           menuItem ? res.status(200).json(itemData) : res.status(400).json({
            status: "Something went wrong"
           })
        
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:'data not found'
        })
    }
}