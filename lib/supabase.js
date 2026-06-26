import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oqusrudwtgfdyqwvrjce.supabase.co'
const supabaseAnonKey = 'sb_publishable_ys7yIdUr7n6EQhDXk7U1DA_Tc-9ih1c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})