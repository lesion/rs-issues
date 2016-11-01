// require remotestoragejs
var RemoteStorage = require('remotestoragejs')

require('remotestorage-widget')
require('remotestorage-module-bookmarks')(RemoteStorage);

var rs = new RemoteStorage()
rs.displayWidget()
rs.access.claim('bookmarks','rw')

var bookmark = {url: 'http://remotestorage.io', title: 'title'}
rs.bookmarks.archive.store(bookmark)


