import { useState, useEffect } from 'react'
import localForage from 'localforage'
const isObjectLiked = (value: { constructor: { name: string } }) =>
  value.constructor.name === 'Array' || value.constructor.name === 'Object'

const rehydrate = (value: any, defaultValue?: any) => {
  if (!value) return defaultValue
  // if (value === 'false') str = false;
  // if (value === 'true') str = true;
  if (isObjectLiked(value)) {
    return value
  }
  try {
    const parse = JSON.parse(value)
    return parse
  } catch (err) {
    return defaultValue
  }
}

const hydrate = (value: any) => {
  if (!isObjectLiked(value)) {
    return value
  }
  return JSON.stringify(value)
}
const createMigration = (
  opts: { key: string; version: string | number; migrate: any },
  data: unknown
) => {
  return new Promise((resolve, reject) => {
    const key = `${opts.key}-version`
    localForage.getItem(key, (err, version) => {
      if (version !== opts.version) {
        data = opts.migrate(data)
        localForage.setItem(opts.key, rehydrate(data), (err) => {
          if (err) return reject(err)
          localForage.setItem(key, opts.version, (err) => {
            if (err) return reject(err)
            return resolve(data)
          })
        })
      } else {
        resolve(data)
      }
    })
  })
}

const config = {
  key: '@session',
  version: 1,
  migrate: (state: any) => {
    return { ...state }
  },
}

export const useLocalforage = (
  state: unknown,
  setState: { (payload: any): void; (arg0: unknown): void }
) => {
  const [rehydrated, setRehydrated] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function init() {
      await localForage.getItem(config.key, (err, value) => {
        if (err) {
          setRehydrated(true)
          return setError(err)
        }
        // Migrate persisted data
        const restoredValue = rehydrate(value)
        if (typeof config.migrate === 'function') {
          createMigration(config, restoredValue)
            .then((data) => setState(data))
            .then(() => setRehydrated(true))
        } else {
          setState(restoredValue)
          setRehydrated(true)
        }
      })
    }
    init()
  }, [])

  useEffect(() => {
    // if (isNil(state) || isEmpty(state)) {
    //   localForage.removeItem(config.key);
    // }
    localForage.setItem(config.key, hydrate(state))
  }, [state])

  return {
    rehydrated,
    error,
  }
}
