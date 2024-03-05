/* eslint-disable @typescript-eslint/no-unused-vars */
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey= process.env.EXPO_PUBLIC_SUPABASE_ANON_KAY ?? "";

export const supabase = createClient(supabaseUrl, supabaseKey);