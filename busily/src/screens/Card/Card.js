import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { fetchMainUser } from "../../actions/Actions";

const Card = ({ fetchMainUser, user, navigation }) => {
    useEffect(() => fetchMainUser(), []);

    const onPressHandler = (index) => {
        navigation.navigate("Edit", {
            itemId: index,
        });
    }

    return (
        <View style={styles.container}>
            {user.map((u, index) => (
                <View key={index} style={styles.usernameContainer}>
                    <TouchableOpacity onPress={
                        (e) => onPressHandler(index)
                    }>
                        <View style={styles.insideCard}>
                            <Text style={styles.insideCardText}>{u.name}</Text>
                            <Text style={styles.insideCardText}>{u.email}</Text>
                            <Text style={styles.insideCardText}>{u.phone}</Text>
                            <Text style={styles.insideCardText}>{u.company.name}</Text>
                            <Text style={styles.insideCardText}>{u.website}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    insideCard: {
       backgroundColor: "rgba(16,71,73,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        width: 345,
        height: 550,
        borderRadius: 10,

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
    usernameContainer: {
        display: "flex",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    detailsButton: {
        height: 20,
        width: 100
    },
    Scroller: {
        padding: 10,
        width: "100%",
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.app.user,
    };
};

const mapDispatchToProps = {
    fetchMainUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
