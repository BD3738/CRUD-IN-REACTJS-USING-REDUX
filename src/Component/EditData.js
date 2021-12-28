import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Redux/Action/AddUser";

const EditData = () => {
  const dt = {
    name: "",
    email: "",
    number: "",
  };
  const [data, setData] = useState(dt);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const onChangeHander = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const edata = useSelector((state) => state.crudReducer);
  const editdata = edata.find((dt, i) => i === parseInt(id));
  console.log(editdata);

  const updateData = (dt, i) => {
    dispatch(updateUser(dt, i));
    navigate("/");
  };

  useEffect(() => {
    if (editdata) {
      setData({
        name: editdata.name,
        email: editdata.email,
        number: editdata.number,
      });
    }
  }, [editdata]);

  return (
    <div className="App">
      <input
        style={{
          height: "50px",
          width: "500px",
          marginTop: "150px",
        }}
        type="text"
        placeholder="Name"
        value={data.name}
        name="name"
        onChange={(e) => onChangeHander(e)}
      />
      <br />
      <input
        style={{
          height: "50px",
          width: "500px",
          marginTop: "30px",
        }}
        type="text"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={(e) => onChangeHander(e)}
      />
      <br />
      <input
        style={{
          height: "50px",
          width: "500px",
          marginTop: "30px",
        }}
        type="text"
        placeholder="Number"
        name="number"
        value={data.number}
        onChange={(e) => onChangeHander(e)}
      />
      <br />
      <button
        type="button"
        className="btn btn-danger"
        style={{ marginTop: "30px", height: "50px", width: "150px" }}
        onClick={() => {
          updateData(data, parseInt(id));
        }}
      >
        Update
      </button>

      <button
        type="button"
        className="btn btn-primary "
        style={{ marginTop: "30px", height: "50px", width: "150px" }}
        onClick={() => navigate("/")}
      >
        Cancle
      </button>
    </div>
  );
};

export default EditData;
