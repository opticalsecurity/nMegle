import { describe, test, expect } from '@jest/globals';
import crypto from 'crypto';

describe('Advanced Encryption Tests', () => {
  const algorithm = 'aes-256-cbc';
  const key = crypto.randomBytes(32); // 256-bit key for AES-256
  const iv = crypto.randomBytes(16); // Initialization vector for AES

  test('AES encryption and decryption with random key and IV', () => {
    const data = 'Sensitive data';

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    expect(decrypted).toBe(data);
  });

  test('RSA encryption and decryption', () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });

    const data = 'Sensitive data';
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(data));
    const decrypted = crypto.privateDecrypt(privateKey, encrypted);

    expect(decrypted.toString('utf8')).toBe(data);
  });

  test('RSA signing and verification', () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });

    const data = 'Sensitive data';
    const sign = crypto.createSign('SHA256');
    sign.update(data);
    sign.end();
    const signature = sign.sign(privateKey, 'hex');

    const verify = crypto.createVerify('SHA256');
    verify.update(data);
    verify.end();
    const isVerified = verify.verify(publicKey, signature, 'hex');

    expect(isVerified).toBe(true);
  });

  test('HMAC generation and verification', () => {
    const secret = crypto.randomBytes(32);
    const data = 'Sensitive data';

    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(data);
    const digest = hmac.digest('hex');

    const hmacVerify = crypto.createHmac('sha256', secret);
    hmacVerify.update(data);
    const digestVerify = hmacVerify.digest('hex');

    expect(digest).toBe(digestVerify);
  });

  test('PBKDF2 key derivation', () => {
    const password = 'strongpassword';
    const salt = crypto.randomBytes(16);
    const iterations = 100000;
    const keylen = 64; // Length of the derived key
    const digest = 'sha512';

    const derivedKey = crypto.pbkdf2Sync(
      password,
      salt,
      iterations,
      keylen,
      digest
    );

    expect(derivedKey).toBeDefined();
    expect(derivedKey.length).toBe(keylen);
  });
});
