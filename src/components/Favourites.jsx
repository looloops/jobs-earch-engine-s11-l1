import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { REMOVE_FROM_FAVOURITES } from "../redux/actions";

const Favourites = () => {
  const favCompanies = useSelector((state) => {
    return state.favourites.content;
  });
  const dispatch = useDispatch();

  return (
    <Container>
      <Link to="/favourites">Favourites</Link>
      <Row>
        <Col sm={12}>
          <ul style={{ listStyle: "none " }}>
            {favCompanies.map((company, i) => (
              <li key={i} className="ps-2 my-4 d-flex border rounded-2 align-items-center">
                {company}
                <Button
                  className="ms-auto"
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: REMOVE_FROM_FAVOURITES,
                      payload: i,
                    });
                  }}
                >
                  <FaTrash />
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
