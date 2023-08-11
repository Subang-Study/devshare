import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'
import { VscCircleFilled } from 'react-icons/vsc'
import Txt from './Txt'

interface IInputErrorProps {
  errors: FieldErrors
  name: string
}

export default function InputError({ errors, name }: IInputErrorProps) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <Txt color="red" typography="p" textStyle="bold" className="flex items-center">
          <VscCircleFilled /> {message}
        </Txt>
      )}
    />
  )
}
