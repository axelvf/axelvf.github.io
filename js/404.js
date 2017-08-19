var geturl = String.prototype.toLowerCase.apply(window.location.href);
if (geturl.indexOf('wp-admin') !== -1) {
    document.write("This is not a Wordpress site :)");
} else {
    window.location.href = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
}
