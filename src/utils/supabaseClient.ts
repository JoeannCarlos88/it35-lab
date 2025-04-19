import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlvbnvaobmfkvbcesfvw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsdmJudmFvYm1ma3ZiY2VzZnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMDgxNjUsImV4cCI6MjA1OTc4NDE2NX0.AKIVdHaKsbVDLTJqJd8GoDE1Aqu_IX6LzOsuj-DPO-c';

export const supabase = createClient(supabaseUrl, supabaseKey);