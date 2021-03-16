import React from 'react';
import { View, Text, Image, Linking } from 'react-native';  
import { Header, Icon, Button } from 'react-native-elements'; 
import { useNavigation} from '@react-navigation/native';
import styles from './styles';


const Detalhes = ({route}) => {

    const sendMessage = () => {
        const message = `Olá gostaria de uma pizza de ${item.name}`;
        const url = `whatsapp://send?text=${message}&phone=5516997319448`;
        Linking.openURL(url);
    }

    //const deleteProduct = () => {
        //try {
          //await AsyncStorage.removeItem('token');
          //navigation.goBack();
        //} catch (error) {
      //}
    //}

    const navigation = useNavigation();
    const item = route.params;
    return(
        <View>
            <Header>
                <Icon type='font-awesome' name='angle-left' color='green' size={25}
                  onPress={() => {navigation.goBack()}}
                />
                <Text style={styles.headerTitle}> {item.name}</Text>
            </Header>
            <View style={styles.content}>
                <Image  style={styles.img}
                   source={{
                   uri: item.img
                  }}
               />
            <Text style={styles.title}> {item.name}</Text>
            <Text> {item.desc} </Text>
            <Button 
                buttonStyle={styles.button}
                onPress={sendMessage}
                //onPress={navigation.goBack()}
                title=" Salvar " 
            />
            </View>
        </View>
    )

}

export default Detalhes;