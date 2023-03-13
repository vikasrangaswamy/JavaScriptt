import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { useState } from 'react';
function User() {

    

    const [formdata , setFormdata] = useState({})

    const handleChange = (event)=>{
        setFormdata({
            ...formdata,
            [event.target.name] : event.target.value
    })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(formdata)
        axios.post("http://localhost:5000/api/v1/users/add" , formdata)

    }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Name"
            onChange={handleChange}
            name='name'
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            roll
          </Form.Label>
          <InputGroup className="mb-2">
            <Form.Control id="inlineFormInputGroup" name="roll" placeholder="Roll Number" onChange={handleChange}/>
          </InputGroup>
        </Col>
        
        <Col xs="auto">
          <Button type="submit" className="mb-2" >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default User;