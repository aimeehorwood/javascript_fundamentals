const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
}

const notifyByText = (number) => {
    return `Text sent to: ${number}`;
}

const notify = (message, notifyFunction) => {
    return notifyFunction(message);
}

// notify("hello@makers.tech.test",notifyByEmail);
//'Email sent to: hello@makers.tech.test'

// notify("+10000000000", notifyByText);
//'Text sent to: +10000000000'


