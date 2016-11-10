// require remotestoragejs
import RemoteStorage from 'remotestoragejs'
import 'remotestorage-widget'
import 'remotestorage-module-bookmarks'

let rs = new RemoteStorage()
rs.displayWidget()

rs.access.claim('bookmarks','rw')
var bookmark = {url: 'http://remotestorage.io', title: 'title'}
rs.bookmarks.archive.store(bookmark)


