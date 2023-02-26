import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, HomePage, VideoDetail, ChannelDetail, SearchFeed} from './components';


const App = () =>  (
    <BrowserRouter>
        <Box sx = {{ backgroundColor: '#0E5E6F'}}>
            <Navbar />
            <Routes>
                <Route path="/" exact element = {<HomePage />} />
                <Route path="/video/:id" element = {<VideoDetail />} />
                <Route path="/channel/:id" element = {<ChannelDetail />} />
                <Route path="/search/:searchTerm" element = {<SearchFeed />}  />
            </Routes>
        </Box>
    </BrowserRouter>
  );


export default App