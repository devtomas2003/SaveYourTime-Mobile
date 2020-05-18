import React, { useEffect } from 'react';
import { TouchableHighlight, StyleSheet, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import Region from './Pages/Region';
import Sliders from './Pages/Sliders';

const Stack = createStackNavigator();

export default function Routes(){
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', function(){
            return true;
        });
    }, []);
    return(
       <NavigationContainer>
           <Stack.Navigator>
            <Stack.Screen
                name="SliderOne"
                component={Sliders}
                options={{headerShown: false, headerLeft: null }}
            />
            <Stack.Screen
                name="Regiao"
                component={Region}
                options={{
                    headerTitle: "#SaveYourTime",
                    headerLeft: null,
                    headerRight: () => (
                       <TouchableHighlight style={styles.btnConfig}>
                            <FontAwesomeIcon size={25} style={styles.configIcon} icon={ faCog } />
                       </TouchableHighlight>
                    ),
                  }}
            />
           </Stack.Navigator>
       </NavigationContainer> 
    );
}

const styles = StyleSheet.create({
    btnConfig: {
        marginRight: 10
    },
    configIcon: {
        color: '#4082ee'
    }
});