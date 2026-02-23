export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  
  app: {
    head: {
      title: 'SchemaForge - API Schema Generator',
      meta: [
        { name: 'description', content: 'Generate OpenAPI schemas from your code automatically' }
      ]
    }
  }
})
