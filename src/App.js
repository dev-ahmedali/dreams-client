import React from 'react';
import { Container, AppBar, Grid, Typography, Grow } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
const App = () => {
    return (
        <Container maxWidth="lg">   
           <AppBar position='static' color="inherit">
                <Typography variant='h2' align='center'>Dreams</Typography>
           </AppBar>
           <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                         </Grid>
                    </Grid>
                </Container>
           </Grow>
        </Container>
    )
}

export default App;