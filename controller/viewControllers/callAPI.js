const axios = require("axios");
const { urlencoded } = require("body-parser");

exports.callAPI = async function(url) {
    try {
        const result = await axios.get(`http://127.0.0.1:3000/api${url}`);
        return result;
    } catch (error) {
        console.log(error);
    }
}