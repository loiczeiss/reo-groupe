import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Section,
  Text,
  Row,
  Column,
  Link,
  Img,
} from '@react-email/components'

interface ContactFormEmailProps {
  props: {
    firstName: string
    lastName: string
    email: string
    whoAreYou: string

    description: string
  }
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''
export const ContactFormEmail = ({
  props: {
    firstName,
    lastName,
    email,
    whoAreYou,
    description,
  },
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Nouveau formulaire de contact - {firstName} {lastName}
      </Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto my-10 max-w-[600px]">
            {/* Header */}
            <Section className="bg-[#668E2E] rounded-t-lg px-8 py-6">
              <Row>
                <Column>
                  <Text className="text-white text-2xl font-bold m-0">Nouveau Projet</Text>
                  <Text className="text-white text-sm m-0 opacity-90">
                    Formulaire de contact soumis le {new Date().toLocaleDateString('fr-FR')}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Main Content */}
            <Section className="bg-white px-8 py-10 rounded-b-lg shadow-lg">
              {/* Intro */}
              <Text className="text-[#232548] text-base mb-6">
                <span className="font-bold">
                  {firstName} {lastName}
                </span>{' '}
                a soumis un nouveau projet via le formulaire de contact. Voici les détails:
              </Text>

              {/* Client Info Card */}
              <Section className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-[#668E2E]">
                <Text className="text-[#232548] text-lg font-bold mb-4">
                  Informations du client
                </Text>

                <Row className="mb-4">
                  <Column className="w-1/3">
                    <Text className="text-gray-500 text-sm m-0">Nom complet</Text>
                  </Column>
                  <Column className="w-2/3">
                    <Text className="text-[#232548] font-medium m-0">
                      {firstName} {lastName}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-4">
                  <Column className="w-1/3">
                    <Text className="text-gray-500 text-sm m-0">Email</Text>
                  </Column>
                  <Column className="w-2/3">
                    <Text className="text-[#232548] font-medium m-0">
                      <Link href={`mailto:${email}`} className="text-[#668E2E] no-underline">
                        {email}
                      </Link>
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column className="w-1/3">
                    <Text className="text-gray-500 text-sm m-0">Profil</Text>
                  </Column>
                  <Column className="w-2/3">
                    <Text className="text-[#232548] font-medium m-0">{whoAreYou}</Text>
                  </Column>
                </Row>
              </Section>

              {/* Project Details Card */}
              <Section className="bg-gray-50 rounded-lg p-6 mb-6 border-l-4 border-[#668E2E]">
                <Text className="text-[#232548] text-lg font-bold mb-4">Détails du projet</Text>

                <Text className="text-gray-500 text-sm mb-2">Description</Text>
                <Section className="bg-white p-4 rounded border border-gray-200">
                  <Text className="text-[#232548] whitespace-pre-line m-0">{description}</Text>
                </Section>
              </Section>

              {/* CTA */}
              <Section className="text-center mt-8">
                <Link
                  href={`mailto:${email}`}
                  className="bg-[#668E2E] text-white font-bold py-3 px-6 rounded-lg no-underline inline-block"
                >
                  Répondre au client
                </Link>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="text-center mt-6">
              <Img
                src={`${baseUrl}/static/logo.png`}
                className={'mx-auto'}
                alt={'logo'}
                height={48}
              />
              <Text className="text-gray-500 text-xs">
                © {new Date().getFullYear()} REO groupe. Tous droits réservés.
              </Text>
              <Text className="text-gray-500 text-xs">
                <Link href="#" className="text-[#668E2E] underline">
                  Politique de confidentialité
                </Link>{' '}
                •
                <Link href="#" className="text-[#668E2E] underline">
                  {' '}
                  Conditions d'utilisation
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail
