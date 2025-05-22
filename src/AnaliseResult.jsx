import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './AnaliseResult.styles';

const AnaliseResult = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Вернуться на главную</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AnaliseResult; 