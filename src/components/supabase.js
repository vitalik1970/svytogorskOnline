import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oksvghnepybinafbvwun.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rc3ZnaG5lcHliaW5hZmJ2d3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1OTAxNzksImV4cCI6MjA0NDE2NjE3OX0.AccdbZb514ICSWEMXqmZEtBPsbE36UTyoOh8n0YdqWA'
export const supabase = createClient(supabaseUrl, supabaseKey);