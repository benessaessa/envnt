import React  from "react";
import { CardText, Container,Row,Col, FormGroup, Label, Input } from "reactstrap";
import { useState } from 'react';
import ModalAdd from './ModalAdd';
import ModalDelete from "../../components/ModalDelete";
import ModalBuy from "../../components/ModalBuy";
import "./style.css"
const Home =()=> {
    const [modal,setModal]=useState(false);
    const toggleAdd = () => setModal(!modal);
    const [modalDelete,setModalDelete]=useState(false);
    const [modalBuy,setModalBuy]=useState(false);
    const toggleDelete = () => setModalDelete(!modalDelete);
    const toggleBuy = () => setModalBuy(!modalBuy);
    const handleClose = () => setModal(false);
    const handleCloseDelete = () => setModalDelete(false);
    const [selectedItems, setSelectedItems] = useState({});

    const [categories,setCategories]=useState([
        {id:'1',name:'Smart Watch',price:50,image:require('../../assets/images/img1.png')},
        {id:'2',name:'Smart Watch for Boys',price:20,image:require('../../assets/images/img2.png')},
        {id:'3',name:'Amazing watch',price:30,image:require('../../assets/images/img3.png')},
        {id:'4',name:'Air Boods',price:40,image:require('../../assets/images/img4.png')},
        {id:'5',name:'Cover phone',price:80,image:require('../../assets/images/img5.png')}
    ])
    const [formData,setFormData]=useState({
        name:'',
        price:'',
        image:''
    })
    const handleAddFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...formData};
        newFormData[fieldName]=fieldValue;
        setFormData(newFormData)
    }
    const handleSubmitForm = (event) =>{
        event.preventDefault();
        const newCategory = {
            id:categories.length+1,
            name:formData.name,
            price:formData.price,
            image:formData.image
        }
        const newCategories = [...categories,newCategory];
        setCategories(newCategories);
        handleClose();
    }
    const handleRemove = (prod) => {
        let allList = [...categories];
        allList = allList.filter(
            m => m.id !== prod.id
        )
        setCategories(allList);
        handleCloseDelete();
    };
    return ( 
        <Container className="pt-5 mt-5">
            <div className="d-sm-flex justify-content-between pb-3">
                <CardText tag="h2" className="mb-2">All Categories ({categories.length})</CardText>
                <button className="btn btn-primary" onClick={()=>{toggleAdd()}}><i className="fa fa-plus pe-2"></i> Create Category</button>
            </div>
            <div>
                <Row className="border-top border-bottom pt-2 mb-3">
                    <Col md={4} lg={3}>
                        <p className="text-black-50 fw-bold">Filter By</p>
                        <FormGroup>
                            <Label for="exampleSelect">Select Category</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>All Categories</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            {categories.length?
            <div>
                <Row>
                    {categories.map((category,item)=>
                    <Col key={item} md={4} lg={4} sm={6}>
                        <div className="card mb-3 shadow" data-aos='fade-up' data-aos-delay='150' data-aos-duration='1000'>
                            <img className="card-img-top" src={category.image} />
                            <div className="card-body">
                                <h5 className="text-capitalize">{category.name}</h5>
                                <p>{category.price} $</p>
                                <button className="btn btn-danger" onClick={()=>{toggleDelete();setSelectedItems(category)}}><i className="fa fa-trash-alt pe-2"></i>Delete</button>
                                <button className="btn btn-success ms-2" onClick={()=>{toggleBuy();setSelectedItems(category)}}><i className="fa fa-cart-plus pe-2"></i>Buy Now</button>
                            </div>
                        </div>
                    </Col>
                    )}
                </Row>
            </div>
            : (<p className="text-center">There is no items</p>)}
            {modal && (
                <ModalAdd
                    modal={modal}
                    toggleAdd={toggleAdd}
                    handleAddFormChange={handleAddFormChange}
                    handleSubmitForm={handleSubmitForm}
                />
            )}
            {modalDelete && (
                <ModalDelete
                    modal={modalDelete}
                    toggleDelete={toggleDelete}
                    item={selectedItems}
                    handleremove={()=>{handleRemove(selectedItems)}}
                />
            )}
            {modalBuy && (
                <ModalBuy
                    modal={modalBuy}
                    toggleBuy={toggleBuy}
                    item={selectedItems}
                />
            )}
        </Container>
    );
}

export default Home;