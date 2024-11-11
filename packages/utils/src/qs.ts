export function parse(str: string, result: Record<string, string> = {}) {
  str.split('&').forEach((pair) => {
    if (!pair) return
    const [key, value] = pair.split('=')
    if (key) {
      result[key] = value
    }
  })
  return result
}

/**
 * https://xxx/index.html?a=1&b=2#/sub?c=3&d=4?e=5
 * hash #/sub?c=3&d=4?e=5
 * search ?a=1&b=2
 * return { a: '1', b: '2', c: '3', d: '4', e: '5' }
 */
export function qs(url?: string) {
  const result: Record<string, string> = {}

  try {
    const [search, hash = ''] = url.split('#')

    const searchMatch = search.match(/\?([^?#]*)/)
    if (searchMatch) {
      parse(searchMatch[1], result)
    }

    const hashMatch = hash.match(/\?([^?#]*)/g)
    if (hashMatch) {
      hashMatch.forEach((query) => {
        parse(query.slice(1), result)
      })
    }

    return result
  } catch (e) {
    return result
  }
}
