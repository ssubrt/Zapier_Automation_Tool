import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  



export async function sendEmail(to:string, body:string){

  
     await transport.sendMail({
      from: "subratgangwar03@gmail.com",
      sender: "subratgangwar03@gmail.com",
      to,
      subject: "Contact Form Submission",
      text: body,
  });

    

}