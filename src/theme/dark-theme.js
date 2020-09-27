import { StyleSheet } from 'react-native';

export const colors = {
  PrimaryColor: '#00E676',
  BackgroundColor: '#000',
};

export const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: colors.BackgroundColor,
    paddingHorizontal: 10,
    flex: 1,
  },
  header: {},
  customDrawerContent: {
    padding: 5,
  },
  text: {
    color: '#fff',
  },
  textHeading: {
    color: colors.PrimaryColor,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  icon: {
    color: colors.PrimaryColor,
  },
  color: {
    color: colors.PrimaryColor
  }
});
