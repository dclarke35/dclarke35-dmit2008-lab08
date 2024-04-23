
import { EmailAndPasswordForm } from "@/components/forms";
import { ProviderButton, ProviderLabel } from "@/components/forms/ProviderButton";
import { Heading, Title } from "@/components/headings";
import { Container } from "@/components/layout/Container";
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io'
import { SignInOption } from "@/components/forms/SignInOptions";
import TermsOfUse from "@/components/forms/TermsOfUse";

async function SignUpPage ({children}) {
    return (
      <>
			<main className="mb-16 min-h-screen py-8 bg-zinc-100">
        <section className="max-w-lg bg-white rounded-md border border-zinc-300 px-8 pt-8 pb-8 mx-auto">
          <Heading className="mb-8">
            <Title as="h2" className="text-2xl font-semibold text-zinc-700 text-center">Create an Account</Title>
          </Heading>
          <Container className="flex gap-x-4">
            <ProviderButton className="rounded-lg flex justify-center items-center border border-zinc-300 w-full py-2.5 gap-x-2.5">
              <IoLogoGoogle className="w-6 h-6"/> <ProviderLabel>Google</ProviderLabel>
            </ProviderButton>
            <ProviderButton className="rounded-lg flex justify-center items-center border border-zinc-300 w-full py-2.5 gap-x-2.5">
              <IoLogoGithub className="w-6 h-6"/> <ProviderLabel>GitHub</ProviderLabel>
            </ProviderButton>
          </Container>
          <Container className="flex items-center my-8">
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="px-7 text-center text-gray-500">or</div>
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          </Container>
          
          <EmailAndPasswordForm/>
          <SignInOption className="mb-4"/>
          <TermsOfUse />
        </section>
			</main>
      </>
    );
  }
  
  export default SignUpPage