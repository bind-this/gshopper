const router = require('express').Router()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: process.env.EMAIL_CONFIG
})

router.post('/', (req, res, next) => {
  transporter.sendMail(req.body, (err, info) => {
    if (err) next(err)
    else res.json(info.response)
  })
})

module.exports = router
