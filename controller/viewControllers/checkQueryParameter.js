function checkQueryParameter(req) {
    let extraUrl = "";
    
    if(req.query.sort && req.query.page) {
        extraUrl = `?sort=${req.query.sort}&page=${req.query.page}`;
    } else if(req.query.sort) {
        extraUrl = `?sort=${req.query.sort}`;
    } else if(req.query.page) {
        extraUrl = `?page=${req.query.page}`;
    }
    return extraUrl;
}

module.exports = checkQueryParameter;