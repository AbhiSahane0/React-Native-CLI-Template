import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

function SettingsScreen({ navigation }: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <View style={styles.spacer} />

      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <View style={styles.spacer} />

      <Button title="Go to Root" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  spacer: {
    height: 10,
  },
});

export default SettingsScreen;
