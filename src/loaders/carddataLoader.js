import axios from "axios";

const carddataLoader=async () => {
    const productdata= await axios.get("/public/productdata.json");
    console.log("hello");
    return  productdata.data;
}




// const fetchcarddataLoaderPlanets = async () => {
//     try {
//     const response = await fetch(“/facts.json”, {
//     headers: {
//     Accept: “application/json”,
//     },
//     });
//     const data = await response.json();
//     setPlanets(data);
//     } catch (error) {
//     console.error(“Error fetching planets:”, error);
//     }
//     };


export default carddataLoader;