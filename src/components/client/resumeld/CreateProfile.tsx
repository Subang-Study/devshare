'use client'

/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

export interface Field {
  label: string
  value: string
}

interface CreateProfileProps {
  onSubmit: (name: string, description: string, fields: Field[]) => void
}

export default function CreateProfile({ onSubmit }: CreateProfileProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [fields, setFields] = useState<Field[]>([{ label: '', value: '' }])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const handleFieldChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedFields = [...fields]
    updatedFields[index] = { ...updatedFields[index], value: e.target.value }
    setFields(updatedFields)
  }

  const handleAddField = () => {
    const newField: Field = { label: '', value: '' }
    setFields([...fields, newField])
  }

  const handleRemoveField = (index: number) => {
    const updatedFields = [...fields]
    updatedFields.splice(index, 1)
    setFields(updatedFields)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, description, fields)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} />

        <div className="flex flex-col">
          <label htmlFor="fields">Fields:</label>
          {fields.map((field, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                id={`field-${index}`}
                value={field.value}
                onChange={(e) => handleFieldChange(index, e)}
              />
              <button type="button" onClick={() => handleRemoveField(index)}>
                Remove Field
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddField}>
            Add Field
          </button>
        </div>
      </div>

      <button type="submit">Save</button>
    </form>
  )
}
