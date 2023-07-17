import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // const changefirstNameHandler = (event) => {
  //   setFirstName(event.target.value);
  // }
  // const changelastNameHandler = (event) => {
  //   setLastName(event.target.value);
  // }
  // console.log(firstName);
  // console.log(lastName);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  // console.log(formData);

  const submitHandler = (event) => {
    event.preventDefault();
    // send or print

    console.log("Finally printing the entire form ka data.............");
    console.log(formData);
  }
  return (
    <div className="App">
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <input
          type="text"
          placeholder="Enter your email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <textarea
          name="comment"
          value={formData.comment}
          placeholder="Enter your message"
          cols="30"
          rows="10"
          onChange={changeHandler}
        />

        <div>
          <input
            type="checkbox"
            name="isVisible"
            onChange={changeHandler}
            id="isVisible"
            checked={formData.isVisible}
          />
          <label htmlFor="isVisible">Am I Visible ?</label>
        </div>

        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell me your Favourite Car</label>
        <select 
        name="favCar" 
        id="favCar" 
        onChange={changeHandler}
        value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
        </select>
        
        {/* <input type="submit" value="submit" /> */}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
