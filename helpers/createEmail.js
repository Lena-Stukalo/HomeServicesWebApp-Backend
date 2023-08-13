const { BASE_URL } = process.env;
const createVerifyEmail = (email, Token, option) => {
  const mail = {
    to: email,
    subject: `${option}`,
    html: `<a target="_blank" href="${BASE_URL}/api/auth/${option}/${Token}">Click me to ${option}</a>`,
    text: "Nice to see you",
  };
  return mail;
};
module.exports = createVerifyEmail;
