import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchDataAll } from "../../actions/Actions";

const Scan = ({ fetchDataAll, users, navigation }) => {
    useEffect(() => fetchDataAll(), []);

    const onPressHandler = (index) => {
        navigation.push("Library", {
            itemId: index,
        });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.ScanButton}>
                <Text style={styles.ScanInside}>Scan</Text>
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
    ScanButton: {
        backgroundColor: "#42f44b",
        width: "100%"
    },
    ScanInside: {
        marginVertical: 5,
        marginHorizontal: 5,
        color: "#000",
        fontSize: 32,
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

export default connect(mapStateToProps, mapDispatchToProps)(Scan);
