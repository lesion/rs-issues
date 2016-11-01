// require remotestoragejs
import RemoteStorage from 'remotestoragejs'
import bookmarks from 'remotestorage-module-bookmarks'
import 'remotestorage-widget'

bookmarks(RemoteStorage)
const rs = new RemoteStorage()
rs.displayWidget()

rs.access.claim('bookmarks','rw')
var bookmark = {url: 'http://remotestorage.io', title: 'title'}
rs.bookmarks.archive.store(bookmark)


