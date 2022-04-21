import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Store from "./reduxStore/Store";
import CardPage from "./screens/Card/Card";
import ScanPage from "./screens/Scan/Scan";
import LibraryPage from "./screens/Library/Library";
import EditPage from "./screens/Edit/Edit";

const Stack = createStackNavigator();

export default function AppRouter () {
    return (
        <View style={styles.flex}>
            <Provider store={Store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Library">
                        {/*<Stack.Screen*/}
                        {/*    name="Card"*/}
                        {/*    component={CardPage}*/}
                        {/*    options={{ headerShown: false }}*/}
                        {/*/>*/}
                        {/*<Stack.Screen*/}
                        {/*    name="Scan"*/}
                        {/*    component={ScanPage}*/}
                        {/*/>*/}
                        <Stack.Screen
                            name="Library"
                            component={LibraryPage}
                        />
                        {/*<Stack.Screen*/}
                        {/*    name="Edit"*/}
                        {/*    component={EditPage}*/}
                        {/*/>*/}
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
