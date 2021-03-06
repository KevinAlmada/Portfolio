import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({title,img,description,url}) {
  return (
    <a target="_blank" rel="noreferrer" href={url}>
    <Card sx={{ maxWidth: 345,margin : "20px",'& .MuiCardContent-root':{backgroundColor:"#701a48"},'& .MuiTypography-root':{color:"#FEC260"} }}  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}
