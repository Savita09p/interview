
export interface Ipost {
      GstNo : string;
      PanNo:string;
      adress:{
       Country:string;
       city:string;
       pincode:string;
       state:string;
      },
      client:string;
      code:string;
      contact:string;
      email:string;
      gender:string;
      name:string;
      id:string;
    }

      
//     title : string;
//     content : string;
//     userId : string;
//     id: string;
// }

 export interface IpostsRes {
     [key : string] : Ipost
 }

 export interface ipostRes{
    name: string
 }