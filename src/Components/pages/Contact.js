import React from "react"


const Contact = ({name1, name1Onchange, email, emailOnchange, company, companyOnchange}) => (
    <div>

        
        <h3>Name:</h3>
        <input type="text" name="firstname" value={name1} onChange={name1Onchange} placeholder="Your name.."/>
        <h3>Email:</h3>
        <input type="text" name="email" value={email} onChange={emailOnchange} placeholder="Your email.."/>
        <h3>Company</h3>
        <input type="text" name="company" value={company} onChange={companyOnchange} placeholder="Your company.."/>
    </div>
)
export default Contact;