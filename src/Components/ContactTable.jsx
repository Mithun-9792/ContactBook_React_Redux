import React from "react";
import { useNavigate } from "react-router-dom";
import { remove } from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";

export default function ContactTable(props) {
  const [data, setData] = React.useState();
  const [dataLen, setDataLen] = React.useState();
  const { token } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.contact.contactDetails);
  // console.log(authData, "auth contect state here");
  React.useEffect(() => {
    setData(authData);
    if (data) {
      setDataLen(data.length);
    }
  }, [token, dataLen]);

  const deleteContact = (index) => {
    setDataLen(dataLen - 1);
    dispatch(remove(index));
  };

  if (!data) return null;

  // console.log(data);
  return (
    <table
      className="table"
      border={10}
      style={{
        margin: "auto",
        width: "50rem",
        textAlign: "center",
        background: "powderblue",
        alignItems: "center",
      }}
    >
      <thead>
        <tr>
          <th scope="col">Sr. No.</th>
          <th scope="col">Name</th>
          <th scope="col">Contact No.</th>
          <th scope="col">E-mail</th>
          {/* <th scope="col">Image</th> */}
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((con, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{con.name}</td>
                <td>{con.contact}</td>
                <td>{con.email}</td>
                {/* <td>{con.image}</td> */}
                <td>
                  <button
                    style={{
                      margin: "0.5rem",
                      background: "#fab905",
                      fontSize: "1em",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      navigate(`/updatecontact/${index}`);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      deleteContact(index);
                    }}
                    style={{
                      margin: "0.5rem",
                      background: "red",
                      fontSize: "1em",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        {/* <tr>
          <th scope="row">{id + 1}</th>
          <td>{name}</td>
          <td>{contact}</td>
          <td>{mail}</td>
        </tr> */}
      </tbody>
    </table>
  );
}
