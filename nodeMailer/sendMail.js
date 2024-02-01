const nodeMailer = require ('nodemailer');
const emailid = ['meghatp12345@gmail.com'];
const sendMail = async (emailid,otp) => {
    const transporter = nodeMailer.createTransport({
        host : "smtp.gmail.com",
        port : 465,
        secure : true,
        auth:{
            user : "meghatp12345@gmail.com",
            pass : "przl kgeo gykf rztm",
        },
    });
    const info = await transporter.sendMail({
        from : '"nodemailer"<meghatp12345@gmail.com>',
        to : emailid,
        subject : "Otp",
        html : `<h2>${otp}</h2>`,
    })
}
module.exports=sendMail;