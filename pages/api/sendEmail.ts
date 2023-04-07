import { result } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';

// const sgMail = require('@sendgrid/mail');
const Mailjet = require('node-mailjet');

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;
  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_SECRET,
  });
  try {
    const request = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'sales@blinktime.io',
          },
          To: [
            {
              Email: 'sales@blinktime.io',
              Name: name,
            },
          ],

          Subject: subject,
          TextPart: description,
          HTMLPart: `<div>
          <h1>Name: ${name}</h1>
          <h1>E-mail: ${email}</h1>
          <p>${description}</p>
          <p>Sent from: ${referer || 'Not specified or hidden'}`,
        },
      ],
    });

    res.status(204).send({ message: request.response.data });
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
