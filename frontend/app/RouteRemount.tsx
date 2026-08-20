"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

/**
 * Forces a full unmount/remount of the page tree on every route change.
 * Next's client router cache can otherwise restore a previously-rendered
 * page without re-running mount, which leaves Framer Motion's `initial`
 * state (e.g. opacity: 0) stuck since `animate` never gets a fresh mount
 * to transition from. No animation happens here on purpose — this only
 * guarantees each page's own entrance animations get a real mount to fire
 * on, instead of layering a second transition on top of them.
 */
export default function RouteRemount({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <div key={pathname}>{children}</div>
}
