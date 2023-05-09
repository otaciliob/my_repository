import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import Button from '../components/Button'

const Login =()=>{
    <View>
        <View id='Logo'>
            <Image
                source='../assets/images/icon-vaccine.png'
            />
            <Text>My Health</Text>
        </View>
        <View>
            <Text>Controle as suas vacinas e fique seguro</Text>
        </View>
        <View id='form'>
            <Text>E-mail</Text><TextInput></TextInput>
            <Text>Senha</Text><TextInput></TextInput>
        </View>
        <Button text="Entrar"/>
        <Button text="Criar minha conta"/>
        <Button text="Esqueci minha senha"/>
    </View>
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Login