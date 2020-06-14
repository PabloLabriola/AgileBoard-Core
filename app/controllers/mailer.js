import nodemailer from "nodemailer";

async function main() {
  let testAccount = await nodemailer.createTestAccount(apiUrl, callback)
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
      user: 'dariodigulio@gmail.com',
      pass: '301193dario',
    },
  });

  let info = await transporter.sendMail({
    from: '"Freed Foo" <foo@example.com>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔",
    text: "Hello world",
    html: "<b>Hello world</b>",
  });

  console.log("Mesasage sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);var
