import React, { useState } from 'react'
import './Contact.css'

function Contact({data}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
    const submitForm = () => {
      window.open(
        `mailto:${data.email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
          email
        )}): ${encodeURIComponent(message)}`
      );
    };

    return (
      <div className="contact" id="contact">
        <div className="contact-inner">
          <div className="title">
            <h1>Contact Me</h1>
          </div>
            <div className="contact-container">

                <form onSubmit={submitForm}>
                    <fieldset className="fieldset">
                    <div>
                        <label htmlFor="contactName">
                        Name <span className="required">*</span>
                        </label>
                        <input
                        type="text"
                        value={name}
                        size="35"
                        id="contactName"
                        name="contactName"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                        </label>
                        <input
                        type="text"
                        value={email}
                        size="35"
                        id="contactEmail"
                        name="contactEmail"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input
                        type="text"
                        value={subject}
                        size="35"
                        id="contactSubject"
                        name="contactSubject"
                        onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="contactMessage">
                        Message <span className="required">*</span>
                        </label>
                        <textarea
                        rows="15"
                        value={message}
                        id="contactMessage"
                        name="contactMessage"
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button onClick={submitForm} type="submit">Send</button>
                    </fieldset>
                </form>

                <aside className="aside-info">
                    <h3>Email address and Phone number</h3>
                        <p>{data.name}</p>
                        <a href={`mailto:${data.email}`}>{data.email}</a>
                        <br/>
                        <br/>
                        <a href={`tel:${data.phone}`}>{data.phone}</a>
                </aside>
            </div>
        </div>
      </div>
    );
}

export default Contact
