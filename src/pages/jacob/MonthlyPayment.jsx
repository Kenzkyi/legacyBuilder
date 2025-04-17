import React, { useEffect } from "react";
import "../../styles/dashboardCss/subscription.css";
import payment from "../../assets/public/paymentsymbol.svg";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const MonthlyPayment = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const currentPlan = user?.plan;

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleChoosePlan = (amount, plan) => {
    navigate("/dashboard/make-payment", { state: { amount, plan } });
  };
  return (
    <>
      <div className="monthlyusub">
        <div className="monthlyfreemium">
          <div className="monthlysubcontainer">
            <div className="paymentsymboldiv">
              <img src={payment} />
            </div>
            <h1>Freemium</h1>
            <span className="started">Freemium plan for started </span>
            <div className="subofferdiv">
              <div className="suboffer">
                <div className="suboffertext">
                  <FiCheckCircle className="subiconfirst" />
                  <span>
                    Limited access to past JAMB Questions (e.g: 2024 - 2023 past
                    question)
                  </span>
                </div>
                <div className="suboffertext">
                  <FiCheckCircle size={20} style={{ color: " #804bf2" }} />
                  <span>25 Minutes Free Mock Exam.</span>
                </div>
                <div className="suboffertext">
                  <FiCheckCircle size={20} style={{ color: " #804bf2" }} />
                  <span>Can’t remove choose subject</span>
                </div>
              </div>
            </div>
            {/* <div className="subbuttondiv">
              <button className="planbutton" disabled={true}>
                Choose plan
              </button>
            </div> */}
          </div>
        </div>
        <div className="monthlypremium">
          <div className="monthlypremiumcontainer">
            <div className="paymentsymboldiv">
              <img src={payment} />
            </div>
            <h1>premium</h1>
            <span>Get the best value for your money</span>

            <div className="premiumbofferdiv">
              <div className="premiumsuboffer">
                <FiCheckCircle className="subiconfirst1" size={30} />
                <span>Full access to Ten years Jamb Past Questions.</span>
              </div>
              <div className="premiumsuboffer">
                <FiCheckCircle className="subiconfirst1" size={20} />
                <span>2 Hours free mock Exam</span>
              </div>
              <div className="premiumsuboffer">
                <FiCheckCircle className="subiconfirst1" size={25} />
                <span>Access to chose and remove subject.</span>
              </div>
              <div className="premiumsuboffer">
                <FiCheckCircle className="subiconfirst1" size={23} />
                <span>Study recommendations.</span>
              </div>
              <div className="subamountddiv">
                <h1 className="subamount">#500</h1>
              </div>
              <div className="monthlysubtextdiv">
                <span className="monthlysubtext">Monthly Subscription</span>
              </div>
              <div className="subbuttondiv">
                <button
                  className="planbutton1"
                  disabled={currentPlan === "Premium"}
                  onClick={() => handleChoosePlan(500, "Premium")}
                >
                  {currentPlan === "Premium" ? "Subscribed" : "Choose plan"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lifesub">
          <div className="lifesubcontainer">
            <div className="paymentsymboldiv">
              <img src={payment} />
            </div>
            <h1 className="accessmodel">Lifetime Access Model</h1>
            <span className="onetimepayment">
              One-time payment for unlimited lifetime access to all materials.
            </span>
            <div className="lifesuboffer">
              <FiCheckCircle className="subiconfirst2" size={23} />
            </div>
            <div className="lifesuboffertext">
              <span>Get access to all JAMB prep resources forever.</span>
            </div>
            <div className="lifesubamountdiv">
              <h1>#8,000</h1>
            </div>
            <div className="lifesubtext">
              <span>Lifetime Subscription</span>
            </div>
            <div className="subbuttondiv">
              <button
                className="planbutton"
                disabled={currentPlan === "Lifetime Access"}
                onClick={() => handleChoosePlan(8000, "Lifetime Access")}
              >
                {currentPlan === "Lifetime Access"
                  ? "Subscribed"
                  : "Choose plan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyPayment;
