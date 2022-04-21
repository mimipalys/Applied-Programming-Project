import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchDataAll } from "../../actions/Actions";

const Card = ({ fetchDataAll, users, navigation }) => {
    useEffect(() => fetchDataAll(), []);

    const onPressHandler = (index) => {
        navigation.push("Library", {
            itemId: index,
        });
    }

    return (
        <View style={styles.container}>
            {users.map((u, index) => (
                <View key={index} style={styles.usernameWrapper}>
                    <Text>keks</Text>
                    <TouchableOpacity onPress={
                        (e) => onPressHandler(index)
                    }>
                        <div>
                            Card
                        </div>
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity
                onPress={() => fetchDataAll()}
                style={styles.refreshButton}
            >
                <Text>Refresh</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        width: 200,
        height: 100,
        backgroundColor: "#ccc",
    },
    refreshButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: 20,
        height: 20,
        backgroundColor: "#ccc",
    },
    usernameWrapper: {
        display: "flex",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%"
    },
    detailsButton: {
        height: 20,
        width: 100
    }
});

const mapStateToProps = (state) => {
    return {
        users: state.app.users,
    };
};

const mapDispatchToProps = {
    fetchDataAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
