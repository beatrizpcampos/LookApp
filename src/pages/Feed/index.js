import { Box, Text } from '../../components'
import Header from '../../components/Header'
import StoryList from '../../components/Story/list'

const Feed = () => {
    return (
        <Box background="light" >
            <Header title={'Explore'}/>
            <StoryList/>
        </Box>
    )
}

export default Feed