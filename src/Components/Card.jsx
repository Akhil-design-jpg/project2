import React from "react";
import axios from "axios";
function Card({ username, text }) {
  const [conf, setConf] = React.useState(true);
  const [showCard, setShowCard] = React.useState(true);
  const [cancel, setCancel] = React.useState(true);
  const [ticketData, setTicketData] = React.useState([]);

  const [themeMode, setThemeMode] = React.useState("light");

  const ChangeColor = () => {
    const background = document.getElementById('bg')
    const user = document.getElementById('user')
    const text = document.getElementById('text')
    if (themeMode === "light") {
      background.style.backgroundColor = "black"
      user.style.color = "white"
      setThemeMode("dark");
    } else {
      setThemeMode("light");
      background.style.backgroundColor = "#3B82F6"
      user.style.color = "black"
    }
  };

  const confirm = async () => {
    if (!conf) {
      console.log("error");
      return;
    }
    try {
      console.log("Data being fetched");

      const response = await axios.post("http://localhost:5000/users", {
        username,
        text: "Order  confirmed",
      });

      console.log("API fetched", response.data);
      setTicketData(response.data);
      setConf(false); // false after successfull api call

      setTimeout(() => {
        setShowCard(false);
        alert("Your order is placed ");
        console.log("Data being fetched", conf);
      }, 1000);
    } catch (error) {
      alert("Please try again");
      setConf(true);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/")
  //     .then((data) => {
  //       setTicketData(data.data);
  //     })
  //     .catch((err) => console.error("some error occured", err.message));
  // }, []);

  const remove = () => {
    setCancel(false);
    alert("Your order is Cancled ");

    setTimeout(() => {
      setShowCard(false), 2500;
    });
  };

  if (!showCard) return null;

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-6">

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={ChangeColor}
          checked={themeMode === "dark"}
          />
        <div className="relative w-11 h-6  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-black-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span id="text" className="ms-3 text-sm font-medium text-black ">
          Toggle me
        </span>
      </label>{" "}
      <div className=" w-screen w-full flex justify-center items-center">
        <div id="bg" className="w-full max-w-sm  border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4">
            <button
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              {conf ? null : (
                <p className="text-green-500 flex flex-column text-center py-2">
                  Ticket confirmed Data received
                </p>
              )}
              {!cancel && (
                <p className="text-red-500 text-center py-2">
                  Your order is canceled
                </p>
              )}
            </button>
          </div>

          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://cdn.pixabay.com/photo/2014/09/07/22/15/anonymous-438427_960_720.jpg"
              alt="User Avatar"
              />
            <div>
              {Array.isArray(ticketData) &&
                ticketData.map((data) => (
                  <div key={data.id} className="text-center">
                    <h5 className="mb-1 text-xl font-medium text-black ">
                      {data.username}
                    </h5>
                    
                  </div>
                ))}
            </div>
            <div id = 'user' className="  text-center text-xl">
              {username}

              <div className="text-green-500 text-lg">{text}</div>
            </div>
            <div className="flex mt-4 md:mt-6">
              <button
                onClick={confirm}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                >
                Confirm your ticket
              </button>

              <button
                onClick={remove}
                className="ml-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                Cancel your ticket
              </button>
            </div>
          </div>
        </div>
      </div>
                </div>
    </>
  );
}

export default Card;
