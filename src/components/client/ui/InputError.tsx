import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'
import { VscCircleFilled } from 'react-icons/vsc'
import Txt from './Txt'

interface IInputErrorProps {
  errors: FieldErrors
  name: string
  msg?: string
  className?: string
}

export default function InputError({ errors, name, msg, className }: IInputErrorProps) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <Txt color="red" fontSize="error" className={`flex items-center ${className}`}>
          <VscCircleFilled /> {msg || message}
        </Txt>
      )}
    />
  )
}
