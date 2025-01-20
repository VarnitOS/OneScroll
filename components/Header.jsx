import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { useRouter } from 'expo-router'
import { hp } from '../helpers/common'
import BackButton from './BackButton'

const Header = ({title, showBackButton= true, mb=10}) => {
    const router = useRouter();
  return (
    <View style={[styles.container, {marginBottom: mb}]}>
        {
            showBackButton && (
                <View style={styles.showbackButton}>
                    <BackButton router={router}/>
                </View>
            )
        }
      <Text style={styles.title}>{title || ""}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        gap: 10
    },
    title: {
        fontSize: hp(2.7),
        fontWeight: theme.fonts.semiBold,
        color: theme.colors.textDark
    },
    showbackButton: {
        position: 'absolute',
        left: 0
    }
})