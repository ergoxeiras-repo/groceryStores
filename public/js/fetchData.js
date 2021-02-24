const axios = require("axios");

exports.fetchData = async function(url) {
    try {
        const result = await axios.get(url);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}