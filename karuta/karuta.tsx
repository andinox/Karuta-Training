import {Text, View, StyleSheet, ImageBackground} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import SettingScreen from "./components/SettingScreen";
import {SvgUri} from "react-native-svg";
import TrainingScreen from "./components/TrainingScreen";
import DeckScreen from "./components/DeckScreen";
import Deck from "./components/Decks/Deck";


const Tab = createBottomTabNavigator();

function Karuta() {
  return (
          <Tab.Navigator
           screenOptions={{
               tabBarShowLabel: false,
               headerTitleAlign: 'center',
                tabBarStyle: {
                     backgroundColor: '#fff',
                     borderTopColor: 'transparent',
                     elevation: 10,
                     height: 70,
                },
           }}
          >
              <Tab.Screen
                  options={{
                      tabBarIcon: ({ focused }) => (
                          <View style={{
                              width: 50,
                              height: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: focused ? '#f2f2f2' : '#fff',
                              borderRadius: 50,
                          }}>
                              <Text style={{
                                  color: focused ? 'black' : 'gray',
                                  fontSize: 24,
                                  fontWeight: 'bold',
                              }}>
                                  <SvgUri width="35" height="35" uri={"https://www.svgrepo.com/show/529554/dumbbell-large-minimalistic.svg"} />
                              </Text>
                          </View>
                      )
                  }}
                  name="Training Karuta" component={TrainingScreen} />
              <Tab.Screen
                  options={{
                      tabBarIcon: ({ focused }) => (
                          <View style={{
                              width: 50,
                              height: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: focused ? '#f2f2f2' : '#fff',
                              borderRadius: 50,
                          }}>
                                <Text style={{
                                    color: focused ? 'black' : 'gray',
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                }}>
                                    <SvgUri width="35" height="35" uri={"https://www.svgrepo.com/show/529044/layers.svg"} />
                                </Text>
                          </View>
                      )
                  }}
                  name="Decks" component={DeckScreen} />
              <Tab.Screen
                  options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{
                                width: 50,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: focused ? '#f2f2f2' : '#fff',
                                borderRadius: 50,
                            }} >
                                <Text style={{
                                    color: focused ? 'black' : 'gray',
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                }}>
                                    <SvgUri width="35" height="35" uri={"https://www.svgrepo.com/show/529867/settings.svg"} />
                                </Text>
                            </View>

                        )
                  }}
                  name="Settings" component={SettingScreen} />
          </Tab.Navigator>
  );
}
export default Karuta;