import { useState, useEffect } from "react";
import "./Optin.css";
import { Col, Row, Alert } from "react-bootstrap";
import axios from "axios"
// import("dotenv").config();


const Optin = () => {
  let url = process.env.url
  console.log(url)
  const [email, setEmail] = useState("");
  const [status,setStatus] = useState("")


  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { type, value } = e.target
        setEmail({
            ...email,
            [type]: value
        })
  }

  const clearFields = () => {
    setEmail("");
  }


// console.log(email)

  const contact = async () => {
    try {
        const resp = await axios.post("https://blog-post-coming-soon-server.onrender.com/contact", {email});
        setStatus(resp.data.status)
        clearFields();

        alert(resp.data.message);
    }
    catch (err) {
        alert(err.message)  
      }
}   
// console.log(status)
  
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Want to be the first to know when we launch?</h3>
              {/* {contact && <Alert variant="success">{message}</Alert>} */}
            </Col>
            <Col md={6} xl={7}>
              {status === 'success' ? <h2 variant="success">Congratulations!!!<br/> You have successfully subscribed to our Blog Post.</h2> :<form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit" onClick={contact}>Submit</button>
                </div>
              </form>}
            </Col>
          </Row>
        </div>
      </Col>
  )
}

export default Optin