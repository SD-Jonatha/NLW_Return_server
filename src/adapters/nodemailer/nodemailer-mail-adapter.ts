import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "06bcf49ccaebe9",
    pass: "d17c974bd33d1c"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Thiago Santos <thiago.infortec@gmail.com>',
    subject,
    html: body,
  })
};
}