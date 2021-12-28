import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../Redux/Action/AddUser";

const Home = () => {
  const data = useSelector((state) => state.crudReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const edit = () => {
    navigate("/edituser");
  };

  return (
    <div>
      <Link to="/adduser">
        <button
          className="btn btn-primary"
          style={{ marginTop: "30px", height: "50px", width: "150px" }}
        >
          +Adduser
        </button>
      </Link>
      <table className="table" style={{ marginTop: "30px" }}>
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== undefined &&
            data.map((dt, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{dt.name}</td>
                  <td>{dt.email}</td>
                  <td>{dt.number}</td>
                  <td>
                    <Link to={`/edituser/${i}`}>
                      <button
                        className="btn btn-warning"
                        onClick={() => edit()}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(deleteUser(i));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
