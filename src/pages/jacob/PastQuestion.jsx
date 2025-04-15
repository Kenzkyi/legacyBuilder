import React, { useState } from "react";
import "../../styles/dashboardCss/pastquestion.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setExam, setYear } from "../../global/slice";

const PastQuestion = () => {
  const [dropDownSubject, setDropDownSubject] = useState(false);
  const [selectSubjext, setSelectedSubject] = useState("All");

  const [dropDownYear, setDropDownYear] = useState(false);
  const [selectedYear, setSelectedYear] = useState("All");

  const dispatch = useDispatch();

  const subjects = [
    "Accounting",
    "Biology",
    "Chemistry",
    "Commerce",
    "Economics",
    "English Language",
    "Government",
    "Literature in English",
    "Mathematics",
    "Physics",
  ];

  const years = [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
  ];

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setDropDownSubject(false);
    dispatch(setYear(subject));
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setDropDownSubject(false);
    dispatch(setExam(year));
  };
  return (
    <div className="pastquestionmain">
      <div className="pastcontainer">
        <span>Jamb UTME Question</span>

        <h1 className="pastquestionheader">Select any subject</h1>

        <div className="selectpastquestion">
          <div className="pastleftdiv">
            <span>Exam</span>
            <div>jamb</div>
          </div>
          <div className="pastrightdiv">
            <span>Select Subject</span>

            <div onClick={() => setDropDownSubject(!dropDownSubject)}>
              All
              {dropDownSubject ? (
                <FaChevronUp className="pastdropdown" />
              ) : (
                <FaChevronDown className="pastdropdown" />
              )}
              {dropDownSubject && (
                <ul className="dropdownmenu">
                  {subjects.map((subject, index) => (
                    <li
                      key={index}
                      className="dropdownitem"
                      onClick={() => handleSubjectClick(subject)}
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="pastrightdiv">
            <span>Select Year</span>
            <div onClick={() => setDropDownYear(!dropDownYear)}>
              All
              {dropDownYear ? (
                <FaChevronUp className="pastdropdown" />
              ) : (
                <FaChevronDown className="pastdropdown" />
              )}
              {dropDownYear && (
                <ul className="dropdownmenu">
                  {years.map((year, index) => (
                    <li
                      key={index}
                      className="dropdownitem"
                      onClick={() => handleYearClick(year)}
                    >
                      {year}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="pastinstruction1">
          <h1>How to Select a JAMB Past Question</h1>
          <span>
            Choosing the right past question is key to studying smarter and
            scoring higher. Here’s how to do it:
          </span>
        </div>
        <div className="pastinstruction2">
          <h1>Know Your Subjects</h1>
          <span>
            Before selecting any past question, confirm the four JAMB subjects
            you're sitting for. For example:
          </span>

          <ul>
            <li>
              Science Student → English, Physics, Chemistry, Biology/Mathematics
            </li>
            <li>Art Student → English, Literature, Government, CRS/History</li>
            <li>
              Commercial Student → English, Economics, Commerce, Accounting
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PastQuestion;
