import React, { Component } from 'react';
import axios from 'axios';
// import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
    };
  }

  emptyContactForm = () => {
    this.setState({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
    });
  };

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('We will contact you shortly', 'Thank You');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      subject: this.state.subject,
      message: this.state.message,
    };

    axios.post('http://localhost:5001/contacts/add', contact).then((res) => {
      console.log(res.data);
      this.emptyContactForm();
      document.getElementById('move-top').click();
    });
  };

  render() {
    const { name, email, mobile, subject, message } = this.state;
    return (
      <section className="contact py-5" id="contact">
        <NotificationContainer />
        <div className="container py-lg-5">
          <p className="paragraph">Get in touch with me</p>
          <h3 className="heading mb-sm-5 mb-4">Contact</h3>
          <div className="contact-form">
            <div className="row">
              <div className="col-lg-8">
                <form name="contactform" id="contactform" onSubmit={this.submitHandler}>
                  <div className="row">
                    <div className="form-group col-md-6 ">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        name="name"
                        value={name}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Phone No.</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter Phone no."
                        name="mobile"
                        value={mobile}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Enter Subject"
                        name="subject"
                        value={subject}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-12">
                      <label>Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        placeholder="Enter Your Message Here"
                        value={message}
                        onChange={this.changeHandler}
                      ></textarea>
                    </div>
                    <button onClick={this.createNotification('success')} type="submit" className="btn btn-default">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <section className="w3layouts-map col-lg-4 mt-lg-0 mt-5">
                <iframe
                  src="https://maps.google.com/maps?q=noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen=""
                ></iframe>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
