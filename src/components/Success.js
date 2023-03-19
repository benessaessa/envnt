import React from 'react'
import imgSuccess from "../assets/images/tick.png"
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


const Success = ({}) => {
  return (
    <div className='pt-4'>
        <Container className='pt-5'>
            <Row className='row pt-5 justify-content-center'>
                <Col className='col-lg-9'>
                    <div className='card cardShadow text-center py-5'>
                        <img src={imgSuccess} className="img-fluid d-block mx-auto" />
                        <h4 className='fw-bold pt-4'>
                            Congratulations!  <br/>
                            Payment has been processed
                        </h4>
                        <p className='text-muted pt-3'>Fill information about your business and goals for this website, this data
                        <br/> can vary and time can be from 30 mins to 4 hours </p>
                        <p>
                            <Link 
                            className='btn btn-outline-primary mt-4 px-4 btnHeightLg'
                            to={"/home"}
                            >Go to project page</Link>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Success