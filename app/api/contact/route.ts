import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, country, email, phone, interested_service, message } = body;

    // Validate required fields
    if (!full_name || !country || !email || !interested_service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into database
    const { error } = await supabase.from('contact_submissions').insert({
      full_name,
      country,
      email,
      phone: phone || null,
      interested_service,
      message,
    });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
