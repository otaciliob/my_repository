//importações
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import { useState } from 'react'

//definição do componente
const App = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <View style={estilos.body}>
      <View style={estilos.header}>
        <Image 
        style={estilos.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} />
        <Text style={estilos.headerTitle}>Happy</Text>
      </View>

      <View style={estilos.main}>
        <Text style={estilos.mainTitle}>Welcome</Text>
        <TextInput
          style={estilos.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={estilos.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={estilos.button}>
          <Text style={estilos.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={estilos.secondaryButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

      </View>

      <View style={estilos.footer}>
        <Text style={estilos.secondaryButtonText}>Does not have an account?</Text>
        <TouchableOpacity style={estilos.button}>
          <Text style={estilos.buttonText}>CREATE</Text>
        </TouchableOpacity>

      </View>  
    </View>
  )
}
const estilos = StyleSheet.create({
  body: {
    backgroundColor: '#b676ea',
    height: '100%',
    flex: 2
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1
  },
  image: {
    height: 100,
    width: 100,
  },
  input: {
    fontSize: 20,
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 5,
  },
  headerTitle: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: 500,
  },
  mainTitle: {
    fontSize: 36,
    color: '#FFFFFF'
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 130,
    marginTop: 10,
    borderRadius: 15,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#b676ea',
    fontSize: 20,
    alignSelf: 'center'
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    alignSelf: 'center'
  }
})

export default App