import React, { useEffect, useState } from 'react'; 
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const GameButton = props => {
    const MyButton = styled(Button)({
        background: '#7289DA',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '30px 30px',
    });

    return (
        <Grid container>
            <Grid item>
                <MyButton> {props.home} vs. {props.away} </MyButton>
            </Grid>
        </Grid>

        
    )

}

export default GameButton;