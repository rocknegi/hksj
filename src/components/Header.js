import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import ThemeContext from '../theme';
import { colors, lightTheme } from '../theme/light-theme';
import { darkTheme } from '../theme/dark-theme';


export default function Header({ navigation }) {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: themeMode === 'light' ? colors.PrimaryColor : lightTheme.icon.color
      }}>
      <Icon
        name="menu"
        size={35}
        onPress={() => navigation.openDrawer()}
        style={themeMode === 'light' ? lightTheme.icon : darkTheme.icon}
      />
    </View>
  );
}
