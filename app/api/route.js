var quickemailverification = require('quickemailverification')
  .client(process.env.QUICK_EMAIL_VERIFICATION_API)
  .quickemailverification()

export async function POST(request) {
  const formData = await request.formData()
  let email = formData.get('email')

  try {
    const response = await new Promise((resolve, reject) => {
      quickemailverification.verify(email, (err, response) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          resolve(response)
        }
      })
    })

    return Response.json({
      data: response.body,
      status: response.code,
    })
  } catch (error) {
    return Response.json({
      data: error,
      status: 500,
    })
  }
}
