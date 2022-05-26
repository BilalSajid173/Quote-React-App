import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found!!</p>;
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />
    </div>
  );
};

export default QuoteDetail;
