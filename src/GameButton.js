import React, { useEffect, useState } from 'react'; 
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
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

    const ModalBackground = styled(Paper)({
        background: '#424549',
        color: 'white',
        padding: "10px", 
        width: "45vw"
    });


    const [modalState, setModalState] = useState(false);
    const openModal = () => {
        setModalState(true);
    }
    const closeModal = () => {
        setModalState(false);
    }


    let betModalContents = (
        <ModalBackground>
            <Grid container justify="center" alignItems="center" alignContent="center">
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3">
                            Choose a team:
                    </Typography> 
                </Grid>
                <Grid item xs={6}>
                    <MyButton onClick={() => {
                        let betInstance = props.betIn;
                    }}>{props.home}</MyButton>
                </Grid>
                <Grid item xs={6}>
                    <MyButton onClick={() => {
                        let betInstance = props.betIn;
                    }}>{props.away}</MyButton>
                </Grid>
            </Grid>
        </ModalBackground>
    )

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
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {betModalContents}
            </Modal>
            
        </Grid>

        
    )
}

export default GameButton;