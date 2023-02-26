import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: { id : {videoId}, snippet }}) => {

  return (
    <Card sx={{ width: { md: '280px', sm: '358px' , xs: '100%'},
                boxShadow: 'none', borderRadius: 0 }}>
        <Link to= {videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
               image = {snippet?.thumbnails?.high?.url}
               alt = {snippet?.title}
               sx ={{ width: {xs: '100%' , sm :'358px', md: '280px'}, height: 180}}   
            />
        </Link>

            <CardContent 
              sx={{
                backgroundColor: '#fff',
                height: '106px'}}>
              <Link to= {videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography varaint= "subtitle1" fontWeight="bold" color= "#0E5E6F">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
              </Link>  
              <Link to= {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography varaint= "subtitle2" fontWeight="bold" color= "#3A8891">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx = {{ fontSize: 12, color: '#3A8891', ml: '5px'}} />
                </Typography>
              </Link>   

            </CardContent>
        
    </Card>
  )
}

export default VideoCard