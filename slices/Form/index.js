import React, {useState} from 'react'
import { PrismicRichText } from '@prismicio/react'

const Form = ({ slice }) => {  
  const [film, setFilm] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(){
    const body = `Dear straydogs, ${message}  / ${fullname} / ${email} / ${organization}`;
    window.open(`mailto:sarah@straydogs.no?subject=${film}&body=${body}`);
  }
  return(
    <div className='form-section' id="section">
      <h1 className='title' id={slice.primary.sectionid}>{slice.primary.title}</h1>
      <div className='form-wrapper'>
        <div className='info'>
          <PrismicRichText field={slice.primary.text}/>
          <div className="map" dangerouslySetInnerHTML={{ __html: slice.primary.map_embed }} />
        </div>
        <div className='form'>
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="film">Film:</label>
              <input type="text" name="film" value={film}
                onChange={(e) => {
                  setFilm(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" name="fullname" value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="organization">Organization:</label>
              <input type="text" name="organization" value={organization}
                onChange={(e) => {
                  setOrganization(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea type="text" name="message" value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>


            <button type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form