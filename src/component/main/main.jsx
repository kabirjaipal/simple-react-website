import React from "react";
import "./style.css";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="desc">
          <p className="desc"> This op Website Coded By Tech Boy Gaming </p>
        </div>
        <div className="boxes">
          <div className="arc1">
            <h2>Bot Features</h2>
            <p>
              1. Advance Moderation <br />
              2. Music System <br />
              3. Reaction Roles <br />
              4. Ticket System <br />
            </p>
          </div>
          <div className="arc1">
            <h2>Bot Stats</h2>
            <p>
              1. 500 Commands <br />
              2. 800 Sub Commads <br />
              3. 29999 Servers <br />
              4. 5555555 Users <br />
            </p>
          </div>

          <div className="arc1">
            <h2>How to Use ?</h2>
            <p>
              1. type /help for See Commands <br />
              2. /setup to see all setup commands <br />
              3. /setup music to setup music system <br />
              much more............ <br />
            </p>
          </div>
        </div>

        <div className="botinfo">
          <h3>
            Hey There this is BotName most usable and powerfull Discord Bot
          </h3>
        </div>
      </div>
    </>
  );
};

export default Main;
