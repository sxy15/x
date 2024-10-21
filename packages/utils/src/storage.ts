const reg = /onlineactivity\/(.*)\/index.html/
const match = location.href.match(reg)?.[1] ?? ''

class Storage {
  match: string | undefined = `LOC_${match}_`

  get(key: string) {
    const value = localStorage.getItem(`${this.match}${key}`) || '{ data: null }'

    const _data = JSON.parse(value)
    
    return _data.data
  }

  set(key: string, value: any) {
    const _value = { data: value }
    localStorage.setItem(`${this.match}${key}`, JSON.stringify(_value))
  }

  remove(key: string) {
    localStorage.removeItem(`${this.match}${key}`)
  }
}

const storage = new Storage()

export { storage }
