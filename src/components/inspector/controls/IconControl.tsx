import React, { ReactNode } from 'react'
// import * as Chakra from '@chakra-ui/react'
import FormControl from './FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import InputSuggestion from '~components/inspector/inputs/InputSuggestion'
import { Combobox } from '@headlessui/react'
import icons from '~iconsList'

type IconControlProps = {
  name: string
  label: string | ReactNode
}

const IconControl: React.FC<IconControlProps> = ({ name, label }) => {
  const { setValueFromEvent } = useForm()
  const value = usePropsSelector(name)

  return (
    <FormControl label={label} htmlFor={name}>
      <InputSuggestion
        value={value}
        handleChange={setValueFromEvent}
        name={name}
      >
        {(Object.keys(icons) as Array<keyof typeof icons>)
          .filter(icon => icon.includes(value) || !value)
          .map((icon, index) => {
            const IconComponent = icons[icon]
            return (
              <Combobox.Option key={index} value={icon}>
                <IconComponent
                  // @ts-ignore
                  path=""
                />
              </Combobox.Option>
            )
          })}
      </InputSuggestion>
    </FormControl>
  )
}

export default IconControl
