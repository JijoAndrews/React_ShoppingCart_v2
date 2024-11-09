import axios from "axios";

// const carddataLoader=async () => {
//     const productdata= await axios.get("/public/productdata.json");
//     console.log("hello:",productdata.data)
//     return  productdata.data;
// }




const carddataLoader = async () => {
    try {
    const response = await fetch("productdata.json");
    const data = await response.json();
    console.log("hello:",data);

    return data;
    } catch (error) {
    console.error("Error fetching data", error);
    }
    };


export default carddataLoader;