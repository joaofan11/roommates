import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#534AB7',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: '#eee',
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'início' }} />
      <Tabs.Screen name="tasks" options={{ title: 'tarefas' }} />
      <Tabs.Screen name="expenses" options={{ title: 'contas' }} />
      <Tabs.Screen name="shopping" options={{ title: 'mercado' }} />
    </Tabs>
  )
}