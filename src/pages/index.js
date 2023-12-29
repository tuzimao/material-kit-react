import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { TextField, IconButton, Paper, InputAdornment, SvgIcon} from '@mui/material';
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import PaperAirplaneIcon from '@heroicons/react/24/solid/PaperAirplaneIcon';


import React, { useState } from 'react';
import { blue, red } from "@mui/material/colors";

const now = new Date();

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, sender: 'user' }]);
      setCurrentMessage('');

      // Here you would typically send the message to your chatbot backend
      // and receive a response to add to the conversation.
      // For now, I'll just add a placeholder response.
      const botResponse = { text: 'Placeholder response from bot', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();  // 阻止默认的换行行为
      handleSendMessage();
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={12}>
            <Paper style={{ maxHeight: 400, overflow: 'auto' }}>
              {messages.map((message, index) => (
                <Box key={index} p={2} bgcolor={message.sender === 'bot' ? '#f5f5f5' : '#e3f2fd'}>
                  {message.text}
                </Box>
              ))}
            </Paper>
            <TextField
              fullWidth
              placeholder="Type your message here..."
              variant="outlined"
              multiline
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                      onClick={handleSendMessage}
                    >
                      <SvgIcon>
                         <PaperAirplaneIcon />
                      </SvgIcon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


const Page = () => {
  // Include your existing Head and DashboardLayout components here
  return (
    <>
      <Head>
        <title>Chat | Realestate</title>
      </Head>
      <ChatInterface />
    </>
  );

 
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
