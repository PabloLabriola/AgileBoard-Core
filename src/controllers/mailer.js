import mailer from "../utils/nodemailer.js";

async function sendMail(res, req) {
  try {
    // const to = req.body.to;
    // const subject = req.body.subject;
    // await mailer.sendEmail(to, subject);
    await mailer.test();

    return res.send({ status: "success" });
  } catch (error) {
    console.log("el error: " + error);
  }
}

export default { sendMail };
