import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Linking from 'expo-linking';
import { getScanData } from "../../actions/Actions";
import { connect } from "react-redux";

const Scan = ({navigation, getScanData}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something - for example: reset states, ask for camera permission
            setScanned(false);
            setHasPermission(false);
            (async () => {
                const { status } = await BarCodeScanner.requestPermissionsAsync();
                setHasPermission(status === "granted");
            })();
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);
    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        getScanData(data);
        Linking.openURL(data).then(r => null);
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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
        padding: 100,
    },
    ScanInside: {
        marginVertical: 20,
        marginHorizontal: 5,
        color: "#000",
        fontSize: 32,
    }
});

const mapStateToProps = (state) => ({
    scanData: state.scanData,
})

const mapDispatchToProps = (dispatch) => ({
    getScanData: (data) => dispatch(getScanData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Scan)
