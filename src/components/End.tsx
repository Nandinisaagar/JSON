import { Flex, Title, Text } from '@mantine/core'

export const End = () => {
  return (
    <Flex align="center" justify="center" style={{ height: '100vh' }} direction="column" gap="lg">
      <Title order={2}>And that is a wrap!</Title>
      <Text>
        Congratulations on completing the overview! We hope you had a great time learning with us. We are excited to see
        what you will build next. 🚀
      </Text>
    </Flex>
  )
}
