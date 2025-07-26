import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  fullName: string;
  emailAddress: string;
  company?: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const formData: ContactFormData = await request.json();
    
    console.log('Next.js API Route - Received form data:', formData);

    // Basic validation
    if (!formData.fullName || !formData.emailAddress || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, emailAddress, subject, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // Forward the request to your Hono worker
    const honoWorkerUrl = 'https://my-app.s29924414.workers.dev/api/email';
    
    console.log('Next.js API Route - Forwarding to Hono worker:', honoWorkerUrl);
    console.log('Next.js API Route - Sending data:', JSON.stringify(formData, null, 2));
    
    const response = await fetch(honoWorkerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Next.js API Route - Hono worker response status:', response.status);
    console.log('Next.js API Route - Hono worker response headers:', Object.fromEntries(response.headers.entries()));

    // Get the response body
    const responseBody = await response.text();
    console.log('Next.js API Route - Hono worker response body:', responseBody);

    if (response.ok) {
      console.log('Next.js API Route - SUCCESS: Hono worker returned OK status');
      console.log('Next.js API Route - Response data from Hono:', responseBody);
      
      return NextResponse.json(
        { 
          message: 'Email sent successfully',
          success: true,
          data: responseBody,
          honoStatus: response.status
        },
        { status: 200 }
      );
    } else {
      console.error('Next.js API Route - ERROR: Hono worker returned error status');
      console.error('Next.js API Route - Error details:', responseBody);
      
      return NextResponse.json(
        { 
          error: 'Failed to send email via Hono worker', 
          details: responseBody,
          success: false,
          honoStatus: response.status
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Next.js API Route - Server error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error',
        success: false
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
