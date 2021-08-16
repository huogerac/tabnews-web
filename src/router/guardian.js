function allowed(meta) {
  if (meta.permission == '*') {
    return true
  }

  return false
}

function proceed(to, next) {
  const pagePermission = to.meta
  if (!allowed(pagePermission)) {
    next({ name: '403' })
  }
  next()
}

export default function (to, from, next) {
  proceed(to, next)
}
