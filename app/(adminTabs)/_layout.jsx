import { Tabs } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";


const AdminLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="adminHome"
        options={{
          title: "Add Hostel",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="school" size={size} color={color} />,
        }}
      />
       <Tabs.Screen
        name="AdminProfile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="school" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default AdminLayout;
