import { Row, Col, Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const FavouriteCo = ({ data }) => {
  const dispatch = useDispatch();
  const favouriteCo = useSelector((state) => state.fav.content);

  return (
    <Container>
      <Row>
        <Col sm={12} className="mb-5">
          <h2>Le tue aziende preferite</h2>
          <ListGroup variant="flush">
            {favouriteCo.length > 0 ? (
              favouriteCo.map((data, i) => (
                <Row
                  key={i}
                  className="mx-0 mt-3 p-3 align-items-center"
                  style={{ border: "1px solid #00000033", borderRadius: 4 }}
                >
                  <Col sm={1} className="p-0">
                    <Button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_FAV", payload: i })
                      }
                    >
                      ❌
                    </Button>
                  </Col>
                  <Col>
                    <Link className="text-dark" to={`/${data.company_name}`}>
                      {data.company_name}
                    </Link>
                  </Col>
                </Row>
              ))
            ) : (
              <ListGroup.Item className="lead ">
                <span className="text-primary opacity-50 fs-1 me-2"> </span>
                Non hai alcun azienda tra i preferiti
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default FavouriteCo;
