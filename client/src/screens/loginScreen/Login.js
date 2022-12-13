import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../auth/Authentication';
import {SvgXml} from 'react-native-svg';
import {facebookPic, googlePic} from '../../constants/Pictures';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Нэвтрэх нэр эсвэл майл хаяг"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Нууц үг"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login(email, password);
          }}>
          <Text style={styles.buttonText}>Нэвтрэх</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <SvgXml xml={facebookPic} />
          <Text style={styles.buttonText}>
            {'  '}
            FACEBOOK-ээр нэвтрэх
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <SvgXml xml={googlePic} />
          <Text style={styles.buttonText2}>
            {'  '}
            GOOGLE-ээр нэвтрэх
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text>Бүртгэл үүсгээгүй? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonTextRegist}>Бүртгүүлэх</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
  link: {
    color: '#DB4646',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 299,
    backgroundColor: '#ede8e8',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#991172',
    marginVertical: 9,
  },
  button: {
    width: 299,
    backgroundColor: '#DB4646',
    borderRadius: 10,
    marginVertical: 9,
    paddingVertical: 11,
  },
  button2: {
    width: 299,
    backgroundColor: '#2672CB',
    borderRadius: 10,
    marginVertical: 9,
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button3: {
    width: 299,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 9,
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonText2: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  buttonTextRegist: {
    fontSize: 15,
    fontWeight: '500',
    color: '#DB4646',
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    fontWeight: 'bold',
  },
});

export default LoginScreen;
