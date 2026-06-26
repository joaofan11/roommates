import { useState } from 'react'
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, KeyboardAvoidingView, Platform
} from 'react-native'
import { supabase } from '../../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) Alert.alert('Erro', error.message)
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>roommates</Text>
      <Text style={styles.subtitle}>organize a vida a dois</Text>

      <TextInput
        style={styles.input}
        placeholder="e-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'entrando...' : 'entrar'}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center',
    paddingHorizontal: 32, backgroundColor: '#fff'
  },
  title: {
    fontSize: 36, fontWeight: '500',
    color: '#534AB7', textAlign: 'center', marginBottom: 4
  },
  subtitle: {
    fontSize: 14, color: '#888', textAlign: 'center', marginBottom: 48
  },
  input: {
    borderWidth: 0.5, borderColor: '#ccc', borderRadius: 10,
    padding: 14, marginBottom: 12, fontSize: 16
  },
  button: {
    backgroundColor: '#534AB7', borderRadius: 10,
    padding: 16, alignItems: 'center', marginTop: 8
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '500' }
})