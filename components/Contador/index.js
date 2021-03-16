import React, { useState } from 'react'; // hooks
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import styles from '../pages/Home/styles';
import styles from './styles';


const Contador = () => {

    const [valor, setValor] = useState(0);

    const somaUm = () => {
       setValor(valor+1);
    }

    const tiraUm = () => {
        setValor(valor-1);
    }
    
    return(
        <View> 
            <Text style={styles.valor}>
                {valor}
            </Text>
            <TouchableOpacity onPress={ ()=>{somaUm() } }>
                <Text style={styles.botao}>+1</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={ ()=>{tiraUm() } }>
                <Text style={styles.botao}>-1</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Contador;   