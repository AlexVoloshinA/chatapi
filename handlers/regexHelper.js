exports.emailReqExp = hasApropriateEmail;
exports.textIsNotEmpty = anyChar;
exports.textHasApproptiateLength = hasAnyLength;

function anyChar(str){
    return /[a-zA-Z0-9<>()\[\]\\.,;:\s@]+/.test(str);
}

function hasAnyLength(str){
    return /^([a-zA-Z0-9<>()\[\]\\.,;:\s@ ]){1,101}$/.test(str);
}

function hasApropriateEmail(str){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
}

