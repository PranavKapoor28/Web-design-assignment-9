
// import React, { useEffect, useState } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// import PageCard from "../../Components/PageCard/PageCard";
// import axios from "axios";
// import classes from "../../App/Login/Login.module.css";


// const Form = () => {

//     const [data, setdata] = useState({
//         email: "",
//         password: "",
//     });
//     const [message, setmessage] = useState("");

//     const change = (e) => {
//         const temp = { ...data };
//         temp[e.target.name] = e.target.value;
//         setdata(temp);
//     };

//     const submit = async () => {
//         try {
//             const apiData = await axios.post(
//                 "http://localhost:8880/user/login",
//                 data
//             );

//             setmessage(apiData.data.data.message);
//             console.log(apiData.data.data.message)
//             console.log(apiData);

//             // if (apiData.data.data.message.equals("Login Successfully")) {
//             window.location.href = '/home';
//             //}

//         } catch (error) {
//             console.log(error.response);
//             setmessage(error.response.data.error);
//         }
//     };



//     return (

//         <div>

//             <div className="Heading">
//                 <h1>Sign In Now</h1>
//                 <br></br>
//             </div>


//             <div className={classes.inputContainer} style={{ paddingBottom: "15%" }}>


//                 <input
//                     className={classes.Input}
//                     name="email"
//                     type="email"
//                     placeholder="harvey@pearsonspecter.com"
//                     value={data.email}
//                     onChange={change}
//                 />
//                 <input
//                     password="*******"
//                     type="password"
//                     className={classes.Input}
//                     name="password"
//                     placeholder="Enter Password"
//                     value={data.password}
//                     onChange={change}
//                 />
//                 <button onClick={submit} className={classes.Submit}>
//                     Submit
//                 </button>
//                 <br />
//                 <div>{message}</div>
//             </div>
//         </div>
//     );



// };

// export default Form;