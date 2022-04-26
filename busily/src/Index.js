import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Store from "./reduxStore/Store";
import CardPage from "./screens/Card/Card";
import ScanPage from "./screens/Scan/Scan";
import LibraryPage from "./screens/Library/Library";
import EditPage from "./screens/Edit/Edit";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppRouter () {
    return (
        <View style={styles.flex}>
            <Provider store={Store}>
                {/*<NavigationContainer>*/}
                {/*    <Stack.Navigator initialRouteName="Library">*/}
                {/*        <Stack.Screen*/}
                {/*        name="Card"*/}
                {/*        component={CardPage}*/}
                {/*        />*/}
                {/*        <Stack.Screen*/}
                {/*            name="Scan"*/}
                {/*            component={ScanPage}*/}
                {/*        />*/}
                {/*        <Stack.Screen*/}
                {/*            name="Library"*/}
                {/*            component={LibraryPage}*/}
                {/*        />*/}
                {/*        <Stack.Screen*/}
                {/*            name="Edit"*/}
                {/*            component={EditPage}*/}
                {/*        />*/}
                {/*    </Stack.Navigator>*/}
                {/*</NavigationContainer>*/}
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Feed"
                        screenOptions={{
                            activeTintColor: '#42f44b',
                        }}>
                        <Tab.Screen
                            name="Card"
                            component={CardPage}
                            options={{
                                tabBarLabel: 'Card',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons
                                        name="card"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Scan"
                            component={ScanPage}
                            options={{
                                tabBarLabel: 'Scan',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons
                                        name="barcode-scan"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Library"
                            component={LibraryPage}
                            options={{
                                tabBarLabel: 'Library',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="library" color={color} size={size} />
                                ),
                            }}
                        />


                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>

        </View>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
});
