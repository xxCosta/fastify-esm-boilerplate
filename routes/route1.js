import * as dotenv from 'dotenv'
dotenv.config()

async function route1 (fastify, options) {
    fastify.decorateRequest('name', null)

    fastify.addHook('preHandler', async(req,reply)=>{
        req.name="yo mama"
    })
    
    fastify.get('/route1/test', async(req, reply) =>{
        return {whatsup: req.name} 
    
    })
    fastify.get('/route1', async (req, reply ) => {
      })
  }

  export default route1


