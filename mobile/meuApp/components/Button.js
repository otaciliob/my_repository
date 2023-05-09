const { Touchable, TouchableOpacity } = require("react-native/types")

const Button = (props)=>{
    return(
        <TouchableOpacity>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}