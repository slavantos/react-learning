import CryptoJS from 'crypto-js';

const secretPass = '&HqAX67%3P';

    const encryptData = (info) => {
        const data = encodeURIComponent(CryptoJS.AES.encrypt(
            JSON.stringify(info),
            secretPass
        ).toString());

        return data;
    };

    const decryptData = (info) => {
        const bytes = CryptoJS.AES.decrypt(decodeURIComponent(info), secretPass);
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        return data;
    };

export {encryptData, decryptData}