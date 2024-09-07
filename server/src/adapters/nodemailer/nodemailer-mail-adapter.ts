import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "03ea00e2a44a1d",
        pass: "d1e6ffeadf4639"
    }
});

export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Beatriz Paixão (guria na web) <biaperon2001@gmail.com>",
            subject,
            html: body,
        })
    }
}