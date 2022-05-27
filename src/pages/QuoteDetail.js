import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const location = useLocation();
  const [seeComment, setSeeComment] = useState(false);
  // console.log(location);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found!!</p>;
  }

  //theres a bug here, can be solved by useEffect
  const commentsHandler = () => {
    setSeeComment(true);
  };

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />

      {!seeComment && (
        <Link
          onClick={commentsHandler}
          className="btn--flat"
          to={`${location.pathname}/comments`}
        >
          Comments
        </Link>
      )}
      <Outlet />
    </div>
  );
};

export default QuoteDetail;
