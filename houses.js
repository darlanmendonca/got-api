
module.exports = {
  list,
}

function list(req, res) {
  const query = req.query.query || ''
  const search = RegExp(query.split('').join('.*'), 'i')
  const houses = require('./houses.json')
  const paginate = require('paginate-array')

  const limit = req.query.limit || 10
  const page = req.query.page || 1
  

  const data = query
    ? houses.filter(item => search.test(item))
    : houses

  const items = paginate(data, page, limit)
  
  res
    .set('X-Pages', items.totaPages)
    .set('X-Current-Page', items.currentPage)
    .set('X-Total', items.total)
    .json(items.data)
}