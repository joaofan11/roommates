import { View, Text, StyleSheet } from 'react-native'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>roommates</Text>
      <Text style={styles.sub}>bem-vindos à casa 🏠</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center',
    alignItems: 'center', backgroundColor: '#fff'
  },
  title: { fontSize: 28, fontWeight: '500', color: '#534AB7' },
  sub: { fontSize: 16, color: '#888', marginTop: 8 }
})