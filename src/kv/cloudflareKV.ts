import type { KVNamespace } from '@cloudflare/workers-types'
import { CivilMemoryKV } from '../types'

export function cloudflareKV({
 binding,
}: {
 binding: KVNamespace
}): CivilMemoryKV {
 return {
  delete(key) {
   return binding.delete(key)
  },
  get(key) {
   return binding.get(key)
  },
  set(key, value) {
   return binding.put(key, value)
  },
 }
}

export type CloudflareKV = typeof cloudflareKV & { name: 'cloudflareKV' }
