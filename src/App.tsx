import { useState } from 'react'
import { Welcome } from './components/Welcome'
import { End } from './components/End'
import { SchemaValidationStep } from './components/SchemaValidationStep'
import Ajv from 'ajv'

export const App = () => {
  const [step, setStep] = useState(0)
  const goToNext = () => setStep((prev) => prev + 1)
  const ajv = new Ajv()

  const isValidSchema = (value: string) => {
    if (value === '') return 'Nice try! But you need to enter a JSON Schema to proceed.'
    try {
      const schema = JSON.parse(value)
      if (ajv.validateSchema(schema)) return ''
      else return 'You supplied an invalid JSON schema object!'
    } catch (e) {
      return 'The content you entered is not valid JSON. Please check it again.'
    }
  }

  const numberArraySchemaValidator = (value: string) => {
    if (isValidSchema(value) !== '') return isValidSchema(value)
    const schema = JSON.parse(value)

    if (schema.type === undefined) return 'The schema should have a type property'
    if (schema.type !== 'array') return 'The schema should be an array'
    if (schema.items === undefined) return 'The schema should have an items property'
    if (schema.items.type === undefined) return 'The items property should have a type property'
    if (schema.items.type !== 'number') return 'The schema should have items of type number'

    return ''
  }

  const steps = [
    <Welcome key={0} goToNext={goToNext} />,
    <SchemaValidationStep
      key={1}
      goToNext={goToNext}
      problemIndex={1}
      problemName="Hello JSON Schema!"
      problemDescription="To solve this problem, you need to write any valid JSON Schema. Seems easy, right?"
      validator={isValidSchema}
    />,
    <SchemaValidationStep
      key={2}
      goToNext={goToNext}
      problemIndex={2}
      problemName="Number Array Schema"
      problemDescription="To solve this problem, you need to write a JSON Schema for an array of numbers."
      validator={numberArraySchemaValidator}
    />,
    <End key={3} />
  ]

  return <>{steps[step]}</>
}
