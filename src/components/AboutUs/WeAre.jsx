import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    MdDirectionsTransit
  } from 'react-icons/md';
  import {
    GiHealthNormal,
    GiSatelliteCommunication
  } from 'react-icons/gi';
  import { ReactElement } from 'react';
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container marginTop={'100px'} maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={700}
              fontSize={'m'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About Us
            </Text>
            <Heading>A Social Inquiry Chatbot</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Xyron is a NLP based social inquiry chatbot. It was developed by three undergradutes at 
              University of Moratuwa, Sri Lanka. Xyron can understand your questions regarding the following three public service domains 
              and help you get answers. 
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={GiHealthNormal} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Healthcare '}
              />
              <Feature
                icon={<Icon as={GiSatelliteCommunication} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Telecommunication'}
              />
              <Feature
                icon={
                  <Icon as={MdDirectionsTransit} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Public Transportation'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                // '../aboutUs.jpg'
                'https://spectrm.io/wp-content/uploads/2020/08/chatbot-marketing-illustration.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }