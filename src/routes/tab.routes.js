import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import Inicio from '../screens/Inicio';
import Contato from '../screens/Contato';
import Produtos from '../screens/Produtos';
import Sobre from '../screens/Sobre';
import ProdutoDetalhes from '../screens/ProdutoDetalhes';
import Blog from '../screens/Blog';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProdutosStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Produtos" component={Produtos} options={{ headerShown: false }} />
        <Stack.Screen name="ProdutoDetalhes" component={ProdutoDetalhes} options={{ title: 'Detalhes do Produto' }} />
    </Stack.Navigator>
);

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.footer,
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#ccc',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Inicio}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesign name="home" size={size} color={focused ? color : '#ccc'} />
                    ),
                    tabBarLabel: 'Início',
                }}
            />
            <Tab.Screen
                name="Produtos"
                component={ProdutosStack} // Utiliza o stack de produtos que inclui a lista e detalhes do produto
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesign name="barcode" size={size} color={focused ? color : '#ccc'} />
                    ),
                    tabBarLabel: 'Produtos',
                }}
            />
            <Tab.Screen
                name="Blog"
                component={Blog}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name="contact-page" size={size} color={focused ? color : '#ccc'} />
                    ),
                    tabBarLabel: 'Blog',
                }}
            />
            <Tab.Screen
                name="Contato"
                component={Contato}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name="contact-page" size={size} color={focused ? color : '#ccc'} />
                    ),
                    tabBarLabel: 'Contato',
                }}
            />
            <Tab.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesign name="team" size={size} color={focused ? color : '#ccc'} />
                    ),
                    tabBarLabel: 'Sobre',
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#012e82',
        borderTopWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        elevation: 2,
    },
});
