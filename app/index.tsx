import { ThemedText } from "@/components/ThemedText";
import { Text, View,Button } from "react-native";

import * as Notifications from 'expo-notifications';
export default function Index() {

  async function registerForPushNotificationsAsync() {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    
    // Second, call the method
    
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
      },
      trigger: null,
    });
}

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"midnightblue"
      }}
    >
      <ThemedText>Windbreaker</ThemedText>
      <Button
        onPress={registerForPushNotificationsAsync}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
