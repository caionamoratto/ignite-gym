import { createNativeStackNavigator, type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { VStack } from "@gluestack-ui/themed";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
    signIn: undefined;
    signUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;


const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
    return(
        <VStack
            flex={1}
            position="absolute"
            w="$full"
            h="107%"
        >
            <Navigator screenOptions={{headerShown: false}}>
                <Screen
                    name="signIn"
                    component={SignIn}
                />
                <Screen
                    name="signUp"
                    component={SignUp}
                />
            </Navigator>
        </VStack>
    )
};