module.exports = async (helper) => {
  const secretCodeFromTwiML = helper.getNormalizedInput("secretCode");

  console.log(secretCodeFromTwiML)

  if (!secretCodeFromTwiML.includes("twilioquest")) {
    return helper.fail(`
      Please enter the secret code from the Twilio Whatsapp Bot
    `);
  }

  // If we have seen both inbound and outbound whatsapp messages we can
  // assume they are set up
  helper.success(
    `
      Woot! It looks like you've successfully started a messaging session. You know what's app with this.
    `,
    [{ name: "WHATSAPP_NUMBER", value: `whatsapp:+4915735987400` }]
  );
};
