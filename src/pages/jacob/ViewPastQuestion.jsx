import React, { useState } from "react";
import "../../styles/dashboardCss/viewpastquestion.css";
import {
  IoIosArrowRoundBack,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ViewPastQuestion = () => {
  const navigate = useNavigate();

  const year = useSelector((state) => state.year);
  const subject = useSelector((state) => state.exam);
  const questions = useSelector((state) => state.pastQuestions) || [];

  console.log("Questions from Redux:", questions);

  // const duplicatedQuestions = Array.from({ length: 3 }, () => questions).flat();

  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const handleOptionClick = (questionIndex, selectedOption, correctAnswer) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: {
        selected: selectedOption,
        isCorrect: selectedOption === correctAnswer,
      },
    }));
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(questions.length / questionsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <main className="viewpastquestionmain">
      <div className="viewpastquestionheader">
        <IoIosArrowRoundBack size={40} onClick={() => navigate(-1)} />
        <span>Jamb UTME Question</span>
      </div>
      <div className="viewpastquestionmainheader">
        <h1>
          {subject} <em>Past Question</em>({year})
        </h1>
      </div>
      {questions?.length > 0 ? (
        questions?.map((item, index) => (
          <div className="answerquestiondiv" key={index}>
            <h1>{item.question}</h1>
            <ul className="answeroption">
              {item.options.map((option, optionindex) => (
                <li
                  key={optionindex}
                  className={
                    selectedOptions[index]?.selected === option
                      ? selectedOptions[index]?.isCorrect
                        ? "correct-option"
                        : "wrong-option"
                      : ""
                  }
                  onClick={() =>
                    handleOptionClick(
                      indexOfFirstQuestion + index,
                      option,
                      item.answer
                    )
                  }
                  style={{
                    pointerEvents: selectedOptions[indexOfFirstQuestion + index]
                      ? "none"
                      : "auto",
                  }}
                >
                  <span className="letterdoption">
                    {String.fromCharCode(65 + optionindex)}.
                  </span>
                  {option}
                </li>
              ))}
              {selectedOptions[indexOfFirstQuestion + index] && (
                <p className="pastanswer">
                  {selectedOptions[indexOfFirstQuestion + index]?.isCorrect
                    ? `correct! the answer is: ${item.answer} `
                    : `wrong! The correct answer is: ${item.answer}`}
                </p>
              )}
            </ul>
          </div>
        ))
      ) : (
        <p className="pastquestionanswer">
          No questions available. please try again
        </p>
      )}

      <div className="pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          <IoIosArrowBack size={25} />
          Previous
        </button>
        <span className="pagination-info">
          page {currentPage} of {Math.ceil(questions.length / questionsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(questions.length / questionsPerPage)
          }
          className="pagination-button1"
        >
          Next
          <IoIosArrowForward size={25} />
        </button>
      </div>
    </main>
  );
};

export default ViewPastQuestion;
