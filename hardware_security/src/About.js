import React from 'react'
import './About.css'
import Question from './Image/questionmark.png';

function About() {
  return (
    <div className='about-main'>
      <div className='about-div'>
        <div className='about-top'>
          <img src={Question} alt='question' className='about-question-img' />
          <h2>About Us</h2>
        </div>
        <div className='about-details'>
          <p>Welcome to Encode Decode Hardware Security, your one-stop solution for all your encoding and decoding needs. Our platform specializes in providing advanced encryption and decryption services using AES (Advanced Encryption Standard) and Base64 algorithms, ensuring your data's security and integrity.</p>
          <h2>How It Works</h2>
          <p>Our platform provides an easy-to-use interface for all your encoding and decoding needs. Simply choose the type of encoding or decoding, enter your data, and get the results instantly.</p>
          <h2>Our Mission</h2>
          <p>At Encode Decode Hardware Security, our mission is to deliver robust and reliable encryption services to help protect your sensitive information. We aim to make encryption accessible to everyone, whether you're a developer, a security professional, or just someone looking to secure personal data.</p>
          <h2>Encyption</h2>
          <p>Encryption is the process of converting plaintext (unencrypted data) into ciphertext (encrypted data) using a secret key. The key is used to transform the data in a way that makes it unreadable to anyone who does not have access to the key. When the recipient receives the encrypted data, they can decrypt it using the same key to retrieve the original plaintext message.</p>
          <br />
          <h2>Decryption</h2>
          <p>Decryption is the process of converting ciphertext (encrypted data) into plaintext (unencrypted data) using a secret key. The key is used to reverse the transformation that was applied to the data during the encryption process, making it readable again. Decryption is the reverse process of encryption, and it is used to retrieve the original plaintext message from an encrypted message. Decryption is typically only possible for the intended recipient of the message, as they have access to the secret key that is needed to decrypt the message.</p>
          <br />
          <h1>Glossary of Terms and Acronyms</h1>
          <p><b>The following definitions are used throughout this standard: </b></p>
          <table>
            <tr><td>AES:</td><td>Advanced Encryption Standard</td></tr>
            <tr><td>Affine Transformation:</td><td>A transformation consisting of multiplication by a matrix followed by the addition of a vector.</td></tr>
            <tr><td>Array:</td><td>An enumerated collection of identical entities (e.g., an array of bytes).</td></tr>
            <tr><td>Bit:</td><td>A binary digit having a value of 0 or 1.</td></tr>
            <tr><td>Block:</td><td>Sequence of binary bits that comprise the input, output, State, and Round Key. The length of a sequence is the number of bits it contains.Blocks are also interpreted as arrays of bytes.</td></tr>
            <tr><td>Byte:</td><td>A group of eight bits that is treated either as a single entity or as an array of 8 individual bits.</td></tr>
            <tr><td>Cipher:</td><td>Series of transformations that converts plaintext to ciphertext using the Cipher Key.</td></tr>
            <tr><td>Cipher Key:</td><td>Secret, cryptographic key that is used by the Key Expansion routine to generate a set of Round Keys; can be pictured as a rectangular array of bytes, having four rows and Nk columns.</td></tr>
            <tr><td>Ciphertext:</td><td>Data output from the Cipher or input to the Inverse Cipher.</td></tr>
            <tr><td>Inverse Cipher:</td><td>Series of transformations that converts ciphertext to plaintext using the Cipher Key.</td></tr>
            <tr><td>Key Expansion:</td><td>Routine used to generate a series of Round Keys from the Cipher Key.</td></tr>
            <tr><td>Plaintext:</td><td>Data input to the Cipher or output from the Inverse Cipher.</td></tr>
            <tr><td>Rijndael:</td><td>Cryptographic algorithm specified in this Advanced Encryption Standard (AES).</td></tr>
            <tr><td>Round Key:</td><td>Round keys are values derived from the Cipher Key using the Key Expansion routine; they are applied to the State in the Cipher and Inverse Cipher</td></tr>
            <tr><td>State:</td><td>Intermediate Cipher result that can be pictured as a rectangular array of bytes, having four rows and Nb columns.</td></tr>
            <tr><td>S-box:</td><td>Non-linear substitution table used in several byte substitution transformations and in the Key Expansion routine to perform a one-for-one substitution of a byte val</td></tr>
            <tr><td>Word:</td><td>A group of 32 bits that is treated either as a single entity or as an array of 4 bytes.</td></tr>
          </table>

          <br />
          <h1>AES(Advance Encryption Standard)</h1>
          <p>Advanced Encryption Standard (AES) is a specification for the encryption of electronic data established by the U.S National Institute of Standards and Technology (NIST) in 2001. AES is widely used today as it is a much stronger than DES and triple DES despite being harder to implement.
            <br /><b>Points to remember</b>
            <br />
            <li>AES is a block cipher.</li>
            <li>The key size can be 128/192/256 bits.</li>
            <li>Encrypts data in blocks of 128 bits each. </li></p>
            <p>That means it takes 128 bits as input and outputs 128 bits of encrypted cipher text as output. AES relies on substitution-permutation network principle which means it is performed using a series of linked operations which involves replacing and shuffling of the input data.</p>
            <h1>Base64 Encoding and Decoding</h1>
            <p1>At Encode Decode Hardware Security, our Base64 encoding and decoding services make it easy for you to handle binary data in text-based formats. Whether you're transmitting data, embedding assets, or ensuring compatibility, our platform provides a reliable solution for all your Base64 needs.A method to encode binary data into an ASCII string format, commonly used for encoding data in URLs, emails, and other text-based formats.</p1>
            <p><b>How Base64 Works</b></p>
            <p>The Base64 encoding process converts binary data into a set of 64 different ASCII characters, ensuring that the data remains intact during transmission or storage. Here's how it works:</p>
            <li><b>Conversion:</b> Binary data is divided into 6-bit groups, each of which is then mapped to a corresponding Base64 character.</li>
            <li><b>Decoding:</b> The process is reversed during decoding, where each Base64 character is converted back into its original binary form.</li>
            <li><b>Padding:</b> If the binary data's length is not a multiple of 3 bytes, padding characters (`=`) are added to the encoded string to ensure it is properly formatted.</li>
            <p><b>Advantages of Base64</b></p>
            <li><b>Compatibility:</b> Base64 encoding ensures that binary data can be handled by systems that only support text, improving compatibility across different platforms and protocols.</li>
            <li><b>Safety:</b> By encoding binary data into a text format, Base64 helps prevent data corruption that can occur during transmission or storage.</li>
            <li><b>Simplicity:</b> The encoding and decoding processes are straightforward, making Base64 a practical solution for many applications.</li>
            <h2>Why Choose Us?</h2>
            <p>
            <li><b>Security:</b> Our platform ensures that your data is encrypted and decrypted using industry-standard algorithms, providing top-tier security.</li>
            <li><b>Ease of Use:</b>Ease of Use: With a user-friendly interface, our website makes encryption and decryption simple, even for those with limited technical knowledge.</li>
            <li><b>Speed:</b> Experience fast and efficient encoding and decoding processes, saving you time and effort.</li>
            <li><b>Support:</b> Our dedicated support team is here to help you with any questions or issues you may encounter.</li>
            </p>
            <h2>Safe and secure</h2>
            <p>All communications with our servers come through secure SSL encrypted connections (https). We delete uploaded files from our servers immediately after being processed and the resulting downloadable file is deleted right after the first download attempt or 15 minutes of inactivity (whichever is shorter). We do not keep or inspect the contents of the submitted data or uploaded files in any way. Read our privacy policy below for more details.</p>
            <h2>Our Commitment</h2>
            <p>We are committed to continuously improving our services and staying up-to-date with the latest advancements in encryption technology. Your data security is our top priority, and we strive to provide you with the best possible tools to protect it.</p>
        </div>
      </div><br/><br/><br/>
    </div>
  )
}

export default About

