import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_FAVOURITES } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={2}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        <Button
          className="d-flex align-items-center"
          onClick={() => {
            dispatch({
              type: ADD_TO_FAVOURITES,
              payload: data.company_name,
            });
          }}
        >
          Add to favourites
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
