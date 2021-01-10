import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function GridItem({
  imageUrl,
  title,
  subtitle,
  onClick
}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        onClick={onClick}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          style={{ paddingTop: '56.25%' }}
          image={imageUrl}
          title="Image title"
        />
        <CardContent style={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="subtitle2">
            {title}
          </Typography>
          <Typography variant="caption">{subtitle}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
