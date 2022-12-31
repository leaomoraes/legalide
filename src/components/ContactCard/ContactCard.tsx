import { memo } from 'react'

import { IconType } from 'react-icons'

import { ContactCardContainer } from './ContactCardContainer'

interface IContactCardProps {
  icon: IconType
  emails?: string[]
  children?: React.ReactNode
}

const ContactCard: React.FC<IContactCardProps> = ({ icon, emails }) => {
  const Icon = icon

  return (
    <ContactCardContainer className="py-5 text-center ">
      <div>
        <Icon size="48" color="#295C7A" />
      </div>
      <div>
        {emails &&
          emails.map((email) => (
            <p key={email} className="text-center">
              {email}
            </p>
          ))}
      </div>
      <h5>Get Support</h5>
      <div>
        <button type="button" className="btn-squared-outline">
          Submit Request
        </button>
      </div>
    </ContactCardContainer>
  )
}
export default memo(ContactCard)
