import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AES.css';
import { AESencryption,AESGetencrypt, AESdecryption,deleteAesEncrypt } from './Api/CoreApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

function AES() {
  const [plain_text, setPlain_text] = useState('');
  const [encrypted_text, setEncrypted_text] = useState('');
  const [key, setKey] = useState('');
  const [open, setOpen] = useState(true)
  const [decode, setdecode] = useState('')
  const [res,setRes]=useState([])
  const handleEncrypt = async (e) => {
    e.preventDefault();
    // console.log("Encrypt button clicked");
    // console.log("Plain_text:", plain_text);
    // console.log("key:", key);
    const encrypted_text = await AESencryption({ 'plain_text': plain_text, 'key': key, 'user_id': localStorage.getItem('user_id') })
    console.log({ 'encrypted_text': encrypted_text })
    setEncrypted_text(encrypted_text.success ?? encrypted_text.error)
    handleget();
  };
  useEffect(() => {
    handleget();
  }, []);

  const handleget = async () => {

    const res = await AESGetencrypt({ 'user_id': localStorage.getItem('user_id') })
    setRes(res)
    console.log(res, 'res')
  };

  const handleDecrypt = async (e) => {
    e.preventDefault();
    // console.log("Decrypt button clicked");
    // console.log("Encrypted_text:", encrypted_text);
    // console.log("key:", key);
    const plain_text = await AESdecryption({ 'encrypted_text': encrypted_text, 'key': key, 'user_id': localStorage.getItem('user_id') })
    console.log({ 'plain_text': plain_text })
    setPlain_text(plain_text.success ?? plain_text.error)
    handleget();
  };

  const showResult = (id) => {
    setOpen(false)
    const filterData = res.find(o => o.id === id)
      setdecode(filterData)
  }
  const deleteAesEncryptData = async (id) => {
    const text = await deleteAesEncrypt(id)
    handleget();
  };

  function halfWordWithEllipsis(str) {
    const halfLength = Math.ceil(str.length / 2);
    const firstHalf = str.slice(0, halfLength);
    return firstHalf + '...';
  }
  

  return (
    <div className="AES-maindiv">
      <div className='AESsidebar'>
        <center><h2>AES Encryption Decryption</h2></center>
        <div className='AESNew-div'><button onClick={() => setOpen(true)} className='AESNew'><FontAwesomeIcon icon={faEdit} />  New</button></div>
        {res.map((i) => (
          <div className='HistorydeleteAES'>
            {/* <div onClick={() => showResult(i.id)} className='historynameAES'>{i.flag === 'Encryption' ? i.encode : i.decode}</div> */}
            <div onClick={() => showResult(i.id)} className='historynameAES'>{i.flag === 'Encryption' ? halfWordWithEllipsis(i.encode) : halfWordWithEllipsis(i.decode)}</div>
            <span className='Deleteicon-AES' onClick={() => deleteAesEncryptData(i.id)}>{'  '} <FontAwesomeIcon icon={faTrashAlt} style={{ marginRight: '5px' }} /></span>
            <br />
          </div>
        ))}
      </div>
      <div className="AES-container">

        {open
          ?

          <main className="AES-main-content">
            <header className="AES-header">
              <nav className="AES-navbar">
                <Link to="/encodedecode/Base64" className="AES-nav-link">Base64</Link>
                <Link to="/encodedecode/AES" className="AES-nav-link active">AES</Link>
              </nav>
            </header>
            <h1 className="AES-title">AES 128, 192, 256 Encryption/Decryption</h1>
            <form className="AES-form">
              <div className="AES-textarea-container">
                <textarea
                  placeholder="Enter Plaintext here"
                  value={plain_text}
                  onChange={(e) => setPlain_text(e.target.value)}
                  className="AES-textarea"
                />
                <textarea
                  placeholder="Enter EncryptedText here"
                  value={encrypted_text}
                  onChange={(e) => setEncrypted_text(e.target.value)}
                  className="AES-textarea"
                />
              </div>
              <div className="AES-input-container">
                <input
                  type="text"
                  placeholder="Enter Key here"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="AES-input"
                />
              </div>
              <div className="AES-button-container">
                <button onClick={handleEncrypt} className="AES-button-encode-button">Encrypt</button>
                <button onClick={handleDecrypt} className="AES-button-decode-button">Decrypt</button>
              </div>
            </form>
          </main>
          :
          <div className='AES-history-result'>
            <h2>Your AES Encryption/Decryption Data</h2>
            <div >
              <textarea
              placeholder="Your Encoded Decoded Data"
              className="base-textarea"
              value={decode.flag === 'Encryption' ? decode.decode : decode.encode}
              style={{margin:'10px'}}
            />
            <textarea
              placeholder="Your Key"
              className="base-textarea"
              value={decode.key}
              style={{margin:'10px'}}
            />
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default AES;

