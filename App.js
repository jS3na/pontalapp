import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Image, StatusBar, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Inicio from './src/screens/Inicio';
import Routes from './src/routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#012e82" />

      <View style={styles.header}>
        <Image
          source={require('./assets/pontal_logo.png')}
          style={styles.headerImage}
        />
      </View>
      
      <View style={styles.content}>
        <Routes />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    height: 90,
    backgroundColor: '#012e82',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
        backgroundColor: '#012e82', // Adicione o backgroundColor para Android para que a sombra seja visível
      },
    }),
  },
  headerImage: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    backgroundColor: 'green',
  },
});
