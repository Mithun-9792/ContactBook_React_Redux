import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./redux/reducer";

export default function UpdateContact() {
  const { index } = useParams();
  const [contact, setContact] = useState([]);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ContactData = useSelector((state) => state.contact.contactDetails);

  useEffect(() => {
    setContact(ContactData);
  }, []);

  const Update = (data) => {
    let Data = {
      id: data.id,
      name: data.name,
      contact: data.contact,
      email: data.email,
    };
    // console.log(Data, ContactData, "data here ");
    dispatch(update(Data));
    navigate("/");
  };
  return (
    <div>
      {contact &&
        contact.map((con, i) => {
          if (i == index) {
            return (
              <form
                onSubmit={handleSubmit((data) => Update(data))}
                style={{ textAlign: "center", margin: "1em" }}
                key={i}
              >
                <h2>Update Contact</h2>
                <table className="updateuser">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="name">
                          <b>Name :</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={con.id}
                          {...register("id")}
                          hidden
                        />{" "}
                        <input
                          type="text"
                          defaultValue={con.name}
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
                          defaultValue={con.contact}
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
                          defaultValue={con.email}
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
                          value={"Back"}
                          style={{
                            fontSize: "1.5rem",
                            backgroundColor: "yellow",
                            borderRadius: "5px",
                            margin: "5px",
                          }}
                          onClick={() => {
                            navigate("/");
                          }}
                        />
                        <input
                          type="submit"
                          value={"Update"}
                          style={{
                            fontSize: "1.5rem",
                            backgroundColor: "powderblue",
                            borderRadius: "5px",
                            margin: "5px",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            );
          }
        })}
    </div>
  );
}
