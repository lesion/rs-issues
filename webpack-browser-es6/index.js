// require remotestoragejs
import RemoteStorage from 'remotestoragejs'

const rs = new RemoteStorage()
rs.displayWidget()
rs.access.claim('bookmarks','rw')

import bookmarks from 'remotestorage-module-bookmarks'
var bookmark = {url: 'http://remotestorage.io', title: 'title'}
rs.bookmarks.archive.store(bookmark)


