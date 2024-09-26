import { ScrollView } from 'react-native'
import { Box, Text, ScrollView } from '../../components'

const StoryList = () => {
    return (
        <Box fluid>
            <Box row fluid height="60px" justify="space-between" hasPadding>
                <Text bold color="dark">Stories</Text>
                <Text bold color="danger">Show All</Text>
            </Box>
            <ScrollView horizontal>
                {Array.from(Array(10))?.map(item => (
                    <Text>funcionou</Text>
                ))}
            </ScrollView>
        </Box>
    )
}

export default StoryList