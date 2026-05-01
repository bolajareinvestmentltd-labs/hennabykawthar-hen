import { createClient } from '@supabase/supabase-js';

// We provide a fallback URL just to pass the Next.js build step. 
// Once the site is live, it will use your real Vercel variables.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);