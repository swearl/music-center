const storage = {
    PREFIX: 'mc',
    del(name) {
        const key = `${this.PREFIX + name}`
        localStorage.removeItem(key)
    },
    get(name, def = '') {
        const key = `${this.PREFIX + name}`
        return localStorage.getItem(key) || def
    },
    set(name, val) {
        const key = `${this.PREFIX + name}`
        localStorage.setItem(key, val)
    },
    getJSON(name, def = '{}') {
        const data = this.get(name, def)
        return JSON.parse(data)
    },
    setJSON(name, value) {
        this.set(name, JSON.stringify(value))
    }
}

export default storage
