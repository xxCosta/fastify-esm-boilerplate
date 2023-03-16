import Fastify from 'fastify'
import route1 from './routes/route1.js'

const fastify = Fastify({
  logger: true
})

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

fastify.register(route1) 

  /**
   * Run the server!
   */
  const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()