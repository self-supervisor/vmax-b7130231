// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kagwhdleyzpjnqiihela.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthZ3doZGxleXpwam5xaWloZWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMDQ0NTYsImV4cCI6MjA0OTY4MDQ1Nn0._HkacOrFHofjvFCRnJjWzqFkxoZ0WH4Uj899NtP0D6I";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);