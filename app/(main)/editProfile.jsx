import { StyleSheet, View, TouchableOpacity, ScrollView, Text, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { theme } from '../../constants/theme'
import { wp, hp } from '../../helpers/common'
import Header from '../../components/Header'
import { useAuth } from '../../context/AuthContext'
import Icon from '../../assets/icons'
import { getUserImageSrc } from '../../services/imageService'
import { Image } from 'expo-image'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { updateUser } from '../../services/userServices'
import { useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'



const EditProfile = () => {
  const { user: currentUser, setUserData } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    image: "",
    bio: "",
    phoneNumber: "",
    address: ""
  });

  useEffect(() => {
    if(currentUser) {
      setUser({
        name: currentUser.name || "",
        image: currentUser.image || null,  
        bio: currentUser.bio || "",
        phoneNumber: currentUser.phoneNumber || "",
        address: currentUser.address || ""
      });
    }
  }, [currentUser]);


  const onPickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    });

    if(result.canceled) return;

    setUser({...user, image: result.assets[0]});
  }

  const onSubmit =  async () => {
    let userData = {...user};
    let {name, phoneNumber, address, image, bio} = userData;

    if(!name || !phoneNumber || !address || !bio || !image) {
      Alert.alert("Oops! Your profile's feeling a bit lonely - give those empty fields some love! 🤗");
      return;
    }

    setLoading(true);

    if(typeof image === 'object') {
        
    }
    //UpdateUser
    
    const res = await updateUser(currentUser?.id, userData);
    setLoading(false);

    if(res.success) {
        setUserData({...currentUser, ...userData});
        router.back();
    }


}

  let imageSource = user.image && typeof user.image === 'object' ? user.image : getUserImageSrc(user.image);


  return (
    <ScreenWrapper bg='white'>
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <Header title='Edit Profile' />

                <View style={styles.form}>
                    <View style={styles.avatarContainer}>
                        <Image source={imageSource} style={styles.avatar} />  
                        <TouchableOpacity 
                            style={styles.cameraIcon}
                            onPress={onPickImage}>
                            <Icon name="camera" size={20} strokeWidth={2.5} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: hp(1.5),
                                  color: theme.colors.text}}>
                        Hey scroll master! Fill in these fields to unlock your personalized feed fusion 🔓
                    </Text>
                    <Input
                        icon={<Icon name="user" size={20} color={theme.colors.text} />}
                        placeholder='Enter your name'
                        value={user.name}
                        onChangeText={value => setUser({...user, name: value})}
                    /> 
                    <Input
                        icon={<Icon name="call" size={20} color={theme.colors.text} />}
                        placeholder='Enter your phone number'
                        value={user.phoneNumber}
                        onChangeText={value => setUser({...user, phoneNumber: value})}
                    />  
                    <Input
                        icon={<Icon name="location" size={20} color={theme.colors.text} />}
                        placeholder='Enter your address'
                        value={user.address}
                        onChangeText={value => setUser({...user, address: value})}
                    />  
                    <Input
                        placeholder='Enter your bio'
                        value={user.bio}
                        containerStyle={styles.bio}
                        multiline={true}
                        onChangeText={value => setUser({...user, bio: value})}
                    />  

                    <Button 
                        title="Save" 
                        loading={loading}
                        onPress={onSubmit}/>
                </View>
            </ScrollView>
        </View> 
    </ScreenWrapper>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4)
  },
  avatarContainer: {
    height: hp(14),
    width: hp(14),
    alignSelf: 'center'
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: theme.radius.xxl * 1.8,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: theme.colors.darkLight
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    padding: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    shadowColor: theme.colors.textLight,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7
  },
  form: {
    gap: 18,
    marginTop: 20
  },
  input: {
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: 'continuous',
    padding: 17,
    paddingHorizontal: 20,
    gap: 15
  },
  bio: {
    flexDirection: 'row',
    height: hp(15),
    alignItems: 'flex-start',
    paddingVertical: 10,
  }
})