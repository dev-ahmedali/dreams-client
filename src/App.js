import React, { useEffect } from 'react';
import { Container, AppBar, Grid, Typography, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from "./actions/Posts";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from "../src/styles.js";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Container maxWidth="lg">   
           <AppBar className={classes.appbar} position='static' color="inherit">
                <Typography className={classes.heading} variant='h2' align='center'>Dreams</Typography>
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