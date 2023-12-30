import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Card, CardContent, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { TextField, IconButton, Paper, InputAdornment, SvgIcon, Avatar,Button,Popover, CardActions} from '@mui/material';
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import PaperAirplaneIcon from '@heroicons/react/24/solid/PaperAirplaneIcon';
import PencilSquareIcon from '@heroicons/react/24/solid/PencilSquareIcon';
import HandThumbUp from '@heroicons/react/20/solid/HandThumbUpIcon';
import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";

import { usePopover } from "src/hooks/use-popover";


import React, { useState } from 'react';
import { blue, red } from "@mui/material/colors";
import { borderBottom } from "@mui/system";

const now = new Date();

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const { anchorRef, open, handleOpen, handleClose } = usePopover();

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
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#dae9ff3f', borderRadius: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3, borderRadius: '16px 16px 0 0', width: '90%', margin: 'auto' }}>
        {/* 头像居中的容器 */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Avatar src="/assets/avatars/avatar-anika-visser.png" alt="User" />
          <Box sx={{ mx: 0.3 }}> {/* 增加水平间距 */}
          </Box>
          <Avatar src="/assets/avatars/avatar-marcus-finn.png" alt="AI" />
        </Box>

        {/* 功能图标按钮 */}
        <IconButton onClick={handleOpen} ref={anchorRef} sx={{ '&:hover': { color: "#4338CA" } }} >
        <SvgIcon >
          <PencilSquareIcon  />
        </SvgIcon>
      </IconButton>

      {/* 弹出菜单 */}
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Button onClick={() => {/* 处理重置聊天逻辑 */}}>Reset Chat</Button>
          <Button onClick={() => {/* 处理保存逻辑 */}}>Save Chat</Button>
        </Box>
      </Popover>
      </Box>

      <Box sx={{ overflow: 'auto', flexGrow: 1, width: '90%', margin: 'auto', marginBottom:'5px', '&::-webkit-scrollbar': { width: '5px', height: '5px' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'grey', borderRadius: '10px' }, '&::-webkit-scrollbar-track': { backgroundColor: '#dae9ff3f', borderRadius: '10px' } }}>
        <Container style={{ maxHeight: 400 }}>
          {messages.map((message, index) => (
            message.sender === 'bot' ?
              <Card key={index} sx={{ my: 2, backgroundColor: '#ffffff' }}>
                <CardContent>
                  {message.text}
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={() => {/* 处理点赞逻辑 */}} size="mini"sx={{ '&:hover': { color: "#4338CA" } }} >
                    <SvgIcon>
                      <HandThumbUp />
                    </SvgIcon>
                  </IconButton>
                  <IconButton onClick={() => {/* 处理重新生成聊天逻辑 */}} size="mini"sx={{ '&:hover': { color: "#4338CA" } }}>
                    <SvgIcon>
                      <ArrowPathIcon />
                    </SvgIcon>
                  </IconButton>
                </CardActions>
              </Card> :
              <Box key={index} p={2} sx={{  my: 2 }}>
                {message.text}
              </Box>
          ))}
        </Container>
      </Box>
  
      <Box sx={{ mt: 'auto', width: '90%', margin:'auto',marginBottom: '20px'}}>
        <Card>
          <CardContent sx={{ backgroundColor: '#dae9ff3f' }}>
            <TextField
              fullWidth
              placeholder="Type your message here..."
              variant="outlined"
              multiline
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSendMessage} sx={{ '&:hover': { color: "#4338CA" } }}>
                      <SvgIcon>
                        <PaperAirplaneIcon />
                      </SvgIcon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </CardContent>
        </Card>
      </Box>
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
