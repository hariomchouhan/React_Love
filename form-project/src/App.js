import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    Candidates: false,
    Offers: false,
    pushNotifications: "",
  });
  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // send or print

    console.log(formData);
  };
  // console.log(formData);
  return (
    <div className="App">
      <div className="w-full md:max-w-[50%] mx-auto shadow-md p-8 my-8 mb-12 rounded-md">
        <h1 className="mb-5 text-center text-5xl font-bold text-[#ff4500]">Hari<span className="text-center text-6xl font-extrabold text-[#ff8000]">ॐ</span></h1>
        <form className="space-y-2" onSubmit={submitHandler}>
          <label
            htmlFor="firstName"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="Enter your first name!"
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />

          <label
            htmlFor="lastName"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Enter your last name!"
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />

          <label
            htmlFor="email"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter your email address!"
            value={formData.email}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />

          <label
            htmlFor="country"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <select
            name="country"
            id="country"
            onChange={changeHandler}
            value={formData.country}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          >
            <option value="">-- Select --</option>
            <option value="india">India</option>
            <option value="united state">United State</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>

          <label
            htmlFor="street"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Street address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={changeHandler}
            placeholder="Enter your Street address!"
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />

          <label
            htmlFor="city"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={changeHandler}
            placeholder="Enter your city!"
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />

          <label
            htmlFor="state"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            State / Province
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={changeHandler}
            placeholder="Enter your State / Province!"
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />

          <label
            htmlFor="zip"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            ZIP / Postal code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={changeHandler}
            placeholder="Enter your ZIP / Postal code!"
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />

          <div>
            <div className="text-sm font-semibold leading-6 text-gray-900">
              By Email
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="comments"
                    id="comments"
                    className="h-4 w-4 rounded"
                    onChange={changeHandler}
                    value={formData.comments}
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-900"
                  >
                    Comments
                  </label>
                  <p className="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="Candidates"
                    id="Candidates"
                    className="h-4 w-4 rounded"
                    onChange={changeHandler}
                    value={formData.Candidates}
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label
                    htmlFor="Candidates"
                    className="font-medium text-gray-900"
                  >
                    Candidates
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="Offers"
                    id="Offers"
                    className="h-4 w-4 rounded"
                    onChange={changeHandler}
                    value={formData.Offers}
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="Offers" className="font-medium text-gray-900">
                    Offers
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="contents text-sm font-semibold leading-6 text-gray-900">
                Push Notifications
              </div>
              <p className="text-sm text-gray-500">
                These are delivered via SMS to your mobile phone.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="pushNotifications"
                    id="pushEverything"
                    className="h-4 w-4"
                    value="Everything"
                    onChange={changeHandler}
                  />
                  <label
                    htmlFor="pushEverything"
                    className="ml-3 text-sm font-medium leading-6 text-gray-900"
                  >
                    Everything
                  </label>
                </div>

                <div className=" flex items-center">
                  <input
                    type="radio"
                    name="pushNotifications"
                    id="pushEmail"
                    className="h-4 w-4"
                    value="Same as email"
                    onChange={changeHandler}
                  />
                  <label
                    htmlFor="pushEmail"
                    className="ml-3 text-sm font-medium leading-6 text-gray-900"
                  >
                    Same as email
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    name="pushNotifications"
                    id="pushNothing"
                    className="h-4 w-4"
                    value="No push notifications"
                    onChange={changeHandler}
                  />
                  <label
                    htmlFor="pushNothing"
                    className="ml-3 text-sm font-medium leading-6 text-gray-900"
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default App;

