import * as z from 'zod'
import type { MediaToolOptions } from '../types'

export const tagOptionSchema = z.object({
  label: z.string().trim().min(1, { message: 'Label cannot be empty' }),
  value: z.string().trim().min(1, { message: 'Value cannot be empty' })
})

export const tagFormSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' })
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createAssetFormSchema = (languages: MediaToolOptions['languages']) => {
  const defaultLanguage = languages.find(lang => lang.default)

  return z.object({
    altText: z.string().trim().optional(),
    altTexts: z.record(z.string().nullable()).refine(
      altTexts => {
        // Check if default language has alt text
        if (defaultLanguage) {
          const defaultText = altTexts[defaultLanguage.code]
          return defaultText !== null && defaultText !== undefined && defaultText.trim().length > 0
        }
        // Fallback: at least one language should have alt text
        return Object.values(altTexts).some(
          text => text !== null && text !== undefined && text.trim().length > 0
        )
      },
      {
        message:
          'The default language must have alt text. Please fill in the default language and click "Save and close".'
      }
    ),
    creditLine: z.string().trim().optional(),
    description: z.string().trim().optional(),
    opt: z.object({
      media: z.object({
        tags: z.array(tagOptionSchema).nullable()
      })
    }),
    originalFilename: z.string().trim().min(1, { message: 'Filename cannot be empty' }),
    title: z.string().trim().optional()
  })
}
