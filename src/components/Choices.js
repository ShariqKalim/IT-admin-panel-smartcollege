import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Choices = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
    } else {
      history.push("/");
    }
  }, []);
  return (
    <>
      <div className="lg:w-8/12 mx-auto md:w-full">
        <img src="images/S.png" alt="logo" className="mx-auto" />
        <div className="w-full flex flex-wrap justify-around shadow-lg border-2 p-20 mt-40 ">
          <NavLink to="/classnotes" className="no-underline text-gray-900">
            <h1 className="text-3xl -mt-10 my-5 text-blue-900">
              What Do You Want To Upload ?
            </h1>
            <div className="flex p-10 border-2 shadow-lg w-96 cursor-pointer transform hover:scale-110">
              <img src="images/classnotes.jpg" alt="logo" className="w-24" />
              <h2 className="text-3xl mt-3 ml-3">Classnotes</h2>
            </div>
          </NavLink>
          <NavLink to="/assignments" className="no-underline text-gray-900">
            <div className="flex p-10 border-2 shadow-lg w-96 cursor-pointer mt-5 transform hover:scale-110">
              <img src="images/assignments1.jpg" alt="logo" className="w-24" />
              <h2 className="text-3xl mt-3 ml-3">Assignments</h2>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Choices;
