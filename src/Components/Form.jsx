import React from "react";
import { useForm } from "react-hook-form";
import ContactTable from "./ContactTable";
import { useDispatch } from "react-redux";
import { add } from "./redux/reducer";

export default function Form() {
  const [token, setToken] = React.useState();
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const saveContact = async (data) => {
    let Data = {
      id: Date.now(),
      name: data.name,
      contact: data.contact,
      email: data.email,
    };
    dispatch(add(Data));
    reset();
    setToken(Date.now());
  };
  let hexcolor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => saveContact(data))}
        style={{ textAlign: "center", margin: "1em" }}
      >
        <h2>Contact Form</h2>
        <table className="adduser">
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">
                  <b>Name :</b>
                </label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  {...register("name", { required: true })}
                  style={{ fontSize: "1.5rem", margin: "5px" }}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="contact">
                  <b>Contact No. :</b>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  pattern="[1-9]{1}[0-9]{9}"
                  {...register("contact", { required: true })}
                  style={{ fontSize: "1.5rem", margin: "5px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">
                  <b>E-mail :</b>
                </label>
              </td>
              <td>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  style={{ fontSize: "1.5rem", margin: "5px" }}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  value={"Save"}
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: "powderblue",
                    borderRadius: "5px",
                    marginTop: "5px",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <ContactTable token={token} />
    </>
  );
}
