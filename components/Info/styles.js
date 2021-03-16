import { StyleSheet } from 'react-native';


const Info = ({valor, styles}) => {
    return(
        <View>
            <Text style={styles}>Informações - {valor ? valor : 'Up Up'}</Text>
        </View>
    );
}

export default Info;