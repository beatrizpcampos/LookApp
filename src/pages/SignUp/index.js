import { Box, Title, Text, Spacer, Input, Button } from '../../components/index'
import { StatusBar } from 'react-native'

const SignUp = () => {
    return (
        <>
        <StatusBar barStyle={'dark-content'}/>
        <Box background="light" justify="center" align="center" hasPadding>
            <Title bold>Create new account.</Title>
            <Spacer/>
            <Text>Enter your details below:</Text>

            <Spacer size="50px"/>

            <Input placeholder='Name'/>
            <Spacer/>
            <Input placeholder='Email'/>
            <Spacer/>
            <Input secureTextEntry placeholder='Password'/>

            <Spacer size="50px"/>
            <Button block>
              <Text color="light">Create new account</Text>
            </Button>
            <Spacer/>
            <Text underline>Back to signIn</Text>
        </Box>
        </>
    )
}

export default SignUp