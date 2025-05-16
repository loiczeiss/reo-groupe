import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import QuoteFormMail from '../../../../../react-email-starter/emails/quote-form-mail'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['loiczeiss@gmail.com'],
    subject: `Formulaire de devis - ${body.firstName} ${body.lastName}`,
    react: QuoteFormMail({ props: body }),
  })

  if (error) {
    return NextResponse.json({ error }, { status: 400 })
  }

  return NextResponse.json({ data }, { status: 200 })
}
