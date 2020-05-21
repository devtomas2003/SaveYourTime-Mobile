import React, { useEffect } from 'react';
import { TouchableHighlight, StyleSheet, BackHandler, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faScroll } from '@fortawesome/free-solid-svg-icons';

import Region from './Pages/Region';
import Sliders from './Pages/Sliders';

const Stack = createStackNavigator();

export default function Routes(){
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', function(){
            return false;
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
                        <View style={styles.btnsBar}>
                            <TouchableHighlight style={styles.btnConfig}>
                                <FontAwesomeIcon size={25} style={styles.configIcon} icon={ faScroll } />
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.btnNoti}>
                                    <FontAwesomeIcon size={25} style={styles.notiIcon} icon={ faCog } />
                            </TouchableHighlight>
                       </View>
                    ),
                  }}
            />
           </Stack.Navigator>
       </NavigationContainer> 
    );
}

const styles = StyleSheet.create({
    btnConfig: {
        marginRight: 15
    },
    btnsBar:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnNoti:{
        marginRight: 10
    },
    notiIcon:{
        color: '#aaa'
    },
    configIcon: {
        color: '#aaa'
    }
});