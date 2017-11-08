const router = require('express').Router()
const nodemailer = require('nodemailer')

if (!process.env.EMAIL_ACCOUNT || !process.env.EMAIL_PASSWORD) {
  console.log('Skipping Email Confirmation, credentials not found.')
} else {
  const emailConfig = {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: emailConfig
  })

  router.post('/', (req, res, next) => {
    transporter.sendMail(req.body, (err, info) => {
      if (err) next(err)
      else res.json(info.response)
    })
  })
}

module.exports = router
