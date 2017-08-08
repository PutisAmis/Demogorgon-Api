module.exports = {
    sendResponse: (req, res) =>{
        let response = {
            data: req.user? req.user: false,
            error: req.error? req.error: false
        };
        return res.send(response); 
    }

}