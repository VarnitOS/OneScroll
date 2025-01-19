import { View, Text } from 'react-native'
import React from 'react'
import Home from './home'
import Mail from './mail'
import Lock from './lock'
import User from './User'
import Heart from './Heart'
import Plus from './Plus'
import Search from './Search'
import Location from './Location'
import Call from './Call'
import { theme } from '../../constants/theme'
import Camera from './Camera'
import Edit from './edit'
import ArrowLeft from './arrowLeft'
import ThreeDotsCircle from './threeDotsCircle'
import ThreeDotsHorizontal from './threeDotsHorizontal'
import Comment from './comment'
import Share from './share'
import Send from './Send'
import Delete from './delete'
import Logout from './logout'
import Image from './image'
import Video from './video'

const icons = {
    home: Home,
    mail: Mail,
    lock: Lock,
    user: User,
    heart: Heart,
    plus: Plus,
    search: Search,
    location: Location,
    call: Call,
    camera: Camera,
    edit: Edit,
    arrowLeft: ArrowLeft,
    threeDotsCircle: ThreeDotsCircle,
    threeDotsHorizontal: ThreeDotsHorizontal,
    comment: Comment,
    share: Share,
    send: Send,
    delete: Delete,
    logout: Logout,
    image: Image,
    video: Video
}

const Icon = ({name, ...props }) => {
    const IconComponent = icons[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }
    return (
        <View>
            <IconComponent 
                height={props.size || 24} 
                width={props.size || 24} 
                strokeWidth={props.strokeWidth || 1.9}
                color={props.color || theme.colors.textLight}
                {...props}
            />
        </View>
    )
}

export default Icon