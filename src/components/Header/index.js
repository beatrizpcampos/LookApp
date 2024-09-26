import { Alert, SafeAreaView } from 'react-native'
import { Box, Title, Touchable } from '../../components'
import {colors} from '../../../theme.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({ title }) => {
    return (
        <Box fluid height="100px" justify="center" border={`1px solid ${colors.muted}50`}>
            <SafeAreaView style={{ flexDirection: 'row'}}>
                <Touchable width="80px" justify="center" align="center" onPress={() => Alert('teste')}>
                   <Icon name="menu" size={20}/>
                </Touchable>
                <Box align="center" justify="center">
                <Title>{title}</Title>
                </Box>
                <Touchable width="80px"></Touchable>
            </SafeAreaView>
        </Box>
    )
}

export default Header