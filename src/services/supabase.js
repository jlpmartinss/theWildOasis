import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jsynmbyzpmkhnokorbkd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzeW5tYnl6cG1raG5va29yYmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0ODE4NTAsImV4cCI6MjA1NzA1Nzg1MH0.G0mB2NUPKZ9VHEhw6A-U7c4G0x54NQf4GD_GSE15cmo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
