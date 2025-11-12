import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', {
            userId: '123',
            name: 'John Doe',
          })
        }
      />

      <View style={styles.spacer} />

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
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

export default HomeScreen;
