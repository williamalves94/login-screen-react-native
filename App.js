import React from 'react';
import { TextInput, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
        <Image source={require('./src/assets/logo.png')} />
      </View>

      <View style={styles.container}>
        <TextInput 
          placeholder='Email'
          autoCorrect={false}
          onChangeText={()=> {}}
        />

        <TextInput 
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={()=> {}}
        />

        <TouchableOpacity>
         <Text>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
         <Text>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  }
})