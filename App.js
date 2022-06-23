import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, Image, TouchableHighlight} from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  
  //FUNCTIONS
  const handlePress = () => console.log("Pressed");

  const Stack = createNativeStackNavigator();

  //SCREENS
  const LoginScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>

      <Image style={styles.logo} source={require('./assets/apple.png')}></Image>

      <Text style={styles.logInText} numberOfLines={1}>Sign in to continue</Text>

      <TouchableOpacity style={styles.logInButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logInButton} onPress={()=> navigation.navigate('SignUpScreen')}>
        <Text style={styles.buttonText}>Create An Account </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

      <View style={{flexDirection: 'row', alignItems: 'center', margin: 30}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{paddingHorizontal: 8, textAlign: 'center'}}>sign up with</Text>
          </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <TouchableHighlight onPress={handlePress}>
          <Image style={styles.signInWithContainer} source={require('./assets/facebook.png')} ></Image>
        </TouchableHighlight>

        <TouchableHighlight onPress={handlePress}>
          <Image style={styles.signInWithContainer} source={require('./assets/google.png')} ></Image>
        </TouchableHighlight>

        <TouchableHighlight onPress={handlePress}>
          <Image style={styles.signInWithContainer} source={require('./assets/twitter.png')} ></Image>
        </TouchableHighlight>
      </View>

    </SafeAreaView>
    )
  }

  const SignUpScreen = ({ navigation, route }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Text>HELLO</Text>
      </SafeAreaView>
    )
  }

  //APP RETURN
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ title: 'Welcome' }}></Stack.Screen>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ title: 'Create an Account' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

//CSS CODE
const styles = StyleSheet.create({
  //colors: electric pink (#FD297B), fiery rose (#FF5864), pastel red (#FF655B)
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logInButton: {
    alignItems: "center",
    backgroundColor: '#FF5864',
    padding: 10,
    borderRadius: 10,
    width: 300,
    height: 40,
    margin: 10,
    
  },

  logo: {
    width: 100, 
    height: 100,
    margin: 30,
    marginBottom: 70,
  },

  logInText: {
    fontWeight: 'bold',
    margin: 20,
    fontSize: 25,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,

  },

  signInWithContainer:{
    width: 55,
    height: 55,
    borderRadius: 10,
    margin: 20,
  }


});
