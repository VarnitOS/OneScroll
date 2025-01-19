import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { hp, wp } from '../helpers/common'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import { Pressable } from 'react-native'
import { useRouter } from 'expo-router'


const welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/welcome.png')} 
          style={styles.welcomeImage} 
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>OneScroll</Text>
          <Text style={styles.subtitle}>We've received your feed-back!</Text>
        </View>

        {/*footer*/}
        <View style={styles.footer}>
          <Button 
            title="Time to Join the Scroll Party!"
            buttonStyle={{marginHorizontal: wp(3)}}
            onPress={() => router.push('signUp')}
            
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.AccText}>Already have an account?</Text>
            <Pressable onPress={() => router.push('login')}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: hp(10),
  },
  title: {
    fontSize: wp(10),
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: wp(4.5),
    color: theme.colors.textLight,
    textAlign: 'center',
    marginTop: wp(1),
    fontStyle: 'italic'
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  footer: {
    position: 'absolute',
    bottom: hp(4),
    left: 0,
    right: 0,
    alignItems: 'stretch',
    paddingHorizontal: wp(5),
    gap: 30,
    width: '100%',
    paddingBottom: hp(2)
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(3)
  },
  loginText: {
    fontSize: hp(1.6),
    color: theme.colors.primaryDark,
    textAlign: 'center',
    fontWeight: theme.fonts.semiBold,
    textDecorationLine: 'underline'
    
  },
  AccText: {
    fontSize: hp(1.6),
    color: theme.colors.textLight,
    textAlign: 'center',
    fontStyle: 'italic'
  }
})
