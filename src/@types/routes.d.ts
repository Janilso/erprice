type StackParamList = {
  Splash: undefined;
  Home: undefined;
  Details: undefined;
};

type AppStackRoutesType = RouteConfig<
  AppStackParamList,
  keyof AppStackParamList,
  StackNavigationState<AppStackParamList>,
  StackNavigationOptions,
  StackNavigationEventMap
>;

type RoutesNameType = {
  [string]: keyof StackParamList;
};
