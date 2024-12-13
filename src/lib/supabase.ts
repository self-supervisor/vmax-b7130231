import { createClient } from '@supabase/supabase-js';

// When using Lovable's Supabase integration, these values are automatically injected
declare global {
  interface Window {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
  }
}

const supabaseUrl = window.SUPABASE_URL;
const supabaseAnonKey = window.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);