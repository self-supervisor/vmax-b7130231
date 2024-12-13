import { createClient } from '@supabase/supabase-js';

// When using Lovable's Supabase integration, these values are automatically injected
declare global {
  interface Window {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
  }
}

if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
  throw new Error('Supabase credentials not found. Please ensure Supabase integration is properly configured.');
}

const supabaseUrl = window.SUPABASE_URL;
const supabaseAnonKey = window.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);