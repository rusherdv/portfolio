import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
});

export async function POST(request) {
    try {
        const body = await request.json();

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: 'development093@gmail.com',
            subject: 'Nuevo mensaje de rusher.net.ar',
            text: `Nuevo email\n
Nombre: ${body.name}\n
De: ${body.email}\n
Mensaje: ${body.message}`,
        };

        // Envía el correo de manera asíncrona
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);

        return NextResponse.json({ success: true, message: 'Correo enviado exitosamente' });
    } catch (error) {
        console.log('Error al enviar el correo:', error);
        return NextResponse.json({ success: false, message: 'Error al enviar el correo', error: error.message });
    }
}
