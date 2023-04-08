import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const [connected, setConnected] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleConnectWallet = () => {
    setConnected(true);
  };

  const handleDisconnectWallet = () => {
    setConnected(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const contents = useMemo(() => {
    if (connected) {
      return <Box sx={{
        p: 3,
        bgcolor: 'white',
        borderRadius: 3
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <p style={{color: '#158DE8', fontWeight: '600' }}>Account:</p>
          <p>0x56...c59435</p>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <p style={{color: '#158DE8', fontWeight: '600' }}>BabyDoge Balance:</p>
          <p>123,456,789</p>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <p style={{color: '#158DE8', fontWeight: '600' }}>BNB Balance:</p>
          <p>2.42134</p>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <p style={{color: '#158DE8', fontWeight: '600' }}>Send BNB:</p>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          
        </Box>
        <Box sx={{
          display: 'flex',
          mb: 1
        }}>
          <TextField
            id="standard-required"
            defaultValue="Hello World"
            variant="standard"
            style={{backgroundColor: '#EBEBEB', width: '100%'}}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          gap: 1,
          mb: 3
        }}>
          <TextField
            id="standard-required"
            defaultValue="0.432"
            variant="standard"
            style={{backgroundColor: '#EBEBEB'}}
          />
          <Button variant="contained"
          onClick={handleClickOpen}
          style={{textTransform: 'initial', width: '80px', backgroundColor: '#158DE8'}}>
            Send
          </Button>
          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>Receiver: </p>
              <p>Send Amount: </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>        </Box>
        <Button 
          variant="contained"
          onClick={handleDisconnectWallet}
          style={{textTransform: 'initial', width: '100%', backgroundColor: '#158DE8'}}
        >Disconnect Wallet</Button>
        
      </Box>
    }
    // if (loading) {
    //   return (
    //     <div className="flex flex-col items-center justify-center w-full">
    //       <p className="text-xl font-bold text-purple-700 my-4">
    //         Please open metamask to connect your wallet
    //       </p>
    //       <BeatLoader />
    //     </div>
    //   );
    // }

    const activate = async () => {
      // await activateBrowserWallet();
    };
    

    return (
      <Box sx={{
        p: 3,
        bgcolor: 'white',
        borderRadius: 3
      }}>
        <Button 
          variant="contained"
          onClick={handleConnectWallet}
          style={{textTransform: 'initial', width: '240px', backgroundColor: '#158DE8'}}
        >Connect Wallet</Button>
      </Box>
    );
  }, [connected, open]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#6A6A6A', fontSize: '14px', fontFamily: 'https://fonts.google.com/specimen/Poppins' }}>
      {contents}
    </Box>
  );
}

export default App;
