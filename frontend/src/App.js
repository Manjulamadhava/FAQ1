import React, { useState } from "react";

const faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, there are free and premium challenges available.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use the projects to showcase your skills.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "You can join the Frontend Mentor community on Discord or check the solution hub.",
  },
];

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getBgImage=()=>{
    if (window.innerWidth<=640){
      return `${process.env.PUBLIC_URL}/background-pattern-mobile.svg`
    }
    return `${process.env.PUBLIC_URL}/background-pattern-desktop.svg`
  }

  return (
    <div className="relative min-h-screen bg-[hsl(275,100%,97%)]">
      <div
        className="absolute top-0 left-0 w-full h-[20vh] bg-no-repeat bg-cover z-0 md:h-[30vh]"
        style={{
          backgroundImage: `url(${getBgImage()})`,
          backgroundPosition: "top center"
        }}
      ></div>

      <div className="relative z-10 flex justify-center items-center min-h-screen py-10">
        <div className="bg-[hsl(0,100%,100%)] rounded-xl shadow-lg max-w-xl w-full p-6 md:p-10">
          <h2 className="text-3xl font-bold mb-6 text-[hsl(292,42%,14%)] flex items-center gap-2">
            <span className="text-purple-600"><img src="/icon-star.svg" className="w-8 h-8" /></span> FAQs
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-5">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-purple-950 hover:text-purple-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <span>
  {openIndex === index ? (
    <img src="/icon-minus.svg" alt="minus icon" className="w-5 h-5" />
  ) : (
    <img src="/icon-plus.svg" alt="plus icon" className="w-5 h-5" />
  )}
</span>
              </button>
              {openIndex === index && (
                <p className="text-gray-500  text-base mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
