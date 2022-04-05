import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '././Message.css';

function Message({message, username}) {
  const isUser = message.name === username;
  return (
  <>
    {/* <h4>{`${message.name}: ${message.message}`}</h4> */}
    <Card className={ isUser ? 'card__userMessage' : 'card__guestMessage' }>
      <CardContent style={{padding: '8px'}}>
        <Typography sx={{ fontSize: 14 }} color="text.primary">
        {`${message.name}: ${message.message}`}
        </Typography>
      </CardContent>
    </Card>
  </>
  )
}

export default Message