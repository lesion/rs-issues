// require remotestoragejs
require('remotestoragejs/release/stable/remotestorage.amd.js')
window.tv4 = require('tv4')

var rs = new RemoteStorage()
rs.displayWidget()
rs.access.claim('bookmarks','rw')

require('remotestoragejs-modules/dist/bookmarks')
var bookmark = {url: 'http://remotestorage.io', title: 'title'}
rs.bookmarks.archive.store(bookmark)


