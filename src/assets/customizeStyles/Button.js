import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const AddButton = styled(Button)(({
    color: '#fff',
    backgroundColor: '#3D77E9',
    boxShadow:'none',
    height: '56px',
    width: '100%',
    textTransform: 'capitalize',
    fontFamily:'Poppins',
    '&:hover':{
        backgroundColor: '#3D77E9',
    }
  }));