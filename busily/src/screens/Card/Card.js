import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchMainUser } from "../../actions/Actions";

const Card = ({ fetchMainUser, user, navigation }) => {
    useEffect(() => fetchMainUser(), []);

    const onPressHandler = (index) => {
        navigation.push("Library", {
            itemId: index,
        });
    }

    return (
        <View style={styles.container}>

                    <View  style={styles.usernameContainer}>
                        <TouchableOpacity onPress={
                            (e) => onPressHandler()
                        }>
                            <View style={styles.insideCard}>
                                <Text style={styles.insideCardText}>{user.name} ({user.username})</Text>
                                <Text style={styles.insideCardText}>{user.email}</Text>
                                <Text style={styles.insideCardText}>{user.phone}</Text>
                                <Text style={styles.insideCardText}>{user.company.name}</Text>
                                <Text style={styles.insideCardText}>{user.website}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(191,215,222,0.87)",
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
        width: "90%"
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
