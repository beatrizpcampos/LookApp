import { StatusBar } from 'react-native'
import { Box, Title, Text, Spacer, Input, Button } from '../../components/index'
import Icon from 'react-native-vector-icons/FontAwesome';

const SignIn = () => {
    return (
        <>
        <StatusBar barStyle={'dark-content'}/>
        <Box background="light" justify="center" align="center" hasPadding>
            <Title bold variant="big">LOOKAPP</Title>
            
            <Icon name="star" size={50} color="#000"/>
            <Spacer size="50px"/>
            <Title>SignIn my account.</Title>

            <Spacer size="50px"/>

            <Input placeholder='Email'/>
            <Spacer/>
            <Input secureTextEntry placeholder='Password'/>

            <Spacer size="50px"/>
            <Button block>
              <Text color="light">SignIn into my account</Text>
            </Button>
            <Spacer/>
            <Text underline>Create new account</Text>
        </Box>
        </>
    )
}

export default SignIn