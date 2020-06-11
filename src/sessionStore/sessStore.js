// 从sessionStorage中获取数据，所有数据都放到_data对象下，方便刷新，删除_data所有数据
const _sessionStorageGet = name => {
    const data = JSON.parse(sessionStorage.getItem('_data'))
    return data && data[name] ? data[name] : null
}

// 设置sessionStorage数据
const _sessionStorageSet = (name, obj) => {
    const data = JSON.parse(sessionStorage.getItem('_data'))

    let setData = data ? Object.assign(data, { [name]: obj }) : { [name]: obj }
    sessionStorage.setItem('_data', JSON.stringify(setData))
}

// 添加数据，判断是新增数据还是更新数据
export function storageAdd(route, data) {
    let name = route.split('/')[1]
    let obj = _sessionStorageGet(name)

    let params = obj ? Object.assign(obj, { [route]: data }) : { [route]: data }
    _sessionStorageSet(name, params)
}

// 获取数据
export function storageGet(route) {
    let name = route.split('/')[1]
    let obj = _sessionStorageGet(name)
    if (obj && obj[route]) {
        return obj[route]
    }
}

// 删除sessionStorage里数据
export function storageDelete(route) {
    let name = route.split('/')[1]
    let obj = {}
    if (name) {
        obj = _sessionStorageGet(name)

        if (obj && obj[route]) {
            delete obj[route]
        }
        _sessionStorageSet(name, obj)
    }
}