import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
        backgroundColor: "rgba(16,71,73,0.5)",
        borderRadius: 300,
        width: "100%",
        padding:100,
    },
    ScanInside: {
        marginVertical: 20,
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
