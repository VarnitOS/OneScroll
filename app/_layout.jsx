import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { AuthProvider } from '../context/AuthContext'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { useRouter } from 'expo-router'
import { getUserData } from '../services/userServices'

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}



const MainLayout = () => {
    const {setAuth, setUserData} = useAuth();
    const router = useRouter();


    useEffect(()=> {
        supabase.auth.onAuthStateChange((_event, session) => {
            console.log('session user:', session?.user?.id);

            if(session) {
                setAuth(session?.user);
                updateUserData(session?.user);
                router.replace('/home');
            } else {
                setAuth(null);
                router.replace('/welcome');
            }
          })
    }, [])

    const updateUserData = async(user) => {
        let res = await getUserData(user?.id);
        if(res.success) setUserData(res.data);
    }

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  )
}

export default _layout