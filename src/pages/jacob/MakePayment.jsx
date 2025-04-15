import React from "react";
import "../../styles/dashboardCss/makepayment.css";
import payment from "../../assets/public/payment.png";
import { IoIosArrowRoundBack } from "react-icons/io";

const MakePayment = () => {
  return (
    <main className="makepaymentmain">
      <div className="makeleftdiv">
        <div className="backtosubscription">
          <IoIosArrowRoundBack size={40} />
        </div>
        <div className="makepaymenttext">
          <h1 className="makepaymentheader">Make Payment</h1>
        </div>
        <div className="odername">
          <span className="odername1">Name</span>
          <span className="odername1">Benjamin Jacob</span>
        </div>
        <div className="odercode">
          <span className="code">Oder code</span>
          <span className="code">Monthly Subscription</span>
        </div>
        <div className="oderemail">
          <span className="oderemail1">Email</span>
          <span className="oderemail1">Benjaminufuomajacob9@gmail.com</span>
        </div>
        <div className="oderamout">
          <span className="oderamout1">Amount</span>
          <span className="oderamout1">₦5000</span>
        </div>
        <div className="instantactivation">
          <h1 className="instanttext">Instant Activation</h1>
        </div>

        <div className="onlinepaymentdiv">
          <span className="onlinepayment">
            Pay online with your ATM card, for fast process of products &
            services
          </span>
        </div>
        <div className="makepaymentbtn">
          <button className="korapayment">Pay with Kora</button>
        </div>
      </div>
      <div className="makerightdiv">
        <img src={payment} />
      </div>
    </main>
  );
};

export default MakePayment;
