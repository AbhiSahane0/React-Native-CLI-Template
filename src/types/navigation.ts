export type RootStackParamList = {
  Home: undefined; // undefined = no params
  Profile: { userId: string; name: string }; // screen with params
  Settings: undefined;
};

// Declare global types for type-safe navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
