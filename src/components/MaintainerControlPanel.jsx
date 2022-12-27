function MaintainerControlPanel() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-5 capitalize text-primary">Maintainer Control Panel</h1>

      {/* Input password */}
      <div className="panelbar">
        <span className="p-2 capitalize bg-primary w-1/2 text-center">
          type password here
        </span>
        <input type="text" className="bg-secondary w-1/2"></input>
      </div>

      {/* Password validity */}
      <div className="flex mx-auto w-full justify-evenly my-1">
        <span className="py-2 px-6 capitalize bg-secondary text-center">
          password valid
        </span>
        <span className="py-2 px-6 capitalize bg-secondary text-center">
          password invalid
        </span>
      </div>

      {/* Coin denomination */}
      <div className="flex flex-col items-center my-3 w-full">
        <div className="capitalize bg-primary p-2 w-full text-center">
          press below to determine number of coins in selected denomination
        </div>
        <div className="flex py-2 w-full text-center bg-secondary justify-evenly mt-1">
          <button>10c</button>
          <button>20c</button>
          <button>50c</button>
          <button>RM1</button>
        </div>
        <div className="panelbar">
          <div className="capitalize bg-primary w-1/2 p-1 text-center">
            total number of coins in selected denomination
          </div>
          <div className="flex bg-secondary w-1/2 justify-center items-center">
            *RM10.00
          </div>
        </div>
      </div>

      {/* New drinks price */}
      <div className="panelbar">
        <div className="capitalize bg-primary p-2 text-center w-1/2">
          type new drinks can price here
        </div>
        <input className="bg-secondary w-1/2" type="text"></input>
      </div>

      {/* Total cash held by machine */}
      <div className="panelbar">
        <div className="bg-primary capitalize w-1/2 text-center p-1">
          press here for total cash held by machine
        </div>
        <div className="bg-secondary w-1/2 flex justify-center items-center p-1">
          *RM10.00
        </div>
      </div>

      {/* Cash collection */}
      <div className="panelbar bg-primary">
        <div className="bg-primary w-1/2 capitalize flex justify-center items-center">
          press here to collect all cash
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <button className="">Press</button>
        </div>
      </div>

      {/* Cash dispenser */}
      <div className="panelbar bg-primary py-1">
        <div className="bg-primary w-1/2 capitalize flex justify-center items-center">
          collect all cash here
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="io-interface"></div>
        </div>
      </div>

      {/* Finish operation */}
      <div className="panelbar bg-primary py-1">
        <div className="bg-primary w-1/2 capitalize flex justify-center items-center">
          press here when finished
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <button className="">Press</button>
        </div>
      </div>
    </div>
  );
}

export default MaintainerControlPanel;