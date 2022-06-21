import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { fetchMainUser } from "../../actions/Actions";

const Edit = ({user}) => {

    return (
        <View style={styles.container}>
            {user.map((u, index) => (
                <View key={index} style={styles.usernameContainer}>
                   <Text>{u.name}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
