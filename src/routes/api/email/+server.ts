import { error } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';
import { template } from './template';
import * as path from 'path';


const transporter = nodemailer.createTransport({
  host: 'email-smtp.sa-east-1.amazonaws.com',
  port: 587,
  secure: false,
  auth: {
      user: "AKIAVZ2VV4BNO7WPTNWV",
      pass: "BLVLw46am+NCACRVR/cOxUdbf2ZPYaJVcMdmmQ2XYrDg"
  }
});


const sendEmail = async (email:string) => {
  
    const options = {
        from: "congreso@avivamientobolivia.com",
        to: email,
        subject: "Inscripcion Congreso Sedientos por un Avivamiento",
        html: template,
    }
    const response = await transporter.sendMail(options)
    if(response) return response.accepted;
    return "failed";
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const email = url.searchParams.get('email');
  const response = await sendEmail(email);
  if(response) return new Response(String(response));

  throw error(400, 'No su pudo enviar correo');
}