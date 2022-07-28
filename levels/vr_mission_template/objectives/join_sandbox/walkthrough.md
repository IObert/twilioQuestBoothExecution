# Rules and Best Practices for WhatsApp Messaging on Twilio

WhatsApp messages are subject to certain rules and restrictions that do not apply to standard Twilio Programmable SMS and MMS messages. For best results, it’s important to understand the concepts of “templates” and “sessions,” and design your messaging flow to follow WhatsApp’s rules.

## Templates and Sessions

WhatsApp divides messages into two different types: Template messages and Session messages.

- **Template messages**: Outbound messages sent via Twilio that use one of the pre-approved templates. These are generally unsolicited transactional messages (delivery alerts, appointment reminders, etc.) sent to users who have opted in to receive messages from you.

- **Session messages**: All incoming messages, or outgoing replies to these messages within 24-hours. A messaging session starts when a user sends your application a message, and lasts for 24 hours from the most recently received message. Session messages do not need to follow a template, and can include media attachments.

## Messaging limitations
Twilio's platform has a 1,600 GSM character limit for a single API request. For more details, please see [What is the Maximum Length for Messages Sent with Twilio Programmable Messaging](https://support.twilio.com/hc/en-us/articles/360033806753-What-is-the-Maximum-Length-for-Messages-Sent-with-Twilio-Programmable-Messaging-).

WhatsApp also applies limits to the number of messages that can be sent to their users. For more information, see [WhatsApp Rate Limiting](https://support.twilio.com/hc/en-us/articles/360024008153-WhatsApp-Rate-Limiting).

## Template limitations 
Newlines are forbidden within placeholders. More information on this Facebook limitation here
No more than 4 consecutive spaces are allowed in message templates.