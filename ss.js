const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());



const findDistance = async (req,res) => {


axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=13.0827,80.2707&destinations=9.9252,78.1198&key=AIzaSyAuxmmUPDIXgiw84E9AX7bbbdFzkd0xd50")
.then((response) => {
    res.json({ result:response.data });
})



}



app.get('/dist', findDistance);






app.listen(9090, () => {
    console.log('App Running On Port 9090');
});
