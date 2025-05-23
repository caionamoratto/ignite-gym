import { createBottomTabNavigator, type BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { VStack } from "@gluestack-ui/themed";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

import HomeSvg from "@assets/home.svg"
import HistorySvg from "@assets/history.svg"
import ProfileSvg from "@assets/profile.svg"

import { Home } from "@screens/Home";
import { Exercise } from "@screens/Exercise";
import { Profile } from "@screens/Profile";
import { History } from "@screens/History";


type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){
    const {tokens} = gluestackUIConfig;
    const iconSize = tokens.space["6"];


    return(
        <VStack
            flex={1}
            position="absolute"
            w="$full"
            h="107%"
            bg="$gray700"
        >
            <Navigator 
                screenOptions={{
                    headerShown: false, 
                    tabBarShowLabel: false, 
                    tabBarActiveTintColor: tokens.colors.green500, 
                    tabBarInactiveTintColor: tokens.colors.gray200,
                    tabBarStyle:{                        
                        backgroundColor: tokens.colors.gray600,
                        borderTopWidth: 0,
                        height: Platform.OS === "android" ? "auto" : 96,
                        paddingBottom: tokens.space["14"],
                        paddingTop: tokens.space["2"],
                        paddingLeft: tokens.space["16"]
                    }
                }}
            >
                <Screen name="home" component={Home} options={{tabBarIcon: ({color})=> <HomeSvg fill={color} width={iconSize} height={iconSize}/>}}/>
                <Screen name="history" component={History} options={{tabBarIcon: ({color})=> <HistorySvg fill={color} width={iconSize} height={iconSize}/>}}/>
                <Screen name="profile" component={Profile} options={{tabBarIcon: ({color})=> <ProfileSvg fill={color} width={iconSize} height={iconSize}/>}}/>
                <Screen name="exercise" component={Exercise} options={{tabBarButton: () => null}}/>
            </Navigator>
        </VStack>
    )
};