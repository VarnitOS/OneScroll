import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'
import Loading from './Loading'

const Button = ({
    buttonStyle,
    textStyle,
    title,
    onPress=()=>{},
    loading=false,
    hasShadow=true,
}) => {
    const shadowStyle = {
        shadowColor: theme.colors.dark,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4
    }
    if(loading) {
        return (
            <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}>
                <Loading />
            </View>
        )
    }


  return (
    <Pressable 
    onPress={onPress}
     style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
     </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        borderRadius: theme.radius.xl,
        alignItems: 'center',
        justifyContent: 'center',
        borderCurve: 'continuous'
    },
    text: {
        color: theme.colors.white,
        fontSize: hp(2.5),
        fontWeight: theme.fonts.bold
    },


})