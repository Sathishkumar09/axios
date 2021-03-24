const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());



const findDistance = async (req, res) => {

    const s_lat = req.body.s_lat;
    const s_lng = req.body.s_lng;
    const d_lat = req.body.d_lat;
    const d_lng = req.body.d_lng;

  const dist = axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" +s_lat+","+s_lng+"&destinations="+d_lat+","+d_lng+"&key=AIzaSyDop9-AriW2sANSeThYlqixD0yHR8UL4FY ")


 .then((response) =>{


  

   res.json({results:response.data})
   console.log(response)
 })

}



app.post('/distance', findDistance);






app.listen(9090, () => {
    console.log('App Running On Port 9090');
});
