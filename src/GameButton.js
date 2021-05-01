import React, { useEffect, useState } from 'react'; 
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';


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

    const [modalState, setModalState] = useState(false);
    const openModal = () => {
        setModalState(true);
    }
    const closeModal = () => {
        setModalState(false);
    }

    return (
        <Grid container>
            <Grid item>
                <MyButton onClick={()=>{
                    openModal();
                }}> {props.home} vs. {props.away} </MyButton>
            </Grid>
            <Modal 
                    open={modalState}
                    onClose={closeModal}
                >
                    <Typography variant="h1" component="h1">
                        Choose a team:
                    </Typography>   
                </Modal>
        </Grid>

        
    )

}

export default GameButton;