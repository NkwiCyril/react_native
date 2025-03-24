import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://eowhnfjevqmzvxelyzzz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvd2huZmpldnFtenZ4ZWx5enp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4Njk4MzksImV4cCI6MjA1NzQ0NTgzOX0.rpdVNdin0uBMUPTJu7GvOcF9O67qCs80JSFkBSYs3XI",
);
