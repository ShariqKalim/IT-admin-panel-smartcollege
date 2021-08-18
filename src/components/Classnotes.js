import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Classnotes = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
    } else {
      history.push("/");
    }
  }, []);
  return (
    <>
      <img src="images/S.png" alt="logo" className="mx-auto" />
      <div className="w-8/12 mx-auto flex flex-wrap justify-around mt-32">
        <NavLink to="/CO_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Computer Organisation</h5>
          </div>
        </NavLink>
        <NavLink to="/DSA_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Data Structure and Algorithms</h5>
          </div>
        </NavLink>
        <NavLink to="/ADE_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Analog & Digital Electronics</h5>
          </div>
        </NavLink>
        <NavLink to="/MATH_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Mathematics-III</h5>
          </div>
        </NavLink>
        <NavLink to="/EFE_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Economics for Engineers</h5>
          </div>
        </NavLink>
        <NavLink to="/ITW_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">IT Workshop</h5>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Classnotes;
