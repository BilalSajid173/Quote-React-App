import { Outlet, useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.quoteId}</h1>
      <Outlet />
    </div>
  );
};

export default QuoteDetail;
