import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kraetfjijjsubqqnlbvu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyYWV0ZmppampzdWJxcW5sYnZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MDU3NDQsImV4cCI6MjAyMDM4MTc0NH0.A5lSrPe-wv_qVoGTNIeb1R7VPE14ylqf-PXhZNZhLis";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
