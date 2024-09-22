import { Box, Button, Spacer, Text, Title } from '../../components'

const Home = () => {
    return (
        <Box justify="center" hasPadding align="center" background="dark">
            <Box align="center" fluid justify="center">
                <Title color="light" variante="big" bold>
                LOOKAPP
                </Title>
                <Spacer />
                <Text align="center" spacing="0px 40px">
                    Stay on top of the fashion world and buy your favorite looks.
                </Text>
            </Box>

            <Box align="center" fluid justify="flex-end">
                <Button block>
                    <Text color="light">SigIn my account</Text>
                </Button>
                <Spacer size="20px" />
                <Text underline color="light" >
                    Create new account
                </Text>
                <Spacer size="70px"/>
            </Box>
        </Box>
    )
}

export default Home