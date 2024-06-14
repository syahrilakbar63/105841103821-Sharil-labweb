import { View, Text } from "react-native";
import React from "react";

const App = () => {
  return (

    <View style={{
      flex: 1,
      flexDirection: "row"
    }}>
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    }}>

      <View style={{
        width: 140,
        height: 80, 
        backgroundColor: 'red',
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{
        color: "white",
        fontSize: 25,
      }}>
        SIGN IN
        </Text> 
      </View>
      </View>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        <View style={{
          width: 140,
          height: 80,
          backgroundColor: 'blue',
          borderRadius: 10,
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: "white",
            fontSize: 25,
          }}>
            SIGN UP
          </Text>

        </View>
        </View>
      </View>
  );
}

export default App;
