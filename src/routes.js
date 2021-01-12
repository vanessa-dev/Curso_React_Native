import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';
const Stack = createStackNavigator();

if (__DEV__) {
  require('react-devtools');
}
const Routes = ()=>{
  return(<>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Main" component={Main} options={{title:'Usuários',headerTintColor:'#fff',headerStyle:{backgroundColor:'#FB2'}}}/>
      <Stack.Screen  name="User" component={User} options={{title:'User',headerTintColor:'#fff',headerStyle:{backgroundColor:'#FB2'}}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>);
}
export default Routes;
