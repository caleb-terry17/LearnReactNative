import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

// everything descends from this app component
// every component has to be a descendent of this component
export default function App() {
    return (
        <View style={styles.appContainer}>
            <View>
                <TextInput placeholder="your course goal!" />
                <Button title="Add goal" />
            </View>

            <View>
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

// layouts are typically created with flexbox
// flexDirection: which axis the content aligns itself along
// flex: 1 - the element (container) should expand to occupy available space

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
    }
});

// <View style={styles.container}>
//     <Text style={styles.text}>hello!</Text>

//     <Text style={styles.text}>yoooooooo</Text>

//     <View
//         style={styles.buttonContainer}
//     >
//         <Button
//             title="tap!"
//             style={styles.button}
//         />
//     </View>
// </View>

// container: {
//     padding: 50,
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignContent: "center",
// }, 
// text: {
//     color: "#FFF",
//     fontSize: 50,
//     textAlign: "center",
// },
// buttonContainer: {
//     borderWidth: 1,
//     borderColor: "#FFF",
//     borderRadius: 80,
// },