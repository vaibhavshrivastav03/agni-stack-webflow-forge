import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, service, message } = await req.json()

    const emailContent = `
      New Contact Form Submission from AgniStack Website
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Service Interested In: ${service || 'Not specified'}
      
      Message:
      ${message}
      
      ---
      Sent from AgniStack Contact Form
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'AgniStack Contact Form <noreply@agnistack.com>',
        to: ['info@agnistack.com'],
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
        reply_to: email,
      }),
    })

    if (res.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    } else {
      const error = await res.text()
      console.error('Resend API error:', error)
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})