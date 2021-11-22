import { toRem } from '@lib/helpers'
import { styled } from 'stitches.config'

const Main = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '80%',
  backgroundColor: '$secondary',
  paddingY: 12,
  paddingX: 16,
  boxShadow: '$shadowElevationMedium',
  '@mobileM': {
    height: 440,
  },
  '@tablet': {
    width: '80%',
    maxWidth: '1200px',
    height: 'auto',
    padding: '20px 100px 40px 100px',
  },
  '@laptop': {
    paddingX: 200,
  },
  '@desktop': {
    paddingX: 300,
  },
})

const Heading = styled('h1', {
  fontWeight: '$bold',
  fontSize: '$mobileHeading',
  color: '$primary',
  '@tablet': {
    fontSize: '$desktopHeading',
  },
})

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
})

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginTop: 15,
  width: '100%',
  '&:first-of-type': {
    marginTop: 22,
  },
  '@tablet': {
    marginTop: 40,
    '&:first-of-type': {
      marginTop: 50,
    },
  },
})

const Label = styled('label', {
  fontSize: toRem(16),
  fontWeight: '$medium',
  color: '$primary',
  '@tablet': {
    fontSize: toRem(27),
  },
})

const Input = styled('input', {
  width: '100%',
  height: 30,
  color: '$tertiary',
  backgroundColor: '$primary',
  paddingLeft: 10,
  marginTop: 10,
  fontWeight: '$medium',
  fontSize: toRem(14),
  transition: 'box-shadow 0.1s',
  '&:focus': {
    boxShadow: '0 1px 3px black',
  },
  '@tablet': {
    height: 50,
    fontSize: toRem(22),
    paddingLeft: 15,
    marginTop: 20,
  },
})

const EmailErrorMessage = styled('span', {
  fontSize: toRem(11),
  color: '$primary',
  fontWeight: '$medium',
  marginTop: 8,
  '@tablet': {
    marginTop: 16,
    fontSize: toRem(17),
  },
})

const SubmitButton = styled('button', {
  width: '100%',
  height: 38,
  fontSize: toRem(20),
  fontWeight: '$semiBold',
  backgroundColor: '$primary',
  color: '$secondary',
  marginTop: 40,
  boxShadow: '$shadowElevationLow',
  '@mobileM': {
    marginTop: 65,
  },
  '@tablet': {
    maxWidth: 320,
    height: 70,
    fontSize: 36,
    marginTop: 100,
    boxShadow: '0 1px 3px black',
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transition: 'all 0.15s ease-out',
      transform: 'translateY(-3px)',
      boxShadow: '0 2px 6px black',
    },
    '&:active': {
      transition: 'all 0.1s ease-out',
      transform: 'translateY(0) scale(0.99)',
      boxShadow: '0 1px 3px black',
    },
  },
})

export const SignUp = () => {
  return (
    <Main>
      <Wrapper>
        <Heading>Sign Up</Heading>
        <Form>
          <FormGroup>
            <Label htmlFor="fullname">Full Name*</Label>
            <Input
              id="fullname"
              type="text"
              aria-required="true"
              placeholder="Naruto Uzumaki"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              aria-required="true"
              placeholder="naruto@gmail.com"
            />
            <EmailErrorMessage role="alert">
              Please enter a valid email.
            </EmailErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password*</Label>
            <Input id="password" type="password" aria-required="true" />
          </FormGroup>
          <SubmitButton>Sign Up</SubmitButton>
        </Form>
      </Wrapper>
    </Main>
  )
}

export default SignUp
