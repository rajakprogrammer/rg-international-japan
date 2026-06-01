import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Testimonial = {
  id: string;
  name: string;
  country: string;
  service_used: string;
  review: string;
  rating: number;
  image_url: string | null;
  is_featured: boolean;
  created_at: string;
};

export type ContactSubmission = {
  id: string;
  full_name: string;
  country: string;
  email: string;
  phone: string | null;
  interested_service: string;
  message: string;
  status: string;
  created_at: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
};
