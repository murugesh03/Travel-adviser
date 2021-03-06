import React from 'react'
import {CssBaseline,Grid} from '@mui/material';
import Header from './Components/Header'
import List from './Components/List'
import Map from './Components/Map'


function App() {
  return (
   <>
   <CssBaseline/>
   <Header/>
   <Grid container spacing={3} styles={{width:'100%'}}>
     <Grid item xs={12} md={4}>
       <List/>
     </Grid>
     <Grid item xs={12} md={8}>
       <Map/>
     </Grid>
   </Grid>
   </>
  );
}

export default App;
