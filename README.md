# NodeJS Encryption & Decryption using Crypto

This repo contain funtions to encrypt and decrypt any message, using [crypto](https://nodejs.org/api/crypto.html)

### Usage

1. Use encrypt(text) to encrypt any text.
2. Use decrypt(text) to decrypt any text.

!Note: Change initVectorString and SecuritykeyString to a secured one.

Using this to store encrypted password is not recommended, since it can be decrypted. For password usage, I recommend you to use [bcrypt](https://www.npmjs.com/package/bcrypt), since it's hashing your password (1 way encryption).

