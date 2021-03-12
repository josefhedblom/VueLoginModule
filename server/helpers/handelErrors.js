const handelErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {username: '', email: '', password:'', duplicateErrors: ''}

    // duplicate email
    if(err.code === 11000) {
        errors.duplicateErrors = "Email is already registered"
        return errors;
    }

    // validation erros
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
            console.log(errors);
        });
    }
    return errors;
};

module.exports = handelErrors;