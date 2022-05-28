import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const location = useLocation();
  const [seeComment, setSeeComment] = useState(false);
  // console.log(location);

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }
  //theres a bug here, can be solved by useEffect
  const commentsHandler = () => {
    setSeeComment(true);
  };

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

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
