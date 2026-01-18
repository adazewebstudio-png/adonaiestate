import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Adonai Estate Studio',

    projectId: 'w50u4jfs',
    dataset: 'production',

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
})
