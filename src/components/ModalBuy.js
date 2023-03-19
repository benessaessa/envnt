import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, CardText, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
const ModalBuy =({modal,toggleBuy,item})=> {
    return ( 
        <Modal isOpen={modal}  toggleBuy={()=>toggleBuy()}>
            <ModalHeader toggleBuy={item}>Add "{item.name}" To the cart</ModalHeader>
            <ModalBody className='border-0 pt-4 pb-0'>
                <div className='table-responsive'>
                    <Table>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><img width="40px" height="40px" src={item.image} /></td>
                                <td>{item.price}$</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </ModalBody>
            <ModalFooter className='border-0'>
                <Button color="light" className='me-auto' onClick={toggleBuy}>Cancel</Button>
                <Link className='btn btn-primary' to={"/success"}><i className='fa fa-cart-plus pe-2'></i> Buy Now</Link>
            </ModalFooter>
        </Modal>
     );
}

export default ModalBuy;