import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    FormHelperText,
  } from '@chakra-ui/react';
import { useState } from 'react';
import Axios from "axios";
  

  const ContactUsForm = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successStatus, setSuccessStatus] = useState('');
    const [color, setColor] = useState('red');

    // validate email address
    const checkEmail = (email) => {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return (true)
      }
        return (false)
    }
     
    // send email after submission
    const handleSubmit = () => {

      if(!email || !message){
        setSuccessStatus('Please fill the required fields.')
        return 
      } else {
        if (!checkEmail(email)){
          setSuccessStatus('Your email address is not valid.')
          return
        }
        setColor('grey');
        setSuccessStatus('Sending your message.')
      }
      let body = 'A visitor is trying to contact you\n'
      body += '\nMessage: ' + message +'\n';
      body += '\nEmail: ' + email +'\n';

      Axios.post("https://xyrontransport.azurewebsites.net/sendEmail", { email: "gkkpathirana@gmail.com", subject: "Contact Us", message: body, }).then(
        (response) => {
          if (response.status == 200){
            setColor('green');
            setSuccessStatus('We got your message.');
            setMessage('')
            setEmail('')
          } else {
            setSuccessStatus('Message was not sent.');
          }
        }
      ).catch((error) => {
        setSuccessStatus('An error occured while sending your message.');
      });

    }

    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('white', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '2xl' }}>
            How Can We Help You?
          </Heading>
          <FormControl id="email" isRequired="true">
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange = {(e) => setEmail(e.target.value)}
              isRequired="true"
              value={email}

            />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Input type="text" 
            onChange = {(e) => setMessage(e.target.value)}
            isRequired="true"
            value={message}
            />
            <FormHelperText color={color}>{successStatus}</FormHelperText>
          </FormControl>
          <Stack spacing={6}>
            <Button
            onClick={()=>handleSubmit()}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }

  export default ContactUsForm;
