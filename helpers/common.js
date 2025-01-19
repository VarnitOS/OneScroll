import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const hp = percentage=>{
    return (deviceHeight * percentage) / 100;
}

const wp = percentage=>{
    return (deviceWidth * percentage) / 100;
}



export { hp, wp };