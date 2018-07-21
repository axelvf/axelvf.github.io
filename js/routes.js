var geturl = String.prototype.toLowerCase.apply(window.location.href);
if (geturl.indexOf('wp-admin') !== -1) {
    document.write("This is not a Wordpress site :)");
} else if (geturl.indexOf('linkedin') !== -1) {
    window.location.href = ('https://www.linkedin.com/in/axelvasquez');
} else if (geturl.indexOf('twitter') !== -1) {
    window.location.href = ('https://twitter.com/axelvf');
} else if (geturl.indexOf('github') !== -1) {
    window.location.href = ('https://github.com/axelvf');
} else {
    window.location.href = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
}
