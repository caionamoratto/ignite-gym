import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import type { AuthNavigatorRoutesProps } from "@routes/auth.routes"

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp(){
    const navigator = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack(){
        navigator.navigate("signIn");
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow:1 }} showsVerticalScrollIndicator={false}>
            <VStack
                w="$full"
                bg="$gray700"
                h="105%"
            >
                <Image
                    w="$full"
                    h={624}
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"//Acessibilidade
                    position="absolute"
                />
                <VStack flex={1} px="$10" pb="$16">
                    <Center my="$24">
                        <Logo/>
                        <Text color="$gray100" fontSize="$sm">
                            Treine sua mente e o seu corpo.
                        </Text>
                    </Center>
                    <Center gap="$2" flex={1}>
                        <Heading color="$gray100">Crie sua conta</Heading>
                        <Input placeholder="Nome"/>
                        <Input 
                            placeholder="E-mail" 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                        />
                        <Input placeholder="Senha" secureTextEntry/>
                        <Input placeholder="Confirme a Senha" secureTextEntry/>
                        <Button title="Criar e acessar" />
                    </Center>
                    <Button title="Voltar para o login" variant="outline" mt="$12" onPress={handleGoBack}/>
                </VStack>
            </VStack>
        </ScrollView>
    )
}