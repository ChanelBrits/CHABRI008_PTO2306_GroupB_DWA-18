import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nfolbbvdpxzptcosnulz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mb2xiYnZkcHh6cHRjb3NudWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMTgxMzQsImV4cCI6MjAzMTY5NDEzNH0.fIPcNYkJ7Bi2hYEQRLuKLmwQeCQqWzqxCc3ZCiX1D2Q"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase