import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';  // npm install react-native-element-dropdown --save

export default function App() {
    const buoyState = useState(null);
    const ropeLengthState = useState(null);
    const boatSpeedState = useState(null);

    function computeTotalBuoys() {
        return buoyState[0] + 6 * (ropeLengthState[0] + boatSpeedState[0]);
    }

    return (
        <View style={styles.container}>
            <TextInput
                editable
                keyboardType='numeric'
            />

            <DropDownMenu 
                placeHolder="Buoys" 
                data={buoys}
                state={buoyState}
            />

            <DropDownMenu 
                placeHolder="Rope Length" 
                data={ropeLengths}
                state={ropeLengthState}
            />

            <DropDownMenu 
                placeHolder="Boat Speed" 
                data={boatSpeeds}
                state={boatSpeedState}
            />

            <Text style={styles.text}>{computeTotalBuoys()}</Text>
        </View>
    );
}

let buoys = [
    {
        label: "0 Buoy",
        value: 0,
    },
    {
        label: "1 Buoy",
        value: 1,
    },
    {
        label: "2 Buoy",
        value: 2,
    },
    {
        label: "3 Buoy",
        value: 3,
    },
    {
        label: "4 Buoy",
        value: 4,
    },
    {
        label: "5 Buoy",
        value: 5,
    },
    {
        label: "6 Buoy",
        value: 6,
    },
];

let ropeLengths = [
    {
        label: "0' off",
        value: 0,
    },
    {
        label: "15' off",
        value: 1,
    },
    {
        label: "22' off",
        value: 2,
    },
    {
        label: "28' off",
        value: 3,
    },
    {
        label: "32' off",
        value: 4,
    },
    {
        label: "35' off",
        value: 5,
    },
    {
        label: "38' off",
        value: 6,
    },
    {
        label: "39.5' off",
        value: 7,
    },
    {
        label: "41' off",
        value: 8,
    },
    {
        label: "43' off",
        value: 9,
    },
];

let boatSpeeds = [
    {
        label: "15.5 MPH",
        value: 0,
    },
    {
        label: "17.4 MPH",
        value: 1,
    },
    {
        label: "19.2 MPH",
        value: 2,
    },
    {
        label: "21.1 MPH",
        value: 3,
    },
    {
        label: "23.0 MPH",
        value: 4,
    },
    {
        label: "24.9 MPH",
        value: 5,
    },
    {
        label: "26.7 MPH",
        value: 6,
    },
    {
        label: "28.6 MPH",
        value: 7,
    },
    {
        label: "30.4 MPH",
        value: 8,
    },
    {
        label: "32.3 MPH",
        value: 9,
    },
    {
        label: "34.2 MPH",
        value: 10,
    },
    {
        label: "36.0 MPH",
        value: 58,
    },
];

{/* <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <Text style={styles.text}>yoooooo!</Text>
      <DropDownMenu/>
      <StatusBar style="auto" />
    </View> */}

const DropDownMenu = (props) => {
    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={props.data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={props.placeHolder}
            value={props.state[0]}
            onChange={item => {
                props.state[1](item.value);
            }}
        />
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignContent: "center",
    justifyContent: 'center',
  },
  text: {
    color: "#000",
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor: "#FFF",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});