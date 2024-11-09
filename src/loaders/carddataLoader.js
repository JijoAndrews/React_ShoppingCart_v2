import axios from "axios";

const carddataLoader=async () => {
    const productdata= await axios.get("/public/datas/productdata.json");
    return  productdata.data;

    // fetch("/public/datas/productdata.json")
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   return response.json();
    // })
}



export default carddataLoader;