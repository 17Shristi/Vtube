import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './index';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {

  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  console.log({channelDetail , videos});
  

 

  useEffect(()=> {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setchannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setvideos(data?.items))
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style = {{
          background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
          zIndex :10,
          height: '300px'  
        }} />
        
        <ChannelCard channelDetail={channelDetail} marginTop = "-110px" /> 
      </Box>

      <Box display="flex" p = "2">
         <Box sx = {{mr: {sm: '100px'}}} />
            <Videos videos={videos} />
       
      </Box>

    </Box>
     
  )
}

export default ChannelDetail