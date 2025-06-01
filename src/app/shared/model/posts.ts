
export interface Ipost {
      Address : string;
      City:string;
      Country:string;
      GstNo:string;
      PanNo:string;
      PinCode:string;
      State:string;
      client:string;
      code:string;
      email:string;
      mobileNo:string;
      name:string;
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