'use client'

/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import CreateProfile, { Field } from '@/components/client/resumeld/CreateProfile'
import { createProfile } from '@/pages/api/resumeld/[createProfile]'

export default function CreateProfilePage() {
  const handleSubmit = (name: string, description: string, fields: Field[]) => {
    createProfile(name, description, fields)
  }

  return (
    <div>
      <h1>Create Profile</h1>
      <CreateProfile onSubmit={handleSubmit} />
    </div>
  )
}
