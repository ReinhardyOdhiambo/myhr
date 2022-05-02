import { Email, LocationCityOutlined, NoteAdd, Phone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import "./Sidenav.css";
import prflebg from '../assets/images/profilebg.jpg'
import { Link } from "react-router-dom";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";


  

const Sidenav = () => {
    const { user } = useUserAuth();
    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      };
      getUsers();
     
    }, []);

  return (
    <div className='sidenav'>
      <Link className="profilelinkhome" to='/profile'>
      {users.map((users) => (
          
          <>
            { users.userid === user.uid &&
              (
                <div key={user.id} className="profilebanner">

            <div className="banner">
              <div className="profilecircle">
                <img
                  className="profileimg"
                  src={user.photoURL ? user.photoURL : null}
                  alt=""
                />
              </div>
            </div>
            <div className="profiledetails">
              <h3 className="profilename">
                {" "}
                { users.name}{" "}
              </h3>
              <h3 className="profiletitle">
                {" "}
                { users.title}{" "}
              </h3>
              <a
                href={ user.email}
                className="profileemail"
              >
                <Email fontSize="small" />
                {user.email}{" "}
              </a>
              <a href="tel:+254743713416" className="profilephone">
                <Phone fontSize="small" />{" "}
                {  users.tel}
              </a>
              <h3 className="profilelocation">
                <LocationCityOutlined fontSize="small" />{" "}
                { users.location}
              </h3>
            </div>
            <img className="bannerimg" src={prflebg} alt="" />
            </div>
              )
            }
          </>
        
      
      ))}
      </Link>
      <Link to='/createjob'>
  <button className="createjobbtn"><NoteAdd className="addjobicon"/> Post a Job</button>
</Link>
     
    </div>
  )
}

export default Sidenav