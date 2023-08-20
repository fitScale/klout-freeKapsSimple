import nodemailer from "nodemailer";

export async function sendMail(
  subject: string,
  toEmail: string,
  otpText: string
): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  try {
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
    return true;
  } catch (error) {
    console.error(`Error in sending email: ${error}`);
    return false;
  }
}
