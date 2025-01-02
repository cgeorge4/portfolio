import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from '../components/ContactContent';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        //Add logic to send data to a server or email API
    };

  return (
    <Container>
        <Row className='mb-5 mt-3'>
            <Col lg='8'>
                <h1 className='display-4 mb-4'>Contact Me</h1>
            </Col>
        </Row>

        <Row className='sec_sp'>
            <Col lg='5' className='mb-5'>
                <h3 className='color_sec py-4'>Get in touch</h3>
                <address>
                    <strong>Email: ca.geor97@gmail.com</strong>
                    <br />
                    <br />
                    {/*<p>
                        <strong>Phone:</strong>
                    </p>*/}
                </address>
                <p>{contactConfig.description}</p>
            </Col>
            <Col lg='7' className='d-flex align-items-center'>
                <form className='contact_form w-100' onSubmit={ handleSubmit }>
                    <Row>
                        <Col lg='6' className='form-group'>
                            <input
                               className='form-control'
                               id='name'
                               name='name'
                               placeholder='Name'
                               type='text'
                               value={formData.name}
                               onChange={handleChange}
                            />
                        </Col>
                        <Col lg='6' className='form-group '>
                            <input
                               className='form-control'
                               id='email'
                               name='email'
                               placeholder='Email'
                               type='email'
                               value={formData.email}
                               onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <textarea className='form-control' 
                                id="message"
                                name='message'
                                placeholder='Message'
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                    
                    ></textarea>
                    <br />
                    <Row>
                        <Col lg='12' className='form-group'>
                            <button className='btn ac_btn' type='submit'>Send</button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>
  );
};

export default Contact;