import { createClient } from '@supabase/supabase-js';

// When using Lovable's Supabase integration, these values are automatically injected
const supabaseUrl = "https://kagwhdleyzpjnqiihela.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthZ3doZGxleXpwam5xaWloZWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMDQ0NTYsImV4cCI6MjA0OTY4MDQ1Nn0._HkacOrFHofjvFCRnJjWzqFkxoZ0WH4Uj899NtP0D6I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);