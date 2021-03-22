import React from 'react';
import { View, Text } from 'react-native';


const Info = ({valor, styles}) => {
    return(
        <View>
            <Text style={styles}>Informações - {valor ? valor : 'Rita Lee'}</Text>
        </View>
    );
}

export default Info;