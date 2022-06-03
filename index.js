const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 
/*
Aes256 algorithm uses 
- 32 byte (256 bits) for security key (SecuritykeyString)
- 16 bye (128 bits) for initial vector (initVectorString)

You can check other Algorithms here:
https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/
*/
const initVectorString = "1234567890zxcvbn"; //16 characters, 1 character = 1 byte
const SecuritykeyString = "1234567890zxcvbn1234567890zxcvbn"; //32 characters, 1 character = 1 byte
const initVector = Buffer.from(initVectorString, "utf-8");
const Securitykey = Buffer.from(SecuritykeyString, "utf-8");

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  let encryptedData = cipher.update(text, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
}
function decrypt(text) {
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  let decryptedData = decipher.update(text, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
}


// example
const x = "This is an example!"
const y = encrypt(x)
const z = decrypt(y)
console.log(x)
console.log(y, " <- encrypted")
console.log(z, " <- decrypted")