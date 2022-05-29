
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export  const Message = (props) => {
    return (

            <ListItem>

            <ListItemText primary={props.name} secondary={props.author}>
            </ListItemText>


</ListItem>
   )
}