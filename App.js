import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, Image, TouchableHighlight, TextInput} from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  
  //FUNCTIONS
  const handlePress = () => console.log("Pressed");

  const Stack = createNativeStackNavigator();

  const verification = 1234;

  const checkCode = () => {if (this.state.VerificationNumber == verification) {
    console.log('Passed');
  }}

  //SCREENS
  const LoginScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>

      <Image style={styles.logo} source={require('./assets/apple.png')}></Image>

      <Text style={styles.logInText} numberOfLines={1}>Sign in to continue</Text>

      <TouchableOpacity style={styles.logInButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logInButton} onPress={()=> navigation.navigate('MobileNumberScreen')}>
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

  const MobileNumberScreen = ({ navigation, route }) => {
    const [number, onChangeNumber] = React.useState(null);
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Mobile</Text>
        <View styles={styles.container}></View>
        <Text style={styles.text}>Please enter a valid mobile number. We will send you a 4-digit code to verify your account</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.logInButton} onPress={()=> navigation.navigate('VerificationScreen')}>
      <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      </SafeAreaView>
    )
  }

  const VerificationScreen = ({navigation, route}) => {
    const [VerificationNumber, setVerificationNumber] = React.useState('');
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Enter Verification Code</Text>
        <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={VerificationNumber}
        onChangeText = {value => setVerificationNumber(value)}
        />
        <TouchableOpacity style={styles.logInButton} onPress={() => 
        {if (VerificationNumber == verification) {
          console.log('Passed');
          navigation.navigate('UserCreationScreen');
        }}}>
        <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  const UserCreationScreen = ({navigation, route}) => {
    return (    
    <SafeAreaView style={styles.container}>
      <Text>NEXT</Text>
    </SafeAreaView>
    )

  }

  //APP 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ title: 'Welcome' }}></Stack.Screen>
        <Stack.Screen name='MobileNumberScreen' component={MobileNumberScreen} options={{ title: 'Enter Mobile Number' }}></Stack.Screen>
        <Stack.Screen name='VerificationScreen' component={VerificationScreen} options={{ title: 'Verify Mobile Number' }}></Stack.Screen>
        <Stack.Screen name='UserCreationScreen' component={UserCreationScreen} options={{ title: 'Create User' }}></Stack.Screen>
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
  },

  input: {
    height: 40,
    width: 350,
    margin: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 215,
    marginBottom: 20,
  },

  text: {
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 15,
  }


});
