import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { wp, hp } from '../helpers/common'
import ScreenWrapper from '../components/ScreenWrapper'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'
import BackButton from '../components/BackButton'
import { StatusBar } from 'expo-status-bar'
import Input from '../components/Input'
import { useRouter } from 'expo-router'
import { useRef, useState } from 'react'
import Button from '../components/Button'
import { TouchableOpacity } from 'react-native'
import { supabase } from '../lib/supabase'


const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async() => {
    if(!emailRef.current || !passwordRef.current){
      Alert.alert("Warning: Empty fields make your feeds sad");
      return;
    }
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();

    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
  });
  setLoading(false);

  console.log('error:', error);
  if(error){
    Alert.alert("Error: " + error.message);
  }
  }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton />

        <View>
          <Text style={styles.welcomeText}>Hey Scrollstar!</Text>
          <Text style={styles.welcomeText}>Ready to roll?</Text>
        </View>

        <View style={styles.form}>
          <Text style={{fontSize: hp(1.6), color: theme.colors.text}}>
          Enter credentials to unlock the scrollverse
          </Text>
          <Input icon={<Icon name="mail" size={26} strokeWidth={1.6}/>} 
          placeholder="Enter your email"
          onChangeText={value=> emailRef.current = value}
          />

          <Input icon={<Icon name="lock" size={26} strokeWidth={1.6}/>} 
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={value=> passwordRef.current = value}
          />
          <Text style={styles.forgotPassword}>
            Forgot password?
          </Text>
          <Button 
          title="Login" 
          loading={loading}
          onPress={onSubmit}/>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push('signUp')}>
              <Text style={[styles.footerText, {fontWeight: theme.fonts.bold, color: theme.colors.primary}]}>
                Sign up
              </Text>
            </TouchableOpacity>
        </View>




      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  }
})