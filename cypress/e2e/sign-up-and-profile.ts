import { buildUser } from '../support/generate'

beforeEach(() => {
  indexedDB.deleteDatabase('firebaseLocalStorageDb')
  cy.visit('/sign-up')
})

it('Should be able to sign up, go to their profile, and edit their profile.', () => {
  const user = buildUser()

  cy.findByLabelText('Full Name*').type(user.fullname)
  cy.findByLabelText('Email*').type(user.email)
  cy.findByLabelText('Password*').type(user.password)

  cy.findByRole('button', { name: 'Sign Up' }).click()

  cy.findByText(
    `Congrats ${user.fullname}, you successfully signed up!`
  ).should('exist')

  // Should be on edit profile page and authenticated
  cy.findByRole('link', { name: 'To Profile' }).should('exist')
  cy.findByRole('heading', { level: 1, name: 'Edit your profile' }).should(
    'exist'
  )

  // Edit profile
  cy.findByRole('img', { name: 'Default Avatar' }).should('exist')
  cy.findByRole('heading', { level: 2, name: user.fullname }).should('exist')

  // Avatar upload
  cy.findByLabelText('Upload Avatar').attachFile('naruto-face.jpg')
  cy.findByRole('status', { name: 'loading' }).should('exist')
  cy.findByText('Successfully uploaded your new avatar!').should('exist')

  // Avatar should no longer be the default avatar.
  cy.findByRole('img', { name: user.fullname }).should('exist')

  cy.findByLabelText('Taste of music').type(user.tasteOfMusic)

  // Save changes
  cy.findByRole('button', { name: 'Save' }).click()
  cy.findByRole('loading')
  cy.findByText('Successfully updated your profile!').should('exist')

  // Redirected to profile page
  cy.findByRole('heading', {
    level: 1,
    name: `${user.fullname} Profile`,
  }).should('exist')
  cy.findByRole('img', { name: user.fullname }).should('exist')
  cy.findByRole('heading', { level: 2, name: user.fullname }).should('exist')
  cy.findByText(user.tasteOfMusic).should('exist')

  // Go back to edit
  cy.findByRole('button', { name: 'Edit Profile' }).click()
  cy.findByRole('heading', { level: 1, name: 'Edit your profile' }).should(
    'exist'
  )

  // Cancel edit
  cy.findByRole('button', { name: 'Cancel' }).click()

  // Back to profile page
  cy.findByRole('heading', {
    level: 1,
    name: `${user.fullname} Profile`,
  }).should('exist')
})
