import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  const open = true;
  return (
    <Backdrop
      sx={{
        backgroundColor: '#ffffff13',
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: 'blur(0px)',
        position: '',
      }}
      open={open}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
