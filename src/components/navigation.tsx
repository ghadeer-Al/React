import React from "react";
import AddDialog from "./addDialog";
// import Search from "./search";

const Navigation = () => {
  return (
    <div className="appheader">
      <header>
        <h3
          style={{
            backgroundColor: "DodgerBlue",
            fontSize: 40,
            margin: "0 auto",
            textAlign: "center",
            padding: "8px",
            color: "#fff",
          }}
        >
          React JS with Web API
        </h3>
        <h4
          style={{
            backgroundColor: "DodgerBlue",
            fontSize: 30,
            margin: " 0auto",
            textAlign: "center",
            padding: "6px",
            color: "#fff",
          }}
        >
          {" "}
          Dummy Project
        </h4>
      </header>

      <nav className="navbar navbar-expend-sm bg-light navbar-dark ">
        <ul className=" navbar-nav" style={{ fontSize: 25, padding: "1px" }}>
          <li>
            <a className=" m-2" href="/Hom">
              Home
            </a>

            <a className=" m-2" href="/User">
              User
            </a>

            <a className=" m-2" href="/AddUser">
              Add User
            </a>
            {/* <a className=" m-2" href ="/AddDialog" >Add Dialog</a> */}

            {/* <AddDialog /> */}
          </li>
        </ul>
         {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
          {/* <ul className="nav navbar-nav navbar-right ">
            <Search />
          </ul>  */}
          {/* <ul className="nav navbar-nav navbar-right ">
            <AddDialog />
          </ul> */}
        {/* </div> */}
        <ul className="nav navbar-nav navbar-right ">
            <AddDialog />
          </ul>
      </nav>
    </div>
  );
};

export default Navigation;
