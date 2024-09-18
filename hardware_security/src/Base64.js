import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Base64.css';
import { Base64decode, Base64Getencode, Base64encode, deleteEncode } from './Api/CoreApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

function Base64() {
  const [text, setPlaintext] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [res, setRes] = useState([])
  const [open, setOpen] = useState(true)
  const [decode, setdecode] = useState('')

  const handleEncode = async (e) => {
    e.preventDefault();
    // console.log("Encode button clicked");
    // console.log("Plaintext:", plaintext);
    const Encrypted_text = await Base64encode({ 'text': text, 'user_id': localStorage.getItem('user_id') })
    console.log({ 'Encrypted_text': Encrypted_text })
    setEncryptedText(Encrypted_text)
    handleget();
  };
  useEffect(() => {
    handleget();
  }, []); // Empty dependency array ensures this runs once after the initial render

  const handleget = async () => {

    const res = await Base64Getencode({ 'user_id': localStorage.getItem('user_id') })
    setRes(res)
    console.log(res, 'res')
  };
  const handleDecode = async (e) => {
    e.preventDefault();
    // console.log("Decode button clicked");
    // console.log("EncryptedText:", encryptedText);
    const text = await Base64decode({ 'Encrypted_text': encryptedText, 'user_id': localStorage.getItem('user_id') })
    console.log({ 'text': text })
    setPlaintext(text)
    handleget();
  };

  const showResult = (id) => {
    setOpen(false)
    const filterData = res.find(o => o.id === id)
    if (filterData.search === 'encode') {
      setdecode(filterData.decode)
    } else {
      setdecode(filterData.encode)
    }

  }
  const deleteEncodeData = async (id) => {
    const text = await deleteEncode(id)
    handleget();
  };
  return (
    <div className="base-maindiv ">
      <div className='Base64sidebar'>
        <center><h2>Base64 Encode Decode</h2></center>
        <div className='Base64New-div'><button onClick={() => setOpen(true)} className='Base64New'><FontAwesomeIcon icon={faEdit} />  New</button></div>
        {res.map((i) => (
          <div className='HistorydeleteB64'>
            <div onClick={() => showResult(i.id)} className='historynameB64'>{i.search === 'encode' ? i.encode : i.decode}</div>
            <span className='Deleteicon-base64' onClick={() => deleteEncodeData(i.id)}>{'  '} <FontAwesomeIcon icon={faTrashAlt} style={{ marginRight: '5px' }} /></span>
            <br />
          </div>
        ))}
      </div>
      <div className="base-container">

        {open
          ?
          <main className="base-main-content">
            <header className="base-header">
              <nav className="base-navbar">
                <Link to="/encodedecode/Base64" className="base-nav-link active">Base64</Link>
                <Link to="/encodedecode/AES" className="base-nav-link">AES</Link>

              </nav>
            </header>
            <h1 className="base-title">Base64 Encode-Decode</h1>
            <form className="base-form">
              <div className="base-textarea-container">
                <textarea
                  placeholder="Enter Plaintext here"
                  value={text}
                  onChange={(e) => setPlaintext(e.target.value)}
                  className="base-textarea"
                />
                <textarea
                  placeholder="Enter EncryptedText here"
                  value={encryptedText}
                  onChange={(e) => setEncryptedText(e.target.value)}
                  className="base-textarea"
                />
              </div>
              <div className="base-button-container">
                <button onClick={handleEncode} className="base-button-encode-button">Encode</button>
                <button onClick={handleDecode} className="base-button-decode-button">Decode</button>
              </div>
            </form>
          </main>
          :
          <div className='base64-history-result'>
            <h2>Your Base64 Encode/Decode Data</h2>
            <textarea
              placeholder="Your Encoded Decoded Data"
              className="base-textarea"
              value={decode}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default Base64;