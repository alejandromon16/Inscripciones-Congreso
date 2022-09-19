import { error } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "congreso@avivamientobolivia.com",
      pass: "Avivamiento1973", // generated ethereal password
    },
});


const sendEmail = async (email:string) => {
    const options = {
        from: "congreso@avivamientobolivia.com",
        to: email,
        subject: "Inscripcion Congreso Sedientos por un Avivamiento",
        text: "Gracias por inscribirte"
    }
    const response = await transporter.sendMail(options)
    if(response) return "success";
    return "failed";
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {

  const email = url.searchParams.get('email');
  const response = await sendEmail(email);
  if(response == "success") new Response('success')

  throw error(400, 'No su pudo enviar correo');
}