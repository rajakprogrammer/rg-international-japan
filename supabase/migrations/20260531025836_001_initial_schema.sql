/*
  # RG International Database Schema

  1. New Tables
    - `testimonials` - Stores success stories and reviews from clients
      - `id` (uuid, primary key)
      - `name` (text) - Student/client name
      - `country` (text) - Country of origin
      - `service_used` (text) - Which service they used
      - `review` (text) - Their testimonial
      - `rating` (integer) - Rating out of 5
      - `image_url` (text) - Optional profile image
      - `is_featured` (boolean) - Whether to show on homepage
      - `created_at` (timestamp)
    
    - `contact_submissions` - Stores contact form submissions
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `country` (text)
      - `email` (text)
      - `phone` (text)
      - `interested_service` (text)
      - `message` (text)
      - `status` (text) - new, contacted, resolved
      - `created_at` (timestamp)
    
    - `faqs` - Frequently asked questions
      - `id` (uuid, primary key)
      - `question` (text)
      - `answer` (text)
      - `category` (text) - visa, study, work, general
      - `sort_order` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for testimonials and FAQs
    - Contact submissions: public insert, admin read only
*/

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  country text NOT NULL,
  service_used text NOT NULL,
  review text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  country text NOT NULL,
  email text NOT NULL,
  phone text,
  interested_service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- FAQs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text DEFAULT 'general',
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Testimonials policies (public read)
CREATE POLICY "Public can view active testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (true);

-- Contact submissions policies (public insert, no read)
CREATE POLICY "Public can submit contact forms"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);

-- FAQs policies (public read active FAQs)
CREATE POLICY "Public can view active FAQs"
  ON faqs FOR SELECT
  TO public
  USING (is_active = true);

-- Insert sample FAQs
INSERT INTO faqs (question, answer, category, sort_order) VALUES
  ('What documents do I need for a student visa?', 'You will need: a valid passport, COE (Certificate of Eligibility), admission letter from a Japanese language school, financial documents showing you can support yourself, and academic transcripts. Our team will guide you through the entire process.', 'visa', 1),
  ('How long does the visa application process take?', 'The typical processing time for a student visa is 1-3 months after submitting all required documents. This includes COE application (1-2 months) and visa issuance at the Japanese embassy (1-2 weeks). Work visas may take longer.', 'visa', 2),
  ('Do I need to know Japanese to study in Japan?', 'For language schools, no prior Japanese knowledge is required as they offer courses from beginner level. However, for university programs or work visas, some Japanese proficiency (JLPT N2-N4 level) may be required depending on the program or job.', 'study', 3),
  ('What is the SSW visa?', 'SSW (Specified Skilled Worker) is a new visa category that allows foreign workers to work in 14 specified industries in Japan. It requires passing a skills test and basic Japanese language test. We provide complete support for SSW applications.', 'work', 4),
  ('Can I work while studying in Japan?', 'Yes, student visa holders can work up to 28 hours per week (during school term) with a work permit. During school holidays, you can work up to 40 hours per week. We can help you find part-time job opportunities.', 'work', 5),
  ('What services does RG International provide?', 'We provide: Student Visa Support, Work Visa Support, SSW Visa Support, Japanese Language School Admission, Job Matching and Recruitment, Translation Services, and Settlement Support in Japan. We offer end-to-end guidance from consultation to arrival.', 'general', 6)
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (name, country, service_used, review, rating, is_featured) VALUES
  ('Rajesh Sharma', 'Nepal', 'Student Visa Support', 'RG International made my dream of studying in Japan come true. They guided me through every step, from choosing the right language school to getting my visa approved. Highly recommended!', 5, true),
  ('Nguyen Thi Mai', 'Vietnam', 'SSW Support', 'The SSW program seemed complicated, but the team at RG International explained everything clearly. They helped me prepare for the tests and get my visa. Now I am working in Japan!', 5, true),
  ('Ahmed Hassan', 'Bangladesh', 'Work Visa Support', 'Professional service from start to finish. They helped me find a job and navigate the visa process. I could not have done it without their support.', 5, true),
  ('Priya Patel', 'India', 'Language School Admission', 'I was nervous about moving to Japan, but RG International made the transition smooth. They helped me with everything - documents, school selection, and even finding accommodation.', 5, true),
  ('Kamal Perera', 'Sri Lanka', 'Student Visa Support', 'Excellent support team. They responded to all my questions promptly and helped me get accepted into a great language school in Tokyo.', 5, false)
ON CONFLICT DO NOTHING;