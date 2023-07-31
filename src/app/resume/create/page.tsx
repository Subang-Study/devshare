import React from 'react'
import CreateProfile from '@/components/client/resumeld/CreateProfile'
import AuthorizedAccess from '@/utils/AuthorizedAccess'

export default function CreateProfilePage() {
  return (
    <AuthorizedAccess>
      <CreateProfile />
    </AuthorizedAccess>
  )
}
