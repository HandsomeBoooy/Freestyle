function templateVariablesIntoHTML(_html, obj) {
    return _html.replace(/\{\{\s?((?:.|\r?\n)+?)\s?\}\}/g, (a, b) => obj[b]);
}

function bindEventsToHTML(_html, obj) {
    return _html.replace(/\@\s?((?:.|\r?\n)+?)\s?\@/g, (a, b) => obj[b]);
}