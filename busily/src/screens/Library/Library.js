import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchDataAll } from "../../actions/Actions";

const Library = ({ fetchDataAll, users, navigation }) => {
    useEffect(() => fetchDataAll(), []);

    const onPressHandler = (index) => {
        navigation.push("Card", {
            itemId: index,
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.Scroller}>
                {users.map((u, index) => (
                    <View key={index} style={styles.usernameWrapper}>
                        <TouchableOpacity onPress={
                            (e) => onPressHandler(index)
                        }>
                            <View style={styles.insideCard}>
                                <Text style={styles.insideCardText}>{u.username}</Text>
                                <Text style={styles.insideCardText}>{u.email}</Text>
                                <Text style={styles.insideCardText}>{u.phone}</Text>
                                <Text style={styles.insideCardText}>{u.company.name}</Text>
                                <Text style={styles.insideCardText}>{u.website}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
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
        backgroundColor: "#ccc",
    },
    refreshButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: "#ccc",
    },
    usernameWrapper: {
        display: "inline-block",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowRadius: 2,
        marginVertical: 5,
    },
    insideCard: {
      display: "flex",
      padding: 10,
    },
    insideCardText: {
        display: "flex",
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
        users: state.app.users,
    };
};

const mapDispatchToProps = {
    fetchDataAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
