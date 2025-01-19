import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../context/AuthContext'
import { supabase } from '../../lib/supabase'
import { Button } from 'react-native'
import { Alert } from 'react-native'

const Home = () => {

  const {user, setAuth} = useAuth();

  console.log('user:', user);

  const onLogout = async()=> {
    const {error} = await supabase.auth.signOut();
    if(error) {
      Alert.alert('error logging out:', error);
    }
  }
  return (
    <ScreenWrapper>
      <Text>home</Text>
      <Button title="logout" onPress={onLogout}/>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})