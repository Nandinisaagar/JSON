import { useState } from 'react'
import { Button, Flex, Text, Textarea, Title } from '@mantine/core'
import { notifications } from '@mantine/notifications'

type PropType = {
  problemIndex: number
  problemName: string
  problemDescription: string
  validator: (value: string) => string
  goToNext: () => void
}

export const SchemaValidationStep = (props: PropType) => {
  const [value, setValue] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = () => {
    if (props.validator(value).length === 0) {
      notifications.show({
        title: 'You are amazingly correct! 🎉',
        message: 'Onwards to the next step! 🚀',
        color: 'teal',
        size: 'md'
      })
      props.goToNext()
    } else {
      notifications.show({
        title: 'Oops! This seems to be incorrect! 😢',
        message: 'Please try again! 🧐 We are sure that you would crack it soon!',
        color: 'red',
        size: 'md'
      })
      setErrorMessage(props.validator(value))
    }
  }

  return (
    <Flex align="center" justify="center" style={{ height: '100vh' }} direction="column" gap="lg">
      <Title order={2}>
        {props.problemIndex}. {props.problemName}
      </Title>
      <Text>{props.problemDescription}</Text>
      <Textarea
        radius="md"
        label="Input label"
        withAsterisk
        description="Enter your JSON Schema here"
        error={errorMessage}
        rows={10}
        w={400}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Flex>
  )
}
