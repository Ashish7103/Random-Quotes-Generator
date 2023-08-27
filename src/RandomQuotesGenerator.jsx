import React, { useState } from "react";

const QuotesGenerator = () => {
  const [quotes, setQuotes] = useState();
  const Generate = () => {
    const quotesGenerate = [
      "He has achieved success who has lived well, laughed often, and loved much",
      "Who has enjoyed the trust of pure women, the respect of intelligent men and the love of little children",
      "Who has filled his niche and accomplished his task",
      "Who has never lacked appreciation of Earth's beauty or failed to express it",
      "Who has left the world better than he found it,Whether an improved poppy, a perfect poem, or a rescued soul",
      "Who has always looked for the best in others and given them the best he had",
      "Whose life was an inspiration",
      "I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
      "If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.",
      "Try not to become a man of success. Rather become a man of value.",
      "It is better to fail in originality than to succeed in imitation.",
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
      "When there is darkness, dare to be the first to shine a light",
      "When there is injustice, dare to be the first to condemn it.",
    ];
    const index = Math.floor(Math.random() * quotesGenerate.length);
    setQuotes(quotesGenerate[index]);
  };
  return (
    <>
      <div className="quotes">
        <h1 className="quotesHeading">
          "<span>{quotes}</span>"
        </h1>
        <button className="btn_quotes" onClick={Generate}>
          generate
        </button>
      </div>
    </>
  );
};
export default QuotesGenerator;
