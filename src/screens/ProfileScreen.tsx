import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function ProfileScreen({ route, navigation }: Props): React.JSX.Element {
  // TypeScript knows these params exist and their types!
  const { userId, name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.info}>User ID: {userId}</Text>
      <Text style={styles.info}>Name: {name}</Text>

      <View style={styles.spacer} />

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />

      <View style={styles.spacer} />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
  spacer: {
    height: 10,
  },
});

export default ProfileScreen;
