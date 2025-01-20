import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { theme } from '../constants/theme'
import { hp, wp } from '../helpers/common'
import { getUserImageSrc } from "../services/imageService"

const Avatar = ({
    uri,
    size = hp(4.5),
    rounded = theme.radius.md,
    style = {}
}) => {
  const borderRadius = typeof rounded === 'number' ? rounded : theme.radius.md

  return (
    <Image
        source={getUserImageSrc(uri)}
        style={[styles.avatar, {width: size, height: size, borderRadius: borderRadius}, style]}
        contentFit="cover"
        transition={100}
        cachePolicy="memory"
    />
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatar: {
        borderCurve: 'continuous',
        borderColor: theme.colors.darkLight,
        borderWidth: 1
    }
})