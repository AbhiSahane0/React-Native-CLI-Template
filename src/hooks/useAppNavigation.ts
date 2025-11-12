import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

export type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

// Custom hook with proper typing
export function useAppNavigation() {
  return useNavigation<AppNavigation>();
}
