import { useState, useEffect } from "react";
import axios from "axios";

function CustomerPanel() {
  // how to simulate coin input
  // how to simulate invalid coin input

  const [totalMoney, setTotalMoney] = useState(0);
  const [totalChange, setTotalChange] = useState(0);
  const [isCoinValid, setIsCoinValid] = useState(false);
  const [isTerminateTransaction, setIsTerminateTransaction] = useState(false);

  const [drinks, setDrinks] = useState([]);
  const [coins, setCoins] = useState([]);

  async function fetchDrinks() {
    const { data } = await axios.get(`http://127.0.0.1:8080/api/drinks`);
    setDrinks(data);
  }

  async function fetchCoins() {
    const { data } = await axios.get(`http://127.0.0.1:8080/api/coins`);
    setCoins(data);
  }

  useEffect(() => {
    fetchDrinks();
    fetchCoins();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="mt-3 text-center capitalize text-primary">
        customer panel
      </h1>

      {/* Input Coin Section */}
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="flex m-1 p-1 bg-primary items-center">
          <span className="m-1 capitalize">insert coin here</span>
          <div className="io-interface ml-auto"></div>
        </div>
        <div className="flex m-1 p-1 bg-secondary items-center justify-center capitalize">
          coins not valid
        </div>
        <div className="flex m-1 p-1 bg-primary items-center capitalize">
          total money inserted
        </div>
        <div className="flex m-1 p-1 bg-secondary items-center justify-center">
          RM {totalMoney.toFixed(2)}
        </div>
      </div>

      {/* Selection Table */}
      <table className="my-5 mx-1 p-1 border-collapse border-solid border-white border-1 bg-secondary">
        <thead className="bg-primary">
          <tr>
            <th>Select Drinks Brand Below</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Press To Select</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink) => (
            <tr className="" key={drink.id}>
              <td className="text-center">{drink.brand}</td>
              <td className="text-right px-2 py-1">{drink.price.toFixed(2)}</td>
              <td className="text-center">
                {drink.quantity > 0 ? "In Stock" : "Not In Stock"}
              </td>
              <td className="text-center hover:cursor-pointer hover:bg-secondary-highlight">
                Press
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Change notification section */}
      <div className="panelbar p-2 bg-primary justify-center capitalize">
        {totalChange === 0 ? (
          <span>no change available</span>
        ) : (
          <span>RM {totalChange.toFixed(2)}</span>
        )}
      </div>

      {/* Return cash/ Terminate transaction */}
      <div className="panelbar p-1 items-center bg-primary justify-between">
        <div className="">
          Press here to return cash/change and terminate transaction here
        </div>
        <button>Press</button>
      </div>

      {/* Change dispenser */}
      <div className="panelbar items-center justify-between bg-primary p-1 capitalize">
        <div>collect change/ returned cash here</div>
        <div className="io-interface"></div>
      </div>

      {/* Drinks dispenser */}
      <div className="panelbar bg-primary p-1 justify-between capitalize">
        <div>collect can here</div>
        <div className="io-interface"></div>
      </div>
    </div>
  );
}

export default CustomerPanel;
