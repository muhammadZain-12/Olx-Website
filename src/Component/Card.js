import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard(prop) {
  return (
    <Card sx={{ maxWidth: 345,margin:"5px 5px" }}>
      <CardMedia
        component="img"
        height="230"
        image={prop.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prop.text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        
        
        <p className='para'>
            {prop.price}
        </p>

        </Typography>
      </CardContent>
      
    </Card>
  );
}
