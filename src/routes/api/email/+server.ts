import { error } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';
import { template } from './template';
import * as path from 'path';


const transporter = nodemailer.createTransport({
  service: "Godaddy",  
  secure: false,
  auth: {
      user: "congreso@avivamientobolivia.com",
      pass: "Avivamiento1973"
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