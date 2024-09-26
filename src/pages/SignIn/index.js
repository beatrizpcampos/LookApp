import { StatusBar } from 'react-native'
import { Box, Title, Text, Spacer, Input, Button } from '../../components/index'

const SignIn = () => {
    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <Box background="light" justify="center" align="center" hasPadding>
                <Title bold variant="big">LOOKAPP</Title>

                <Spacer size="50px" />
                <Title>SignIn my account.</Title>

                <Spacer size="50px" />

                <Input placeholder='Email' />
                <Spacer />
                <Input secureTextEntry placeholder='Password' />

                <Spacer size="50px" />
                <Button block>
                    <Text color="light">SignIn into my account</Text>
                </Button>
                <Spacer />
                <Text underline>Create new account</Text>
            </Box>
        </>
    )
}

export default SignIn