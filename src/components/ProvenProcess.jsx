import React from "react";
import "../styles/learnmore.css";
import { MdDashboard, MdOutlineManageAccounts } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { FaSuitcase } from "react-icons/fa6";

const ProvenProcess = () => {
  return (
    <>
      <div className="acccreactionprocess">
        <div className="accdiv">
          <MdOutlineManageAccounts className="learnicon" />
          <div className="circlezero1container">
            <div className="innerzero1container">
              <h1>01</h1>
            </div>
          </div>
        </div>
        <div className="line1"></div>
        <div className="dashdiv">
          <MdDashboard className="learnicon" />
          <div className="circlezero2container">
            <div className="innerzero2container">
              <h1>02</h1>
            </div>
          </div>
        </div>
        <div className="line1"></div>
        <div className="examdiv">
          <PiExamFill className="learnicon" />
          <div className="circlezero3container">
            <div className="innerzero3container">
              <h1>03</h1>
            </div>
          </div>
        </div>
        <div className="line1"></div>
        <div className="suitdiv">
          <FaSuitcase className="learnicon" />
          <div className="circlezero4container">
            <div className="innerzero4container">
              <h1>04</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mainprocess">
        <div className="createaccount">
          <h1>Account Creation</h1>
          <span>
            New users create an account Returning users log in to access their
            dashboard
          </span>
        </div>
        <div className="createaccount">
          <h1>Access Dashboard</h1>
          <span>Upcoming study tasks or mock exams. performance insights.</span>
        </div>
        <div className="createaccount">
          <h1>Take a CBT Mock Exam</h1>
          <span>
            Start the test with a real JAMB-like interface. View instant results
            with detailed explanations after completion.
          </span>
        </div>
        <div className="createaccount">
          <h1>Practice with Past Questions</h1>
          <span>
            Navigate to the Past Questions section. Choose a subject, answer
            questions and check detailed explanations immediately.
          </span>
        </div>
      </div>
    </>
  );
};

export default ProvenProcess;
