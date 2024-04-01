import { Flex, Title, Text, Button } from '@mantine/core'
import { notifications } from '@mantine/notifications'

type PropType = {
  goToNext: () => void
}

export const Welcome = (props: PropType) => {
  const handleClick = () => {
    notifications.show({
      title: 'Yuhu! 🎉',
      message: 'Onwards to the next step! 🚀',
      color: 'teal',
      size: 'md'
    })
    props.goToNext()
  }

  return (
    <Flex align="center" justify="center" style={{ height: '100vh' }} direction="column" gap="lg">
      <Title order={2}>Welcome to JSON Schema!</Title>
      <Text>
        Thanks for your interest in the project. We promise to make sure this learning experience a smooth ride for you.
      </Text>
      <Button onClick={handleClick}>Get Started</Button>
    </Flex>
  )
}
