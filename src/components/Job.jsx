import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const isFavourite = useSelector((state) => state.fav.content);
  const isInFavourites = isFavourite.includes(data.company_name);

  return (
    <Row
      className="mx-0 mt-3 p-3 align-items-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col className="p-0">
        <Button
          onClick={() => {
            isInFavourites
              ? dispatch({
                  type: "REMOVE_FROM_FAV",
                  payload: data.company_name,
                })
              : dispatch({
                  type: "ADD_TO_FAV",
                  payload: data.company_name,
                });
          }}
        >
          {!isInFavourites ? "❤️" : "😍"}
        </Button>
      </Col>
      <Col className="pl-0">
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
