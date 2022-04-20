import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Store from "./reduxStore";
import CardPage from "./screens/Card";
import ScanPage from "./screens/Scan";
import LibraryPage from "./screens/Library";
import EditPage from "./screens/Edit";

const Stack = createStackNavigator();

export default function () {
    return (
        <View style={styles.flex}>
            <Provider store={Store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Card">
                        <Stack.Screen
                            name="Card"
                            component={CardPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Scan"
                            component={ScanPage}
                        />
                        <Stack.Screen
                            name="Library"
                            component={LibraryPage}
                        />
                        <Stack.Screen
                            name="Edit"
                            component={EditPage}
                        />
                    </Stack.Navigator>
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
