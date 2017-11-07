const router = require('express').Router()
const nodemailer = require('nodemailer')

const emailConfig = require('../../secrets')

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

module.exports = router
