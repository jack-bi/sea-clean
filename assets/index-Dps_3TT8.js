;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const i = {}
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const i = n(r)
    fetch(r.href, i)
  }
})()
/**
 * @vue/shared v3.5.45
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Us(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const ue = {},
  jt = [],
  st = () => {},
  di = () => !1,
  Wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  qn = (e) => e.startsWith('onUpdate:'),
  ve = Object.assign,
  ks = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  $o = Object.prototype.hasOwnProperty,
  Y = (e, t) => $o.call(e, t),
  B = Array.isArray,
  wt = (e) => Rn(e) === '[object Map]',
  Dn = (e) => Rn(e) === '[object Set]',
  hr = (e) => Rn(e) === '[object Date]',
  k = (e) => typeof e == 'function',
  pe = (e) => typeof e == 'string',
  it = (e) => typeof e == 'symbol',
  te = (e) => e !== null && typeof e == 'object',
  hi = (e) => (te(e) || k(e)) && k(e.then) && k(e.catch),
  pi = Object.prototype.toString,
  Rn = (e) => pi.call(e),
  Uo = (e) => Rn(e).slice(8, -1),
  gi = (e) => Rn(e) === '[object Object]',
  Ks = (e) => pe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  on = Us(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  zn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  ko = /-\w/g,
  Le = zn((e) => e.replace(ko, (t) => t.slice(1).toUpperCase())),
  Ko = /\B([A-Z])/g,
  Gt = zn((e) => e.replace(Ko, '-$1').toLowerCase()),
  Jn = zn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  cs = zn((e) => (e ? `on${Jn(e)}` : '')),
  nt = (e, t) => !Object.is(e, t),
  as = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  mi = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  Go = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Wo = (e) => {
    const t = pe(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let pr
const Qn = () =>
  pr ||
  (pr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Gs(e) {
  if (B(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = pe(s) ? Qo(s) : Gs(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (pe(e) || te(e)) return e
}
const qo = /;(?![^(]*\))/g,
  zo = /:([^]+)/,
  Jo = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g
function Qo(e) {
  const t = {}
  return (
    e
      .replace(Jo, (n) => (n.startsWith('/*') ? '' : n))
      .split(qo)
      .forEach((n) => {
        if (n) {
          const s = n.split(zo)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Kt(e) {
  let t = ''
  if (pe(e)) t = e
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = Kt(e[n])
      s && (t += s + ' ')
    }
  else if (te(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Yo =
    'itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly',
  Xo = Us(Yo)
function _i(e) {
  return !!e || e === ''
}
function Zo(e, t, n) {
  if (e.length !== t.length) return !1
  let s = !0
  for (let r = 0; s && r < e.length; r++) s = Yn(e[r], t[r], n)
  return s
}
function gr(e, t, n) {
  if (e.size !== t.size) return !1
  const s = Array.from(t),
    r = new Uint8Array(s.length)
  for (const i of e) {
    let o = -1
    for (let l = 0; l < s.length; l++)
      if (!r[l] && Yn(i, s[l], n)) {
        o = l
        break
      }
    if (o < 0) return !1
    r[o] = 1
  }
  return !0
}
function el(e, t, n) {
  let s = wt(e),
    r = wt(t)
  if (s || r || ((s = Dn(e)), (r = Dn(t)), s || r)) return s && r ? gr(e, t, n) : !1
  const i = Object.keys(e).length,
    o = Object.keys(t).length
  if (i !== o) return !1
  for (const l in e) {
    const c = e.hasOwnProperty(l),
      f = t.hasOwnProperty(l)
    if ((c && !f) || (!c && f) || !Yn(e[l], t[l], n)) return !1
  }
  return String(e) === String(t)
}
function mr(e, t, n, s) {
  n || (n = [new Map(), new Map()])
  const [r, i] = n
  if (r.has(e) || i.has(t)) return r.get(e) === t && i.get(t) === e
  ;(r.set(e, t), i.set(t, e))
  const o = s(e, t, n)
  return (r.delete(e), i.delete(t), o)
}
function Yn(e, t, n) {
  if (e === t) return !0
  let s = hr(e),
    r = hr(t)
  return s || r
    ? s && r
      ? e.getTime() === t.getTime()
      : !1
    : ((s = it(e)),
      (r = it(t)),
      s || r
        ? e === t
        : ((s = B(e)),
          (r = B(t)),
          s || r
            ? s && r
              ? mr(e, t, n, Zo)
              : !1
            : ((s = te(e)), (r = te(t)), s || r ? (!s || !r ? !1 : mr(e, t, n, el)) : String(e) === String(t))))
}
const vi = (e) => !!(e && e.__v_isRef === !0),
  ie = (e) =>
    pe(e)
      ? e
      : e == null
        ? ''
        : B(e) || (te(e) && (e.toString === pi || !k(e.toString)))
          ? vi(e)
            ? ie(e.value)
            : JSON.stringify(e, yi, 2)
          : String(e),
  yi = (e, t) =>
    vi(t)
      ? yi(e, t.value)
      : wt(t)
        ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], i) => ((n[us(s, i) + ' =>'] = r), n), {}) }
        : Dn(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => us(n)) }
          : it(t)
            ? us(t)
            : te(t) && !B(t) && !gi(t)
              ? String(t)
              : t,
  us = (e, t = '') => {
    var n
    return it(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.45
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ce
class tl {
  constructor(t = !1) {
    ;((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this._warnOnRun = !0),
      (this.__v_skip = !0),
      !t &&
        Ce &&
        (Ce.active
          ? ((this.parent = Ce), (this.index = (Ce.scopes || (Ce.scopes = [])).push(this) - 1))
          : ((this._active = !1), (this._warnOnRun = !1))))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) {
        const s = this.scopes.slice()
        for (t = 0, n = s.length; t < n; t++) s[t].pause()
      }
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) {
        const r = this.scopes.slice()
        for (t = 0, n = r.length; t < n; t++) r[t].resume()
      }
      const s = this.effects.slice()
      for (t = 0, n = s.length; t < n; t++) s[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Ce
      try {
        return ((Ce = this), t())
      } finally {
        Ce = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = Ce), (Ce = this))
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ce === this) Ce = this.prevScope
      else {
        let t = Ce
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope
            break
          }
          t = t.prevScope
        }
      }
      this.prevScope = void 0
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        const r = this.scopes.slice()
        for (n = 0, s = r.length; n < s; n++) r[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function nl() {
  return Ce
}
let ae
const fs = new WeakSet()
class bi {
  constructor(t) {
    ;((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ce && (Ce.active ? Ce.effects.push(this) : (this.flags &= -2)))
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), fs.has(this) && (fs.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ci(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;((this.flags |= 2), _r(this), Ai(this))
    const t = ae,
      n = qe
    ;((ae = this), (qe = !0))
    try {
      return this.fn()
    } finally {
      ;(xi(this), (ae = t), (qe = n), (this.flags &= -3))
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) zs(t)
      ;((this.deps = this.depsTail = void 0), _r(this), this.onStop && this.onStop(), (this.flags &= -2))
    }
  }
  trigger() {
    this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Rs(this) && this.run()
  }
  get dirty() {
    return Rs(this)
  }
}
let Ei = 0,
  ln,
  cn
function Ci(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;((e.next = cn), (cn = e))
    return
  }
  ;((e.next = ln), (ln = e))
}
function Ws() {
  Ei++
}
function qs() {
  if (--Ei > 0) return
  if (cn) {
    let t = cn
    for (cn = void 0; t; ) {
      const n = t.next
      ;((t.next = void 0), (t.flags &= -9), (t = n))
    }
  }
  let e
  for (; ln; ) {
    let t = ln
    for (ln = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function Ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t))
}
function xi(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    ;(s.version === -1 ? (s === n && (n = r), zs(s), sl(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r))
  }
  ;((e.deps = t), (e.depsTail = n))
}
function Rs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || (t.dep.computed && (Si(t.dep.computed) || t.dep.version !== t.version)))
      return !0
  return !!e._dirty
}
function Si(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === gn) ||
    ((e.globalVersion = gn), !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Rs(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = ae,
    s = qe
  ;((ae = e), (qe = !0))
  try {
    Ai(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || nt(r, e._value)) && ((e.flags |= 128), (e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;((ae = n), (qe = s), xi(e), (e.flags &= -3))
  }
}
function zs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) zs(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function sl(e) {
  const { prevDep: t, nextDep: n } = e
  ;(t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0)))
}
let qe = !0
const Ri = []
function ot() {
  ;(Ri.push(qe), (qe = !1))
}
function lt() {
  const e = Ri.pop()
  qe = e === void 0 ? !0 : e
}
function _r(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = ae
    ae = void 0
    try {
      t()
    } finally {
      ae = n
    }
  }
}
let gn = 0
class rl {
  constructor(t, n) {
    ;((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0))
  }
}
class Js {
  constructor(t) {
    ;((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(t) {
    if (!ae || !qe || ae === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== ae)
      ((n = this.activeLink = new rl(ae, this)),
        ae.deps
          ? ((n.prevDep = ae.depsTail), (ae.depsTail.nextDep = n), (ae.depsTail = n))
          : (ae.deps = ae.depsTail = n),
        wi(n))
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ae.depsTail),
        (n.nextDep = void 0),
        (ae.depsTail.nextDep = n),
        (ae.depsTail = n),
        ae.deps === n && (ae.deps = s))
    }
    return n
  }
  trigger(t) {
    ;(this.version++, gn++, this.notify(t))
  }
  notify(t) {
    Ws()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      qs()
    }
  }
}
function wi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) wi(s)
    }
    const n = e.dep.subs
    ;(n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e))
  }
}
const ws = new WeakMap(),
  $t = Symbol(''),
  Os = Symbol(''),
  mn = Symbol('')
function Ae(e, t, n) {
  if (qe && ae) {
    let s = ws.get(e)
    s || ws.set(e, (s = new Map()))
    let r = s.get(n)
    ;(r || (s.set(n, (r = new Js())), (r.map = s), (r.key = n)), r.track())
  }
}
function mt(e, t, n, s, r, i) {
  const o = ws.get(e)
  if (!o) {
    gn++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((Ws(), t === 'clear')) o.forEach(l)
  else {
    const c = B(e),
      f = c && Ks(n)
    if (c && n === 'length') {
      const u = Number(s)
      o.forEach((d, p) => {
        ;(p === 'length' || p === mn || (!it(p) && p >= u)) && l(d)
      })
    } else
      switch (((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(mn)), t)) {
        case 'add':
          c ? f && l(o.get('length')) : (l(o.get($t)), wt(e) && l(o.get(Os)))
          break
        case 'delete':
          c || (l(o.get($t)), wt(e) && l(o.get(Os)))
          break
        case 'set':
          wt(e) && l(o.get($t))
          break
      }
  }
  qs()
}
function qt(e) {
  const t = Q(e)
  return t === e || (Ae(t, 'iterate', mn), je(e))
    ? t
    : ct(e)
      ? Ot(e)
        ? t.map((n) => Tt(Ve(n)))
        : t.map(Tt)
      : t.map(Ve)
}
function Xn(e) {
  return (Ae((e = Q(e)), 'iterate', mn), e)
}
function Ze(e, t) {
  return ct(e) ? Tt(Ot(e) ? Ve(t) : t) : Ve(t)
}
const il = {
  __proto__: null,
  [Symbol.iterator]() {
    return ds(this, Symbol.iterator, (e) => Ze(this, e))
  },
  concat(...e) {
    return qt(this).concat(...e.map((t) => (B(t) ? qt(t) : t)))
  },
  entries() {
    return ds(this, 'entries', (e) => ((e[1] = Ze(this, e[1])), e))
  },
  every(e, t) {
    return ft(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return ft(this, 'filter', e, t, (n) => n.map((s) => Ze(this, s)), arguments)
  },
  find(e, t) {
    return ft(this, 'find', e, t, (n) => Ze(this, n), arguments)
  },
  findIndex(e, t) {
    return ft(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return ft(this, 'findLast', e, t, (n) => Ze(this, n), arguments)
  },
  findLastIndex(e, t) {
    return ft(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return ft(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return hs(this, 'includes', e)
  },
  indexOf(...e) {
    return hs(this, 'indexOf', e)
  },
  join(e) {
    return qt(this).join(e)
  },
  lastIndexOf(...e) {
    return hs(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return ft(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Zt(this, 'pop')
  },
  push(...e) {
    return Zt(this, 'push', e)
  },
  reduce(e, ...t) {
    return yr(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return yr(this, 'reduceRight', e, t)
  },
  shift() {
    return Zt(this, 'shift')
  },
  some(e, t) {
    return ft(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Zt(this, 'splice', e)
  },
  toReversed() {
    return qt(this).toReversed()
  },
  toSorted(e) {
    return qt(this).toSorted(e)
  },
  toSpliced(...e) {
    return qt(this).toSpliced(...e)
  },
  unshift(...e) {
    return Zt(this, 'unshift', e)
  },
  values() {
    return ds(this, 'values', (e) => Ze(this, e))
  },
}
function ds(e, t, n) {
  const s = Xn(e),
    r = s[t],
    i = r.call(s)
  if (s !== e && !je(e)) {
    if (i[Symbol.toStringTag] === 'Array Iterator') {
      const o = Object.create(Object.getPrototypeOf(i))
      return (
        (o.next = () => vr(i.next(), n)),
        r !== Oi[t] &&
          Object.defineProperties(o, {
            return: {
              get() {
                const l = i.return
                return typeof l == 'function' ? l.bind(i) : l
              },
            },
            throw: {
              get() {
                const l = i.throw
                return typeof l == 'function' ? l.bind(i) : l
              },
            },
          }),
        o
      )
    }
    ;((i._next = i.next), (i.next = () => vr(i._next(), n)))
  }
  return i
}
function vr(e, t) {
  return (e.done || (e.value = t(e.value)), e)
}
const Oi = Array.prototype
function ft(e, t, n, s, r, i) {
  const o = Xn(e),
    l = o !== e && !je(e),
    c = o[t]
  if (c !== Oi[t]) {
    const d = c.apply(e, i)
    return l ? Ve(d) : d
  }
  let f = n
  o !== e &&
    (l
      ? (f = function (d, p) {
          return n.call(this, Ze(e, d), p, e)
        })
      : n.length > 2 &&
        (f = function (d, p) {
          return n.call(this, d, p, e)
        }))
  const u = c.call(o, f, s)
  return l && r ? r(u) : u
}
function yr(e, t, n, s) {
  const r = Xn(e),
    i = r !== e && !je(e)
  let o = n,
    l = !1
  r !== e &&
    (i
      ? ((l = s.length === 0),
        (o = function (f, u, d) {
          return (l && ((l = !1), (f = Ze(e, f))), n.call(this, f, Ze(e, u), d, e))
        }))
      : n.length > 3 &&
        (o = function (f, u, d) {
          return n.call(this, f, u, d, e)
        }))
  const c = r[t](o, ...s)
  return l ? Ze(e, c) : c
}
function hs(e, t, n) {
  const s = Q(e)
  Ae(s, 'iterate', mn)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Xs(n[0]) ? ((n[0] = Q(n[0])), s[t](...n)) : r
}
function Zt(e, t, n = []) {
  ;(ot(), Ws())
  const s = Q(e)[t].apply(e, n)
  return (qs(), lt(), s)
}
const ol = Us('__proto__,__v_isRef,__isVue'),
  Ti = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(it)
  )
function ll(e) {
  it(e) || (e = String(e))
  const t = Q(this)
  return (Ae(t, 'has', e), t.hasOwnProperty(e))
}
class Pi {
  constructor(t = !1, n = !1) {
    ;((this._isReadonly = t), (this._isShallow = n))
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? _l : Mi) : i ? Li : Ni).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = B(t)
    if (!r) {
      let c
      if (o && (c = il[n])) return c
      if (n === 'hasOwnProperty') return ll
    }
    const l = Reflect.get(t, n, Re(t) ? t : s)
    if ((it(n) ? Ti.has(n) : ol(n)) || (r || Ae(t, 'get', n), i)) return l
    if (Re(l)) {
      const c = o && Ks(n) ? l : l.value
      return r && te(c) ? Ps(c) : c
    }
    return te(l) ? (r ? Ps(l) : Zn(l)) : l
  }
}
class Ii extends Pi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    const o = B(t) && Ks(n)
    if (!this._isShallow) {
      const f = ct(i)
      if ((!je(s) && !ct(s) && ((i = Q(i)), (s = Q(s))), !o && Re(i) && !Re(s))) return (f || (i.value = s), !0)
    }
    const l = o ? Number(n) < t.length : Y(t, n),
      c = Reflect.set(t, n, s, Re(t) ? t : r)
    return (t === Q(r) && c && (l ? nt(s, i) && mt(t, 'set', n, s) : mt(t, 'add', n, s)), c)
  }
  deleteProperty(t, n) {
    const s = Y(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return (r && s && mt(t, 'delete', n, void 0), r)
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return ((!it(n) || !Ti.has(n)) && Ae(t, 'has', n), s)
  }
  ownKeys(t) {
    return (Ae(t, 'iterate', B(t) ? 'length' : $t), Reflect.ownKeys(t))
  }
}
class cl extends Pi {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const al = new Ii(),
  ul = new cl(),
  fl = new Ii(!0)
const Ts = (e) => e,
  Tn = (e) => Reflect.getPrototypeOf(e)
function dl(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = Q(r),
      o = wt(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      f = r[e](...s),
      u = n ? Ts : t ? Tt : Ve
    return (
      !t && Ae(i, 'iterate', c ? Os : $t),
      ve(Object.create(f), {
        next() {
          const { value: d, done: p } = f.next()
          return p ? { value: d, done: p } : { value: l ? [u(d[0]), u(d[1])] : u(d), done: p }
        },
      })
    )
  }
}
function Pn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function hl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = Q(i),
        l = Q(r)
      e || (nt(r, l) && Ae(o, 'get', r), Ae(o, 'get', l))
      const { has: c } = Tn(o),
        f = t ? Ts : e ? Tt : Ve
      if (c.call(o, r)) return f(i.get(r))
      if (c.call(o, l)) return f(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return (!e && Ae(Q(r), 'iterate', $t), r.size)
    },
    has(r) {
      const i = this.__v_raw,
        o = Q(i),
        l = Q(r)
      return (e || (nt(r, l) && Ae(o, 'has', r), Ae(o, 'has', l)), r === l ? i.has(r) : i.has(r) || i.has(l))
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = Q(l),
        f = t ? Ts : e ? Tt : Ve
      return (!e && Ae(c, 'iterate', $t), l.forEach((u, d) => r.call(i, f(u), f(d), o)))
    },
  }
  return (
    ve(
      n,
      e
        ? { add: Pn('add'), set: Pn('set'), delete: Pn('delete'), clear: Pn('clear') }
        : {
            add(r) {
              const i = Q(this),
                o = Tn(i),
                l = Q(r),
                c = !t && !je(r) && !ct(r) ? l : r
              return (
                o.has.call(i, c) ||
                  (nt(r, c) && o.has.call(i, r)) ||
                  (nt(l, c) && o.has.call(i, l)) ||
                  (i.add(c), mt(i, 'add', c, c)),
                this
              )
            },
            set(r, i) {
              !t && !je(i) && !ct(i) && (i = Q(i))
              const o = Q(this),
                { has: l, get: c } = Tn(o)
              let f = l.call(o, r)
              f || ((r = Q(r)), (f = l.call(o, r)))
              const u = c.call(o, r)
              return (o.set(r, i), f ? nt(i, u) && mt(o, 'set', r, i) : mt(o, 'add', r, i), this)
            },
            delete(r) {
              const i = Q(this),
                { has: o, get: l } = Tn(i)
              let c = o.call(i, r)
              ;(c || ((r = Q(r)), (c = o.call(i, r))), l && l.call(i, r))
              const f = i.delete(r)
              return (c && mt(i, 'delete', r, void 0), f)
            },
            clear() {
              const r = Q(this),
                i = r.size !== 0,
                o = r.clear()
              return (i && mt(r, 'clear', void 0, void 0), o)
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = dl(r, e, t)
    }),
    n
  )
}
function Qs(e, t) {
  const n = hl(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_isShallow'
          ? t
          : r === '__v_raw'
            ? s
            : Reflect.get(Y(n, r) && r in s ? n : s, r, i)
}
const pl = { get: Qs(!1, !1) },
  gl = { get: Qs(!1, !0) },
  ml = { get: Qs(!0, !1) }
const Ni = new WeakMap(),
  Li = new WeakMap(),
  Mi = new WeakMap(),
  _l = new WeakMap()
function vl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Zn(e) {
  return ct(e) ? e : Ys(e, !1, al, pl, Ni)
}
function Di(e) {
  return Ys(e, !1, fl, gl, Li)
}
function Ps(e) {
  return Ys(e, !0, ul, ml, Mi)
}
function Ys(e, t, n, s, r) {
  if (!te(e) || (e.__v_raw && !(t && e.__v_isReactive)) || e.__v_skip || !Object.isExtensible(e)) return e
  const i = r.get(e)
  if (i) return i
  const o = vl(Uo(e))
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? s : n)
  return (r.set(e, l), l)
}
function Ot(e) {
  return ct(e) ? Ot(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ct(e) {
  return !!(e && e.__v_isReadonly)
}
function je(e) {
  return !!(e && e.__v_isShallow)
}
function Xs(e) {
  return e ? !!e.__v_raw : !1
}
function Q(e) {
  const t = e && e.__v_raw
  return t ? Q(t) : e
}
function yl(e) {
  return (!Y(e, '__v_skip') && Object.isExtensible(e) && mi(e, '__v_skip', !0), e)
}
const Ve = (e) => (te(e) ? Zn(e) : e),
  Tt = (e) => (te(e) ? Ps(e) : e)
function Re(e) {
  return e ? e.__v_isRef === !0 : !1
}
function Zs(e) {
  return Fi(e, !1)
}
function bl(e) {
  return Fi(e, !0)
}
function Fi(e, t) {
  return Re(e) ? e : new El(e, t)
}
class El {
  constructor(t, n) {
    ;((this.dep = new Js()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Q(t)),
      (this._value = n ? t : Ve(t)),
      (this.__v_isShallow = n))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || je(t) || ct(t)
    ;((t = s ? t : Q(t)), nt(t, n) && ((this._rawValue = t), (this._value = s ? t : Ve(t)), this.dep.trigger()))
  }
}
function K(e) {
  return Re(e) ? e.value : e
}
const Cl = {
  get: (e, t, n) => (t === '__v_raw' ? e : K(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return Re(r) && !Re(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Hi(e) {
  return Ot(e) ? e : new Proxy(e, Cl)
}
class Al {
  constructor(t, n, s) {
    ;((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Js(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = gn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s))
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ae !== this)) return (Ci(this, !0), !0)
  }
  get value() {
    const t = this.dep.track()
    return (Si(this), t && (t.version = this.dep.version), this._value)
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function xl(e, t, n = !1) {
  let s, r
  return (k(e) ? (s = e) : ((s = e.get), (r = e.set)), new Al(s, r, n))
}
const In = {},
  Fn = new WeakMap()
let Ht
function Sl(e, t = !1, n = Ht) {
  if (n) {
    let s = Fn.get(n)
    ;(s || Fn.set(n, (s = [])), s.push(e))
  }
}
function Rl(e, t, n = ue) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n,
    f = (I) => (r ? I : je(I) || r === !1 || r === 0 ? St(I, 1) : St(I))
  let u,
    d,
    p,
    m,
    T = !1,
    R = !1
  if (
    (Re(e)
      ? ((d = () => e.value), (T = je(e)))
      : Ot(e)
        ? ((d = () => f(e)), (T = !0))
        : B(e)
          ? ((R = !0),
            (T = e.some((I) => Ot(I) || je(I))),
            (d = () =>
              e.map((I) => {
                if (Re(I)) return I.value
                if (Ot(I)) return f(I)
                if (k(I)) return c ? c(I, 2) : I()
              })))
          : k(e)
            ? t
              ? (d = c ? () => c(e, 2) : e)
              : (d = () => {
                  if (p) {
                    ot()
                    try {
                      p()
                    } finally {
                      lt()
                    }
                  }
                  const I = Ht
                  Ht = u
                  try {
                    return c ? c(e, 3, [m]) : e(m)
                  } finally {
                    Ht = I
                  }
                })
            : (d = st),
    t && r)
  ) {
    const I = d,
      G = r === !0 ? 1 / 0 : r
    d = () => St(I(), G)
  }
  const j = nl(),
    H = () => {
      ;(u.stop(), j && j.active && ks(j.effects, u))
    }
  if (i && t) {
    const I = t
    t = (...G) => {
      try {
        return I(...G)
      } finally {
        H()
      }
    }
  }
  let P = R ? new Array(e.length).fill(In) : In
  const M = (I) => {
    if (!(!(u.flags & 1) || (!u.dirty && !I)))
      if (t) {
        const G = u.run()
        if (I || r || T || (R ? G.some((ge, q) => nt(ge, P[q])) : nt(G, P))) {
          const ge = Ht
          ot()
          try {
            ;(p && p(), (Ht = u))
            const q = [G, P === In ? void 0 : R && P[0] === In ? [] : P, m]
            ;((P = G), c ? c(t, 3, q) : t(...q))
          } finally {
            ;((Ht = ge), lt())
          }
        }
      } else u.run()
  }
  return (
    l && l(M),
    (u = new bi(d)),
    (u.scheduler = o ? () => o(M, !1) : M),
    (m = (I) => Sl(I, !1, u)),
    (p = u.onStop =
      () => {
        const I = Fn.get(u)
        if (I) {
          if (c) c(I, 4)
          else for (const G of I) G()
          Fn.delete(u)
        }
      }),
    t ? (s ? M(!0) : (P = u.run())) : o ? o(M.bind(null, !0), !0) : u.run(),
    (H.pause = u.pause.bind(u)),
    (H.resume = u.resume.bind(u)),
    (H.stop = H),
    H
  )
}
function St(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || ((n = n || new Map()), (n.get(e) || 0) >= t)) return e
  if ((n.set(e, t), t--, Re(e))) St(e.value, t, n)
  else if (B(e)) for (let s = 0; s < e.length; s++) St(e[s], t, n)
  else if (Dn(e) || wt(e))
    e.forEach((s) => {
      St(s, t, n)
    })
  else if (gi(e)) {
    for (const s in e) St(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && St(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.45
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function wn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    es(r, t, n)
  }
}
function $e(e, t, n, s) {
  if (k(e)) {
    const r = wn(e, t, n, s)
    return (
      r &&
        hi(r) &&
        r.catch((i) => {
          es(i, t, n, void 0, !0)
        }),
      r
    )
  }
  if (B(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push($e(e[i], t, n, s))
    return r
  }
}
function es(e, t, n, s = !0, r = !1) {
  const i = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: l } = (t && t.appContext.config) || ue
  if (t) {
    let c = t.parent
    const f = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; c; ) {
      const d = c.ec
      if (d && !c.isUnmounted && (!r || c.scope.active)) {
        for (let p = 0; p < d.length; p++) if (d[p](e, f, u) === !1) return
      }
      c = c.parent
    }
    if (o) {
      ;(ot(), wn(o, null, 10, [e, f, u]), lt())
      return
    }
  }
  wl(e, n, i, s, l)
}
function wl(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const Ne = []
let Ke = -1
const et = []
let At = null,
  zt = 0
const Bi = Promise.resolve()
let Hn = null
function ji(e) {
  const t = Hn || Bi
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ol(e) {
  let t = Ke + 1,
    n = Ne.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ne[s],
      i = _n(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function ts(e) {
  if (!(e.flags & 1)) {
    const t = _n(e),
      n = Ne[Ne.length - 1]
    ;(!n || (!(e.flags & 2) && t >= _n(n)) ? Ne.push(e) : Ne.splice(Ol(t), 0, e), (e.flags |= 1), Vi())
  }
}
function Vi() {
  Hn || (Hn = Bi.then(ki))
}
function Tl(e) {
  if (!B(e)) At && e.id === -1 ? At.splice(zt + 1, 0, e) : e.flags & 1 || (et.push(e), (e.flags |= 1))
  else for (let t = 0; t < e.length; t++) et.push(e[t])
  Vi()
}
function $i(e, t, n, s = Ke + 1) {
  for (; s < Ne.length; s++) {
    const r = Ne[s]
    if (r && r.flags & 2) {
      if ((e && r.id !== e.uid) || (t !== void 0 && !(r.id >= t))) continue
      ;(Ne.splice(s, 1), (s = e ? s - 1 : Ke), r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2))
    }
  }
}
function Ui(e, t, n = 0) {
  if (et.length) {
    let s = et,
      r = 0
    if (t) {
      s = []
      for (let o = 0; o < et.length; o++) {
        const l = et[o]
        ;(l.i !== void 0 ? !l.i || l.i.uid < n : t.has(l)) ? (et[r++] = l) : s.push(l)
      }
    }
    const i = [...new Set(s)].sort((o, l) => _n(o) - _n(l))
    if (((et.length = r), At)) {
      for (let o = 0; o < i.length; o++) At.push(i[o])
      return
    }
    for (At = i, zt = 0; zt < At.length; zt++) {
      const o = At[zt]
      ;(o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), (o.flags &= -2))
    }
    ;((At = null), (zt = 0))
  }
}
let ps = !1
function Pl(e, t) {
  if (ps) {
    e()
    return
  }
  const n = t === void 0 ? void 0 : new Set(et)
  ;(e(), (ps = !0))
  try {
    ;($i(void 0, t), Ui(void 0, n, t))
  } finally {
    ps = !1
  }
}
const _n = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function ki(e) {
  try {
    for (Ke = 0; Ke < Ne.length; Ke++) {
      const t = Ne[Ke]
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), wn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ke < Ne.length; Ke++) {
      const t = Ne[Ke]
      t && (t.flags &= -2)
    }
    ;((Ke = -1), (Ne.length = 0), Ui(), (Hn = null), (Ne.length || et.length) && ki())
  }
}
let We = null,
  Ki = null
function Bn(e) {
  const t = We
  return ((We = e), (Ki = (e && e.type.__scopeId) || null), t)
}
function _t(e, t = We, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && kn(-1)
    const i = Bn(t),
      o = kt.length
    let l
    try {
      l = e(...r)
    } finally {
      for (let c = kt.length; c > o; c--) vo()
      ;(Bn(i), s._d && kn(1))
    }
    return l
  }
  return ((s._n = !0), (s._c = !0), (s._d = !0), s)
}
function Lt(e, t, n, s) {
  let r = e
  if (s === 'beforeMount') e._mount = e
  else if (s === 'beforeUpdate') {
    const l = t && t._mount
    l && ((l._latest = e), (e._mount = l))
  } else if (s === 'mounted') {
    const l = e._latest
    ;((e._mount = e._latest = void 0), l && ((r = l), (l._mount = void 0)))
  }
  const i = r.dirs,
    o = t && t.dirs
  for (let l = 0; l < i.length; l++) {
    let c = i[l]
    o ? (c.oldValue = o[l].value) : s === 'mounted' && c.oldValue !== void 0 && (c = ve({}, c, { oldValue: void 0 }))
    let f = c.dir[s]
    f && (ot(), $e(f, n, 8, [e.el, c, r, t]), lt())
  }
}
function Ln(e, t) {
  if (xe) {
    let n = xe.provides
    const s = xe.parent && xe.parent.provides
    ;(s === n && (n = xe.provides = Object.create(s)), (n[e] = t))
  }
}
function rt(e, t, n = !1) {
  const s = Co()
  if (s || Qt) {
    let r = Qt
      ? Qt._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && k(t) ? t.call(s && s.proxy) : t
  }
}
const Il = Symbol.for('v-scx'),
  Nl = () => rt(Il)
function an(e, t, n) {
  return Gi(e, t, n)
}
function Gi(e, t, n = ue) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = ve({}, n),
    c = (t && s) || (!t && i !== 'post')
  let f
  if (An) {
    if (i === 'sync') {
      const m = Nl()
      f = m.__watcherHandles || (m.__watcherHandles = [])
    } else if (!c) {
      const m = () => {}
      return ((m.stop = st), (m.resume = st), (m.pause = st), m)
    }
  }
  const u = xe
  l.call = (m, T, R) => $e(m, u, T, R)
  let d = !1
  ;(i === 'post'
    ? (l.scheduler = (m) => {
        ;((m.i = u), Pe(m, u && u.suspense))
      })
    : i !== 'sync' &&
      ((d = !0),
      (l.scheduler = (m, T) => {
        T ? m() : ts(m)
      })),
    (l.augmentJob = (m) => {
      ;(t && (m.flags |= 4), d && ((m.flags |= 2), u && ((m.id = u.uid), (m.i = u))))
    }))
  const p = Rl(e, t, l)
  return (An && (f ? f.push(p) : c && p()), p)
}
function Ll(e, t, n) {
  const s = this.proxy,
    r = pe(e) ? (e.includes('.') ? Wi(s, e) : () => s[e]) : e.bind(s, s)
  let i
  k(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = On(this),
    l = Gi(r, i.bind(s), n)
  return (o(), l)
}
function Wi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const Ml = Symbol('_vte'),
  ns = (e) => e.__isTeleport,
  Be = Symbol('_leaveCb'),
  en = Symbol('_enterCb')
function Dl() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    er(() => {
      e.isMounted = !0
    }),
    rs(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const He = [Function, Array],
  qi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: He,
    onEnter: He,
    onAfterEnter: He,
    onEnterCancelled: He,
    onBeforeLeave: He,
    onLeave: He,
    onAfterLeave: He,
    onLeaveCancelled: He,
    onBeforeAppear: He,
    onAppear: He,
    onAfterAppear: He,
    onAppearCancelled: He,
  },
  Fl = {
    name: 'BaseTransition',
    props: qi,
    setup(e, { slots: t }) {
      const n = Co(),
        s = Dl()
      return () => {
        const r = t.default && Qi(t.default(), !0),
          i = r && r.length ? zi(r) : n.subTree ? sr() : void 0
        if (!i) return
        const o = Q(e),
          { mode: l } = o
        if (s.isLeaving) return gs(i)
        const c = jn(i)
        if (!c) return gs(i)
        const f = Is(c, o, s, n)
        c.type !== Se && Ut(c, f)
        let u = n.subTree && jn(n.subTree)
        if (u && u.type !== Se && !Bt(u, c) && vn(n.subTree)) {
          let d = Is(u, o, s, n)
          if ((Ut(u, d), l === 'out-in' && c.type !== Se))
            return (
              (s.isLeaving = !0),
              (d.afterLeave = () => {
                if (((s.isLeaving = !1), !(n.job.flags & 8)))
                  if (n.effect.flags & 2) {
                    const p = () => {
                      n.job.flags & 8 || n.update()
                    }
                    ;((p.i = n), ts(p))
                  } else n.update()
                ;(delete d.afterLeave, (u = void 0))
              }),
              gs(i)
            )
          l === 'in-out' && c.type !== Se
            ? (d.delayLeave = (p, m, T) => {
                const R = Ji(s, u)
                ;((R[String(u.key)] = u),
                  (p[Be] = () => {
                    ;(m(), (p[Be] = void 0), delete f.delayedLeave, (u = void 0))
                  }),
                  (f.delayedLeave = () => {
                    ;(T(), delete f.delayedLeave, (u = void 0))
                  }))
              })
            : (u = void 0)
        } else u && (u = void 0)
        return i
      }
    },
  }
function zi(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Se) {
        t = n
        break
      }
  }
  return t
}
const Hl = Fl
function Ji(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return (s || ((s = Object.create(null)), n.set(t.type, s)), s)
}
function Is(e, t, n, s) {
  const {
      appear: r,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: f,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: p,
      onAfterLeave: m,
      onLeaveCancelled: T,
      onBeforeAppear: R,
      onAppear: j,
      onAfterAppear: H,
      onAppearCancelled: P,
    } = t,
    M = String(e.key),
    I = Ji(n, e),
    G = (U, J) => {
      U && $e(U, s, 9, J)
    },
    ge = (U, J) => {
      const X = J[1]
      ;(G(U, J), B(U) ? U.every((ce) => ce.length <= 1) && X() : U.length <= 1 && X())
    },
    q = {
      mode: i,
      persisted: o,
      beforeEnter(U) {
        let J = l
        if (!n.isMounted)
          if (r) J = R || l
          else return
        U[Be] && U[Be](!0)
        const X = I[M]
        if (X && Bt(e, X)) {
          let ce = X.el[Be]
          if (!ce) {
            const N = vn(X)
            ce = N && N.el[Be]
          }
          ce && ce()
        }
        G(J, [U])
      },
      enter(U) {
        if (I[M] === e) return
        let J = c,
          X = f,
          ce = u
        if (!n.isMounted)
          if (r) ((J = j || c), (X = H || f), (ce = P || u))
          else return
        let N = !1
        U[en] = (we) => {
          N || ((N = !0), we ? G(ce, [U]) : G(X, [U]), q.delayedLeave && q.delayedLeave(), (U[en] = void 0))
        }
        const ne = U[en].bind(null, !1)
        J ? ge(J, [U, ne]) : ne()
      },
      leave(U, J) {
        const X = String(e.key)
        if ((U[en] && U[en](!0), n.isUnmounting)) return J()
        G(d, [U])
        let ce = !1
        U[Be] = (ne) => {
          ce || ((ce = !0), J(), ne ? G(T, [U]) : G(m, [U]), (U[Be] = void 0), I[X] === e && delete I[X])
        }
        const N = U[Be].bind(null, !1)
        ;((I[X] = e), p ? ge(p, [U, N]) : N())
      },
      clone(U) {
        const J = Is(U, t, n, s)
        return (
          (J.afterLeave = () => {
            q.afterLeave && q.afterLeave()
          }),
          (J.delayLeave = (X, ce, N) => {
            q.delayLeave ? q.delayLeave(X, ce, N) : N()
          }),
          (J.delayedLeave = () => {
            q.delayedLeave && q.delayedLeave()
          }),
          J
        )
      },
    }
  return q
}
function gs(e) {
  if (ss(e)) return ((e = Pt(e)), (e.children = null), e)
}
function jn(e) {
  if (!ss(e)) return ns(e.type) && e.children ? zi(e.children) : e
  if (e.component) return e.component.subTree
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && k(n.default)) return n.default()
  }
}
function Ut(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t
    const n = e.component.subTree
    Ut((ns(n.type) && jn(n)) || n, t)
  } else if (e.shapeFlag & 128) {
    const n = e.suspense
    if (n) {
      const s = n.isHydrating ? n.pendingBranch : n.activeBranch
      s && Ut(s, t.clone(s))
    } else ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
  } else if (((e.transition = t), e.type === fe && B(e.children))) {
    const n = ro(e.children, !1)
    n && Ut(n, t)
  }
}
function Qi(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === fe
      ? (o.patchFlag & 128 && r++, (s = s.concat(Qi(o.children, t, l))))
      : (t || o.type !== Se) && s.push(l != null ? Pt(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
function vn(e) {
  if (e.component) return vn(e.component.subTree)
  if (e.type === fe) {
    const t = B(e.children) && ro(e.children, !1)
    return t ? vn(t) : void 0
  }
  if (e.type !== Se) return e
}
function Yi(e, t) {
  return k(e) ? ve({ name: e.name }, t, { setup: e }) : e
}
function Xi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function br(e, t) {
  let n
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}
const Vn = new WeakMap()
function un(e, t, n, s, r = !1) {
  if (B(e)) {
    e.forEach((R, j) => un(R, t && (B(t) ? t[j] : t), n, s, r))
    return
  }
  if (fn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && un(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? rr(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    f = t && t.r,
    u = l.refs === ue ? (l.refs = {}) : l.refs,
    d = l.setupState,
    p = Q(d),
    m = d === ue ? di : (R) => (br(u, R) ? !1 : Y(p, R)),
    T = (R, j) => !(j && br(u, j))
  if (f != null && f !== c) {
    if ((Er(t), pe(f))) ((u[f] = null), m(f) && (d[f] = null))
    else if (Re(f)) {
      const R = t
      ;(T(f, R.k) && (f.value = null), R.k && (u[R.k] = null))
    }
  }
  if (k(c)) wn(c, l, 12, [o, u])
  else {
    const R = pe(c),
      j = Re(c)
    if (R || j) {
      const H = () => {
        if (e.f) {
          const P = R ? (m(c) ? d[c] : u[c]) : T() || !e.k ? c.value : u[e.k]
          if (r) B(P) && ks(P, i)
          else if (B(P)) P.includes(i) || P.push(i)
          else if (R) ((u[c] = [i]), m(c) && (d[c] = u[c]))
          else {
            const M = [i]
            ;(T(c, e.k) && (c.value = M), e.k && (u[e.k] = M))
          }
        } else R ? ((u[c] = o), m(c) && (d[c] = o)) : j && (T(c, e.k) && (c.value = o), e.k && (u[e.k] = o))
      }
      if (o) {
        const P = () => {
          ;(H(), Vn.delete(e))
        }
        ;((P.id = -1), Vn.set(e, P), Pe(P, n))
      } else (Er(e), H())
    }
  }
}
function Er(e) {
  const t = Vn.get(e)
  t && ((t.flags |= 8), Vn.delete(e))
}
Qn().requestIdleCallback
Qn().cancelIdleCallback
const fn = (e) => !!e.type.__asyncLoader,
  ss = (e) => e.type.__isKeepAlive
function Bl(e, t) {
  Zi(e, 'a', t)
}
function jl(e, t) {
  Zi(e, 'da', t)
}
function Zi(e, t, n = xe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((yn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) (ss(r.parent.vnode) && Vl(s, t, n, r), (r = r.parent))
  }
}
function Vl(e, t, n, s) {
  const r = yn(t, e, s, !0),
    i = yn('um', () => ks(s[t], r), n)
  i.flags = 16
}
function yn(e, t, n = xe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          ot()
          const l = On(n),
            c = $e(t, n, e, o)
          return (l(), lt(), c)
        })
    return (s ? r.unshift(i) : r.push(i), i)
  }
}
const yt =
    (e) =>
    (t, n = xe) => {
      ;(!An || e === 'sp') && yn(e, (...s) => t(...s), n)
    },
  $l = yt('bm'),
  er = yt('m'),
  Ul = yt('bu'),
  kl = yt('u'),
  rs = yt('bum'),
  Kl = yt('um'),
  Gl = yt('sp'),
  Wl = yt('rtg'),
  ql = yt('rtc')
function zl(e, t = xe) {
  yn('ec', e, t)
}
const Jl = 'components'
function $n(e, t) {
  return Yl(Jl, e, !0, t) || e
}
const Ql = Symbol.for('v-ndc')
function Yl(e, t, n = !0, s = !1) {
  const r = We || xe
  if (r) {
    const i = r.type
    {
      const l = Dc(i, !1)
      if (l && (l === t || l === Le(t) || l === Jn(Le(t)))) return i
    }
    const o = Cr(r[e] || i[e], t) || Cr(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function Cr(e, t) {
  return e && (e[t] || e[Le(t)] || e[Jn(Le(t))])
}
function vt(e, t, n, s) {
  let r
  const i = n,
    o = B(e)
  if (o || pe(e)) {
    const l = o && Ot(e)
    let c = !1,
      f = !1
    ;(l && ((c = !je(e)), (f = ct(e)), (e = Xn(e))), (r = new Array(e.length)))
    for (let u = 0, d = e.length; u < d; u++) r[u] = t(c ? (f ? Tt(Ve(e[u])) : Ve(e[u])) : e[u], u, void 0, i)
  } else if (typeof e == 'number')
    if (!Number.isInteger(e) || e < 0) r = []
    else {
      r = new Array(e)
      for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i)
    }
  else if (te(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let c = 0, f = l.length; c < f; c++) {
        const u = l[c]
        r[c] = t(e[u], u, c, i)
      }
    }
  else r = []
  return r
}
const Ns = (e) => (e ? (Ao(e) ? rr(e) : Ns(e.parent)) : null),
  dn = ve(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ns(e.parent),
    $root: (e) => Ns(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => to(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ts(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = ji.bind(e.proxy)),
    $watch: (e) => Ll.bind(e),
  }),
  ms = (e, t) => e !== ue && !e.__isScriptSetup && Y(e, t),
  Xl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e
      if (t[0] !== '$') {
        const p = o[t]
        if (p !== void 0)
          switch (p) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (ms(s, t)) return ((o[t] = 1), s[t])
          if (r !== ue && Y(r, t)) return ((o[t] = 2), r[t])
          if (Y(i, t)) return ((o[t] = 3), i[t])
          if (n !== ue && Y(n, t)) return ((o[t] = 4), n[t])
          Ls && (o[t] = 0)
        }
      }
      const f = dn[t]
      let u, d
      if (f) return (t === '$attrs' && Ae(e.attrs, 'get', ''), f(e))
      if ((u = l.__cssModules) && (u = u[t])) return u
      if (n !== ue && Y(n, t)) return ((o[t] = 4), n[t])
      if (((d = c.config.globalProperties), Y(d, t))) return d[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return ms(r, t)
        ? ((r[t] = n), !0)
        : s !== ue && Y(s, t)
          ? ((s[t] = n), !0)
          : Y(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o } }, l) {
      let c
      return !!(
        n[l] ||
        (e !== ue && l[0] !== '$' && Y(e, l)) ||
        ms(t, l) ||
        Y(i, l) ||
        Y(s, l) ||
        Y(dn, l) ||
        Y(r.config.globalProperties, l) ||
        ((c = o.__cssModules) && c[l])
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Y(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Ar(e) {
  return B(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Ls = !0
function Zl(e) {
  const t = to(e),
    n = e.proxy,
    s = e.ctx
  ;((Ls = !1), t.beforeCreate && xr(t.beforeCreate, e, 'bc'))
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: f,
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: m,
    updated: T,
    activated: R,
    deactivated: j,
    beforeDestroy: H,
    beforeUnmount: P,
    destroyed: M,
    unmounted: I,
    render: G,
    renderTracked: ge,
    renderTriggered: q,
    errorCaptured: U,
    serverPrefetch: J,
    expose: X,
    inheritAttrs: ce,
    components: N,
    directives: ne,
    filters: we,
  } = t
  if ((f && ec(f, s, null), o))
    for (const se in o) {
      const Z = o[se]
      k(Z) && (s[se] = Z.bind(n))
    }
  if (r) {
    const se = r.call(n, n)
    te(se) && (e.data = Zn(se))
  }
  if (((Ls = !0), i))
    for (const se in i) {
      const Z = i[se],
        at = k(Z) ? Z.bind(n, n) : k(Z.get) ? Z.get.bind(n, n) : st,
        bt = !k(Z) && k(Z.set) ? Z.set.bind(n) : st,
        Je = Ge({ get: at, set: bt })
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Je.value,
        set: (Oe) => (Je.value = Oe),
      })
    }
  if (l) for (const se in l) eo(l[se], s, n, se)
  if (c) {
    const se = k(c) ? c.call(n) : c
    Reflect.ownKeys(se).forEach((Z) => {
      Ln(Z, se[Z])
    })
  }
  u && xr(u, e, 'c')
  function _e(se, Z) {
    B(Z) ? Z.forEach((at) => se(at.bind(n))) : Z && se(Z.bind(n))
  }
  if (
    (_e($l, d),
    _e(er, p),
    _e(Ul, m),
    _e(kl, T),
    _e(Bl, R),
    _e(jl, j),
    _e(zl, U),
    _e(ql, ge),
    _e(Wl, q),
    _e(rs, P),
    _e(Kl, I),
    _e(Gl, J),
    B(X))
  )
    if (X.length) {
      const se = e.exposed || (e.exposed = {})
      X.forEach((Z) => {
        Object.defineProperty(se, Z, { get: () => n[Z], set: (at) => (n[Z] = at), enumerable: !0 })
      })
    } else e.exposed || (e.exposed = {})
  ;(G && e.render === st && (e.render = G),
    ce != null && (e.inheritAttrs = ce),
    N && (e.components = N),
    ne && (e.directives = ne),
    J && Xi(e))
}
function ec(e, t, n = st) {
  B(e) && (e = Ms(e))
  for (const s in e) {
    const r = e[s]
    let i
    ;(te(r) ? ('default' in r ? (i = rt(r.from || s, r.default, !0)) : (i = rt(r.from || s))) : (i = rt(r)),
      Re(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i))
  }
}
function xr(e, t, n) {
  $e(B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function eo(e, t, n, s) {
  let r = s.includes('.') ? Wi(n, s) : () => n[s]
  if (pe(e)) {
    const i = t[e]
    k(i) && an(r, i)
  } else if (k(e)) an(r, e.bind(n))
  else if (te(e))
    if (B(e)) e.forEach((i) => eo(i, t, n, s))
    else {
      const i = k(e.handler) ? e.handler.bind(n) : t[e.handler]
      k(i) && an(r, i, e)
    }
}
function to(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}), r.length && r.forEach((f) => Un(c, f, o, !0)), Un(c, t, o)),
    te(t) && i.set(t, c),
    c
  )
}
function Un(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  ;(i && Un(e, i, n, !0), r && r.forEach((o) => Un(e, o, n, !0)))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = tc[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const tc = {
  data: Sr,
  props: Rr,
  emits: Rr,
  methods: sn,
  computed: sn,
  beforeCreate: Te,
  created: Te,
  beforeMount: Te,
  mounted: Te,
  beforeUpdate: Te,
  updated: Te,
  beforeDestroy: Te,
  beforeUnmount: Te,
  destroyed: Te,
  unmounted: Te,
  activated: Te,
  deactivated: Te,
  errorCaptured: Te,
  serverPrefetch: Te,
  components: sn,
  directives: sn,
  watch: sc,
  provide: Sr,
  inject: nc,
}
function Sr(e, t) {
  return t
    ? e
      ? function () {
          return ve(k(e) ? e.call(this, this) : e, k(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function nc(e, t) {
  return sn(Ms(e), Ms(t))
}
function Ms(e) {
  if (B(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function sn(e, t) {
  return e ? ve(Object.create(null), e, t) : t
}
function Rr(e, t) {
  return e ? (B(e) && B(t) ? [...new Set([...e, ...t])] : ve(Object.create(null), Ar(e), Ar(t ?? {}))) : t
}
function sc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ve(Object.create(null), e)
  for (const s in t) n[s] = Te(e[s], t[s])
  return n
}
function no() {
  return {
    app: null,
    config: {
      isNativeTag: di,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let rc = 0
function ic(e, t) {
  return function (s, r = null) {
    ;(k(s) || (s = ve({}, s)), r != null && !te(r) && (r = null))
    const i = no(),
      o = new WeakSet(),
      l = []
    let c = !1
    const f = (i.app = {
      _uid: rc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Hc,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...d) {
        return (o.has(u) || (u && k(u.install) ? (o.add(u), u.install(f, ...d)) : k(u) && (o.add(u), u(f, ...d))), f)
      },
      mixin(u) {
        return (i.mixins.includes(u) || i.mixins.push(u), f)
      },
      component(u, d) {
        return d ? ((i.components[u] = d), f) : i.components[u]
      },
      directive(u, d) {
        return d ? ((i.directives[u] = d), f) : i.directives[u]
      },
      mount(u, d, p) {
        if (!c) {
          const m = f._ceVNode || he(s, r)
          return (
            (m.appContext = i),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            e(m, u, p),
            (c = !0),
            (f._container = u),
            (u.__vue_app__ = f),
            rr(m.component)
          )
        }
      },
      onUnmount(u) {
        l.push(u)
      },
      unmount() {
        c && ($e(l, f._instance, 16), e(null, f._container), delete f._container.__vue_app__)
      },
      provide(u, d) {
        return ((i.provides[u] = d), f)
      },
      runWithContext(u) {
        const d = Qt
        Qt = f
        try {
          return u()
        } finally {
          Qt = d
        }
      },
    })
    return f
  }
}
let Qt = null
const oc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${Gt(t)}Modifiers`]
function lc(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ue
  let r = n
  const i = t.startsWith('update:'),
    o = i && oc(s, t.slice(7))
  o && (o.trim && (r = n.map((u) => (pe(u) ? u.trim() : u))), o.number && (r = r.map(Go)))
  let l,
    c = s[(l = cs(t))] || s[(l = cs(Le(t)))]
  ;(!c && i && (c = s[(l = cs(Gt(t)))]), c && $e(c, e, 6, r))
  const f = s[l + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;((e.emitted[l] = !0), $e(f, e, 6, r))
  }
}
const cc = new WeakMap()
function so(e, t, n = !1) {
  const s = n ? cc : t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!k(e)) {
    const c = (f) => {
      const u = so(f, t, !0)
      u && ((l = !0), ve(o, u))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c))
  }
  return !i && !l
    ? (te(e) && s.set(e, null), null)
    : (B(i) ? i.forEach((c) => (o[c] = null)) : ve(o, i), te(e) && s.set(e, o), o)
}
function is(e, t) {
  return !e || !Wn(t)
    ? !1
    : ((t = t.slice(2)),
      (t = t === 'Once' ? t : t.replace(/Once$/, '')),
      Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Gt(t)) || Y(e, t))
}
function wr(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: f,
      renderCache: u,
      props: d,
      data: p,
      setupState: m,
      ctx: T,
      inheritAttrs: R,
    } = e,
    j = Bn(e)
  let H, P
  try {
    if (n.shapeFlag & 4) {
      const I = r || s,
        G = I
      ;((H = tt(f.call(G, I, u, d, m, p, T))), (P = l))
    } else {
      const I = t
      ;((H = tt(I.length > 1 ? I(d, { attrs: l, slots: o, emit: c }) : I(d, null))), (P = t.props ? l : ac(l)))
    }
  } catch (I) {
    ;((kt.length = 0), es(I, e, 1), (H = he(Se)))
  }
  let M = H
  if (P && R !== !1) {
    const I = Object.keys(P),
      { shapeFlag: G } = M
    I.length && G & 7 && (i && I.some(qn) && (P = uc(P, i)), (M = Pt(M, P, !1, !0)))
  }
  if ((n.dirs && ((M = Pt(M, null, !1, !0)), (M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs)), n.transition)) {
    const I = (ns(M.type) && jn(M)) || M
    Ut(I, n.transition)
  }
  return ((H = M), Bn(j), H)
}
function ro(e, t = !0) {
  let n
  for (let s = 0; s < e.length; s++) {
    const r = e[s]
    if (En(r)) {
      if (r.type !== Se || r.children === 'v-if') {
        if (n) return
        n = r
      }
    } else return
  }
  return n
}
const ac = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Wn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  uc = (e, t) => {
    const n = {}
    for (const s in e) (!qn(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function fc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    f = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? Or(s, o, f) : !!o
    if (c & 8) {
      const u = t.dynamicProps
      for (let d = 0; d < u.length; d++) {
        const p = u[d]
        if (io(o, s, p) && !is(f, p)) return !0
      }
    }
  } else return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? (o ? Or(s, o, f) : !0) : !!o
  return !1
}
function Or(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (!Y(e, i) || (io(t, e, i) && !is(n, i))) return !0
  }
  return !1
}
function io(e, t, n) {
  const s = e[n],
    r = t[n]
  return n === 'style' && te(s) && te(r) ? !Yn(s, r) : s !== r
}
function dc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && ((r.suspense.vnode.el = r.el = s), (e = r)), r === e))
      (((e = t.vnode).el = s), (t = t.parent))
    else break
  }
  n && n.activeBranch === e && (n.vnode.el = s)
}
const oo = {},
  lo = () => Object.create(oo),
  co = (e) => Object.getPrototypeOf(e) === oo
function hc(e, t, n, s = !1) {
  const r = {},
    i = lo()
  ;((e.propsDefaults = Object.create(null)), ao(e, t, r, i))
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  ;(n ? (e.props = s ? r : Di(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i))
}
function pc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = Q(r),
    [c] = e.propsOptions
  let f = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps
      for (let d = 0; d < u.length; d++) {
        let p = u[d]
        if (is(e.emitsOptions, p)) continue
        const m = t[p]
        if (c)
          if (Y(i, p)) m !== i[p] && ((i[p] = m), (f = !0))
          else {
            const T = Le(p)
            r[T] = Ds(c, l, T, m, e, !1)
          }
        else m !== i[p] && ((i[p] = m), (f = !0))
      }
    }
  } else {
    ao(e, t, r, i) && (f = !0)
    let u
    for (const d in l)
      (!t || (!Y(t, d) && ((u = Gt(d)) === d || !Y(t, u)))) &&
        (c ? n && (n[d] !== void 0 || n[u] !== void 0) && (r[d] = Ds(c, l, d, void 0, e, !0)) : delete r[d])
    if (i !== l) for (const d in i) (!t || !Y(t, d)) && (delete i[d], (f = !0))
  }
  f && mt(e.attrs, 'set', '')
}
function ao(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (on(c)) continue
      const f = t[c]
      let u
      r && Y(r, (u = Le(c)))
        ? !i || !i.includes(u)
          ? (n[u] = f)
          : ((l || (l = {}))[u] = f)
        : is(e.emitsOptions, c) || ((!(c in s) || f !== s[c]) && ((s[c] = f), (o = !0)))
    }
  if (i) {
    const c = Q(n),
      f = l || ue
    for (let u = 0; u < i.length; u++) {
      const d = i[u]
      n[d] = Ds(r, c, d, f[d], e, !Y(f, d))
    }
  }
  return o
}
function Ds(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = Y(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && k(c)) {
        const { propsDefaults: f } = r
        if (n in f) s = f[n]
        else {
          const u = On(r)
          ;((s = f[n] = c.call(null, t)), u())
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === Gt(n)) && (s = !0))
  }
  return s
}
const gc = new WeakMap()
function uo(e, t, n = !1) {
  const s = n ? gc : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!k(e)) {
    const u = (d) => {
      c = !0
      const [p, m] = uo(d, t, !0)
      ;(ve(o, p), m && l.push(...m))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u))
  }
  if (!i && !c) return (te(e) && s.set(e, jt), jt)
  if (B(i))
    for (let u = 0; u < i.length; u++) {
      const d = Le(i[u])
      Tr(d) && (o[d] = ue)
    }
  else if (i)
    for (const u in i) {
      const d = Le(u)
      if (Tr(d)) {
        const p = i[u],
          m = (o[d] = B(p) || k(p) ? { type: p } : ve({}, p)),
          T = m.type
        let R = !1,
          j = !0
        if (B(T))
          for (let H = 0; H < T.length; ++H) {
            const P = T[H],
              M = k(P) && P.name
            if (M === 'Boolean') {
              R = !0
              break
            } else M === 'String' && (j = !1)
          }
        else R = k(T) && T.name === 'Boolean'
        ;((m[0] = R), (m[1] = j), (R || Y(m, 'default')) && l.push(d))
      }
    }
  const f = [o, l]
  return (te(e) && s.set(e, f), f)
}
function Tr(e) {
  return e[0] !== '$' && !on(e)
}
const tr = (e) => e === '_' || e === '_ctx' || e === '$stable',
  nr = (e) => (B(e) ? e.map(tt) : [tt(e)]),
  mc = (e, t, n) => {
    if (t._n) return t
    const s = _t((...r) => nr(t(...r)), n)
    return ((s._c = !1), s)
  },
  fo = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (tr(r)) continue
      const i = e[r]
      if (k(i)) t[r] = mc(r, i, s)
      else if (i != null) {
        const o = nr(i)
        t[r] = () => o
      }
    }
  },
  ho = (e, t) => {
    const n = nr(t)
    e.slots.default = () => n
  },
  po = (e, t, n) => {
    for (const s in t) (n || !tr(s)) && (e[s] = t[s])
  },
  _c = (e, t, n) => {
    const s = (e.slots = lo())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (po(s, t, n), n && mi(s, '_', r, !0)) : fo(t, s)
    } else t && ho(e, t)
  },
  vc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ue
    if (s.shapeFlag & 32) {
      const l = t._
      ;(l ? (n && l === 1 ? (i = !1) : po(r, t, n)) : ((i = !t.$stable), fo(t, r)), (o = t))
    } else t && (ho(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !tr(l) && o[l] == null && delete r[l]
  },
  Pe = xc
function yc(e) {
  return bc(e)
}
function bc(e, t) {
  const n = Qn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: u,
      parentNode: d,
      nextSibling: p,
      setScopeId: m = st,
      insertStaticContent: T,
    } = e,
    R = (a, h, g, _ = null, v = null, b = null, A = void 0, S = null, x = !!h.dynamicChildren) => {
      if (a === h) return
      ;(a && !Bt(a, h) && ((_ = y(a)), Oe(a, v, b, !0), (a = null)),
        h.patchFlag === -2 && ((x = !1), (h.dynamicChildren = null)),
        h.dynamicChildren &&
          a &&
          a.dynamicChildren &&
          a.dynamicChildren.hasOnce &&
          (h.dynamicChildren === jt && (h.dynamicChildren = []), (h.dynamicChildren.hasOnce = !0)))
      const { type: E, ref: D, shapeFlag: O } = h
      switch (E) {
        case os:
          j(a, h, g, _)
          break
        case Se:
          H(a, h, g, _)
          break
        case vs:
          a == null && P(h, g, _, A)
          break
        case fe:
          N(a, h, g, _, v, b, A, S, x)
          break
        default:
          O & 1
            ? G(a, h, g, _, v, b, A, S, x)
            : O & 6
              ? ne(a, h, g, _, v, b, A, S, x)
              : (O & 64 || O & 128) && E.process(a, h, g, _, v, b, A, S, x, w)
      }
      D != null && v ? un(D, a && a.ref, b, h || a, !h) : D == null && a && a.ref != null && un(a.ref, null, b, a, !0)
    },
    j = (a, h, g, _) => {
      if (a == null) s((h.el = l(h.children)), g, _)
      else {
        const v = (h.el = a.el)
        h.children !== a.children && f(v, h.children)
      }
    },
    H = (a, h, g, _) => {
      a == null ? s((h.el = c(h.children || '')), g, _) : (h.el = a.el)
    },
    P = (a, h, g, _) => {
      ;[a.el, a.anchor] = T(a.children, h, g, _, a.el, a.anchor)
    },
    M = ({ el: a, anchor: h }, g, _) => {
      let v
      for (; a && a !== h; ) ((v = p(a)), s(a, g, _), (a = v))
      s(h, g, _)
    },
    I = ({ el: a, anchor: h }) => {
      let g
      for (; a && a !== h; ) ((g = p(a)), r(a), (a = g))
      r(h)
    },
    G = (a, h, g, _, v, b, A, S, x) => {
      if ((h.type === 'svg' ? (A = 'svg') : h.type === 'math' && (A = 'mathml'), a == null)) ge(h, g, _, v, b, A, S, x)
      else {
        const E = a.el && a.el._isVueCE ? a.el : null
        try {
          ;(E && E._beginPatch(), J(a, h, v, b, A, S, x))
        } finally {
          E && E._endPatch()
        }
      }
    },
    ge = (a, h, g, _, v, b, A, S) => {
      let x, E
      const { props: D, shapeFlag: O, transition: F, dirs: $ } = a
      if (
        ((x = a.el = o(a.type, b, D && D.is, D)),
        O & 8 ? u(x, a.children) : O & 16 && U(a.children, x, null, _, v, _s(a, b), A, S),
        $ && Lt(a, null, _, 'created'),
        q(x, a, a.scopeId, A, _),
        D)
      ) {
        for (const oe in D) oe !== 'value' && !on(oe) && i(x, oe, null, D[oe], b, _)
        ;('value' in D && i(x, 'value', null, D.value, b), (E = D.onVnodeBeforeMount) && Xe(E, _, a))
      }
      $ && Lt(a, null, _, 'beforeMount')
      const z = Ec(v, F)
      ;(z ? F.beforeEnter(x) : F && !F.persisted && (x[Ac] = !0),
        s(x, h, g),
        ((E = D && D.onVnodeMounted) || z || $) &&
          Pe(() => {
            try {
              ;(E && Xe(E, _, a), z && F.enter(x), $ && Lt(a, null, _, 'mounted'))
            } finally {
            }
          }, v))
    },
    q = (a, h, g, _, v) => {
      if ((g && m(a, g), _)) for (let b = 0; b < _.length; b++) m(a, _[b])
      if (v) {
        let b = v.subTree
        if (h === b || (_o(b.type) && (b.ssContent === h || b.ssFallback === h))) {
          const A = v.vnode
          q(a, A, A.scopeId, A.slotScopeIds, v.parent)
        }
      }
    },
    U = (a, h, g, _, v, b, A, S, x = 0) => {
      for (let E = x; E < a.length; E++) {
        const D = (a[E] = S ? gt(a[E]) : tt(a[E]))
        R(null, D, h, g, _, v, b, A, S)
      }
    },
    J = (a, h, g, _, v, b, A) => {
      const S = (h.el = a.el)
      let { patchFlag: x, dynamicChildren: E, dirs: D } = h
      x |= a.patchFlag & 16
      const O = a.props || ue,
        F = h.props || ue
      let $
      if (
        (g && Mt(g, !1),
        ($ = F.onVnodeBeforeUpdate) && Xe($, g, h, a),
        D && Lt(h, a, g, 'beforeUpdate'),
        g && Mt(g, !0),
        E && (!a.dynamicChildren || a.dynamicChildren.length !== E.length) && ((x = 0), (A = !1), (E = null)),
        ((O.innerHTML && F.innerHTML == null) || (O.textContent && F.textContent == null)) && u(S, ''),
        E ? X(a.dynamicChildren, E, S, g, _, _s(h, v), b) : A || Z(a, h, S, null, g, _, _s(h, v), b, !1),
        x > 0)
      ) {
        if (x & 16) ce(S, O, F, g, v)
        else if (
          (x & 2 && O.class !== F.class && i(S, 'class', null, F.class, v),
          x & 4 && i(S, 'style', O.style, F.style, v),
          x & 8)
        ) {
          const z = h.dynamicProps
          for (let oe = 0; oe < z.length; oe++) {
            const re = z[oe],
              ye = O[re],
              Ee = F[re]
            ;(Ee !== ye || re === 'value') && i(S, re, ye, Ee, v, g)
          }
        }
        x & 1 && a.children !== h.children && u(S, h.children)
      } else !A && E == null && ce(S, O, F, g, v)
      ;(($ = F.onVnodeUpdated) || D) &&
        Pe(() => {
          ;($ && Xe($, g, h, a), D && Lt(h, a, g, 'updated'))
        }, _)
    },
    X = (a, h, g, _, v, b, A) => {
      for (let S = 0; S < h.length; S++) {
        const x = a[S],
          E = h[S],
          D = x.el || hn(x),
          O = D && (x.type === fe || !Bt(x, E) || x.shapeFlag & 198) ? d(D) : g
        R(x, E, O, null, _, v, b, A, !0)
      }
    },
    ce = (a, h, g, _, v) => {
      if (h !== g) {
        if (h !== ue) for (const b in h) !on(b) && !(b in g) && i(a, b, h[b], null, v, _)
        for (const b in g) {
          if (on(b)) continue
          const A = g[b],
            S = h[b]
          A !== S && b !== 'value' && i(a, b, S, A, v, _)
        }
        'value' in g && i(a, 'value', h.value, g.value, v)
      }
    },
    N = (a, h, g, _, v, b, A, S, x) => {
      const E = (h.el = a ? a.el : l('')),
        D = (h.anchor = a ? a.anchor : l(''))
      let { patchFlag: O, dynamicChildren: F, slotScopeIds: $ } = h
      ;($ && (S = S ? S.concat($) : $),
        a == null
          ? (s(E, g, _), s(D, g, _), U(h.children || [], g, D, v, b, A, S, x))
          : O > 0 && O & 64 && F && a.dynamicChildren && a.dynamicChildren.length === F.length
            ? (X(a.dynamicChildren, F, g, v, b, A, S), (h.key != null || (v && h === v.subTree)) && go(a, h, !0))
            : Z(a, h, g, D, v, b, A, S, x))
    },
    ne = (a, h, g, _, v, b, A, S, x) => {
      ;((h.slotScopeIds = S),
        a == null ? (h.shapeFlag & 512 ? v.ctx.activate(h, g, _, A, x) : we(h, g, _, v, b, A, x)) : Ue(a, h, x))
    },
    we = (a, h, g, _, v, b, A) => {
      const S = (a.component = Pc(a, _, v))
      if ((ss(a) && (S.ctx.renderer = w), Ic(S, !1, A), S.asyncDep)) {
        if ((v && v.registerDep(S, _e, A, b), !a.el)) {
          const x = (S.subTree = he(Se))
          ;(H(null, x, h, g), (a.placeholder = x.el))
        }
      } else _e(S, a, h, g, v, b, A)
    },
    Ue = (a, h, g) => {
      const _ = (h.component = a.component)
      if (fc(a, h, g))
        if (_.asyncDep && !_.asyncResolved) {
          ;((h.el = a.el), (h.placeholder = a.placeholder), se(_, h, g))
          return
        } else ((_.next = h), _.update())
      else ((h.el = a.el), (h.placeholder = a.placeholder), (_.vnode = h))
    },
    _e = (a, h, g, _, v, b, A) => {
      const S = () => {
        if (a.isMounted) {
          let { next: O, bu: F, u: $, parent: z, vnode: oe } = a
          {
            const Qe = mo(a)
            if (Qe) {
              ;(O && ((O.el = oe.el), se(a, O, A)),
                Qe.asyncDep.then(() => {
                  const ut = () => {
                    a.job.flags & 8 || (v && v.pendingBranch ? Pe(ut, v) : E())
                  }
                  ;((ut.flags = 48), Pe(ut, v))
                }))
              return
            }
          }
          let re = O,
            ye
          ;(Mt(a, !1),
            O ? ((O.el = oe.el), se(a, O, A)) : (O = oe),
            F && as(F),
            (ye = O.props && O.props.onVnodeBeforeUpdate) && Xe(ye, z, O, oe),
            Mt(a, !0))
          const Ee = wr(a),
            ke = a.subTree
          ;((a.subTree = Ee),
            R(ke, Ee, d(ke.el || hn(ke)), y(ke), a, v, b),
            (O.el = Ee.el),
            re === null && dc(a, Ee.el),
            $ && Pe($, v),
            (ye = O.props && O.props.onVnodeUpdated) && Pe(() => Xe(ye, z, O, oe), v))
        } else {
          let O
          const { el: F, props: $ } = h,
            { bm: z, m: oe, parent: re, root: ye, type: Ee } = a,
            ke = fn(h)
          ;(Mt(a, !1), z && as(z), !ke && (O = $ && $.onVnodeBeforeMount) && Xe(O, re, h), Mt(a, !0))
          {
            ye.ce && ye.ce._hasShadowRoot() && ye.ce._injectChildStyle(Ee, a.parent ? a.parent.type : void 0)
            const Qe = (a.subTree = wr(a))
            ;(R(null, Qe, g, _, a, v, b), (h.el = Qe.el))
          }
          if ((oe && Pe(oe, v), !ke && (O = $ && $.onVnodeMounted))) {
            const Qe = h
            Pe(() => Xe(O, re, Qe), v)
          }
          ;((h.shapeFlag & 256 || (re && fn(re.vnode) && re.vnode.shapeFlag & 256)) && a.a && Pe(a.a, v),
            (a.isMounted = !0),
            (h = g = _ = null))
        }
      }
      a.scope.on()
      const x = (a.effect = new bi(S))
      a.scope.off()
      const E = (a.update = x.run.bind(x)),
        D = (a.job = x.runIfDirty.bind(x))
      ;((D.i = a), (D.id = a.uid), (x.scheduler = () => ts(D)), Mt(a, !0), E())
    },
    se = (a, h, g) => {
      h.component = a
      const _ = a.vnode.props
      ;((a.vnode = h), (a.next = null), pc(a, h.props, _, g), vc(a, h.children, g), ot(), $i(a), lt())
    },
    Z = (a, h, g, _, v, b, A, S, x = !1) => {
      const E = a && a.children,
        D = a ? a.shapeFlag : 0,
        O = h.children,
        { patchFlag: F, shapeFlag: $ } = h
      if (F > 0) {
        if (F & 128) {
          bt(E, O, g, _, v, b, A, S, x)
          return
        } else if (F & 256) {
          at(E, O, g, _, v, b, A, S, x)
          return
        }
      }
      $ & 8
        ? (D & 16 && Fe(E, v, b), O !== E && u(g, O))
        : D & 16
          ? $ & 16
            ? bt(E, O, g, _, v, b, A, S, x)
            : Fe(E, v, b, !0)
          : (D & 8 && u(g, ''), $ & 16 && U(O, g, _, v, b, A, S, x))
    },
    at = (a, h, g, _, v, b, A, S, x) => {
      ;((a = a || jt), (h = h || jt))
      const E = a.length,
        D = h.length,
        O = Math.min(E, D)
      let F
      for (F = 0; F < O; F++) {
        const $ = (h[F] = x ? gt(h[F]) : tt(h[F]))
        R(a[F], $, g, null, v, b, A, S, x)
      }
      E > D ? Fe(a, v, b, !0, !1, O) : U(h, g, _, v, b, A, S, x, O)
    },
    bt = (a, h, g, _, v, b, A, S, x) => {
      let E = 0
      const D = h.length
      let O = a.length - 1,
        F = D - 1
      for (; E <= O && E <= F; ) {
        const $ = a[E],
          z = (h[E] = x ? gt(h[E]) : tt(h[E]))
        if (Bt($, z)) R($, z, g, null, v, b, A, S, x)
        else break
        E++
      }
      for (; E <= O && E <= F; ) {
        const $ = a[O],
          z = (h[F] = x ? gt(h[F]) : tt(h[F]))
        if (Bt($, z)) R($, z, g, null, v, b, A, S, x)
        else break
        ;(O--, F--)
      }
      if (E > O) {
        if (E <= F) {
          const $ = F + 1,
            z = $ < D ? h[$].el : _
          for (; E <= F; ) (R(null, (h[E] = x ? gt(h[E]) : tt(h[E])), g, z, v, b, A, S, x), E++)
        }
      } else if (E > F) for (; E <= O; ) (Oe(a[E], v, b, !0), E++)
      else {
        const $ = E,
          z = E,
          oe = new Map()
        for (E = z; E <= F; E++) {
          const Me = (h[E] = x ? gt(h[E]) : tt(h[E]))
          Me.key != null && oe.set(Me.key, E)
        }
        let re,
          ye = 0
        const Ee = F - z + 1
        let ke = !1,
          Qe = 0
        const ut = new Array(Ee)
        for (E = 0; E < Ee; E++) ut[E] = 0
        for (E = $; E <= O; E++) {
          const Me = a[E]
          if (ye >= Ee) {
            Oe(Me, v, b, !0)
            continue
          }
          let Ye
          if (Me.key != null) Ye = oe.get(Me.key)
          else
            for (re = z; re <= F; re++)
              if (ut[re - z] === 0 && Bt(Me, h[re])) {
                Ye = re
                break
              }
          Ye === void 0
            ? Oe(Me, v, b, !0)
            : ((ut[Ye - z] = E + 1), Ye >= Qe ? (Qe = Ye) : (ke = !0), R(Me, h[Ye], g, null, v, b, A, S, x), ye++)
        }
        const ur = ke ? Cc(ut) : jt
        for (re = ur.length - 1, E = Ee - 1; E >= 0; E--) {
          const Me = z + E,
            Ye = h[Me],
            fr = h[Me + 1],
            dr = Me + 1 < D ? fr.el || hn(fr) : _
          ut[E] === 0 ? R(null, Ye, g, dr, v, b, A, S, x) : ke && (re < 0 || E !== ur[re] ? Je(Ye, g, dr, 2) : re--)
        }
      }
    },
    Je = (a, h, g, _, v = null) => {
      const { el: b, type: A, transition: S, children: x, shapeFlag: E } = a
      if (E & 6) {
        Je(a.component.subTree, h, g, _)
        return
      }
      if (E & 128) {
        a.suspense.move(h, g, _)
        return
      }
      if (E & 64) {
        A.move(a, h, g, w)
        return
      }
      if (A === fe) {
        s(b, h, g)
        for (let O = 0; O < x.length; O++) Je(x[O], h, g, _)
        s(a.anchor, h, g)
        return
      }
      if (A === vs) {
        M(a, h, g)
        return
      }
      if (_ !== 2 && E & 1 && S)
        if (_ === 0) S.persisted && !b[Be] ? s(b, h, g) : (S.beforeEnter(b), s(b, h, g), Pe(() => S.enter(b), v))
        else {
          const { leave: O, delayLeave: F, afterLeave: $ } = S,
            z = () => {
              a.ctx.isUnmounted ? r(b) : s(b, h, g)
            },
            oe = () => {
              const re = b._isLeaving || !!b[Be]
              ;(b._isLeaving && b[Be](!0),
                S.persisted && !re
                  ? z()
                  : O(b, () => {
                      ;(z(), $ && $())
                    }))
            }
          F ? F(b, z, oe) : oe()
        }
      else s(b, h, g)
    },
    Oe = (a, h, g, _ = !1, v = !1) => {
      const {
        type: b,
        props: A,
        ref: S,
        children: x,
        dynamicChildren: E,
        shapeFlag: D,
        patchFlag: O,
        dirs: F,
        cacheIndex: $,
        memo: z,
      } = a
      if (
        ((O === -2 || (E && E.hasOnce)) && (v = !1),
        S != null && (ot(), un(S, null, g, a, !0), lt()),
        $ != null && (!a.ctx || a.ctx === h) && (h.renderCache[$] = void 0),
        D & 256 && h.ctx.deactivate(a))
      )
        return
      const oe = D & 1 && F,
        re = !fn(a)
      let ye
      if ((re && (ye = A && A.onVnodeBeforeUnmount) && Xe(ye, h, a), D & 6)) Nt(a.component, g, _)
      else {
        if (D & 128) {
          a.suspense.unmount(g, _)
          return
        }
        ;(oe && Lt(a, null, h, 'beforeUnmount'),
          D & 64
            ? a.type.remove(a, h, g, w, _)
            : E && !E.hasOnce && (b !== fe || (O > 0 && O & 64))
              ? Fe(E, h, g, !1, !0)
              : ((b === fe && O & 384) || (!v && D & 16)) && Fe(x, h, g),
          _ && Wt(a))
      }
      const Ee = z != null && $ == null
      ;((re && (ye = A && A.onVnodeUnmounted)) || oe || Ee) &&
        Pe(() => {
          ;(ye && Xe(ye, h, a), oe && Lt(a, null, h, 'unmounted'), Ee && (a.el = null))
        }, g)
    },
    Wt = (a) => {
      const { type: h, el: g, anchor: _, transition: v } = a,
        b = h === fe
      if (b && !v) {
        It(g, _)
        return
      }
      if (h === vs) {
        ;(I(a), v && !v.persisted && v.afterLeave && v.afterLeave())
        return
      }
      const A = b ? vn(a) : a,
        S = () => {
          ;(b ? d(g) && It(g, _) : r(g), v && !v.persisted && v.afterLeave && v.afterLeave())
        }
      if (A && A.shapeFlag & 1 && v && !v.persisted) {
        const { leave: x, delayLeave: E } = v,
          D = A.el,
          O = () => x(D, S)
        E ? E(D, S, O) : O()
      } else S()
    },
    It = (a, h) => {
      let g
      for (; a !== h; ) ((g = p(a)), r(a), (a = g))
      r(h)
    },
    Nt = (a, h, g) => {
      const { bum: _, scope: v, job: b, subTree: A, um: S, m: x, a: E } = a
      ;(Pr(x),
        Pr(E),
        _ && as(_),
        v.stop(),
        b ? ((b.flags |= 8), Oe(A, a, h, g)) : A && ((A.transition = a.vnode.transition), Oe(A, a, h, g)),
        S && Pe(S, h))
      const D = () => {
        a.isUnmounted = !0
      }
      ;((D.flags = 16), Pe(D, h))
    },
    Fe = (a, h, g, _ = !1, v = !1, b = 0) => {
      for (let A = b; A < a.length; A++) Oe(a[A], h, g, _, v)
    },
    y = (a) => {
      if (a.shapeFlag & 6) return y(a.component.subTree)
      if (a.shapeFlag & 128) return a.suspense.next()
      const h = p(a.anchor || a.el),
        g = h && h[Ml]
      return g ? p(g) : h
    },
    L = (a, h, g) => {
      const _ = a && h._vnode ? void 0 : a && a.component ? a.component.uid : Tc()
      Pl(() => {
        ;(a == null ? h._vnode && Oe(h._vnode, null, null, !0) : R(h._vnode || null, a, h, null, null, null, g),
          (h._vnode = a))
      }, _)
    },
    w = { p: R, um: Oe, m: Je, r: Wt, mt: we, mc: U, pc: Z, pbc: X, n: y, o: e }
  return { render: L, hydrate: void 0, createApp: ic(L) }
}
function _s({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function Mt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Ec(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function go(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (B(s) && B(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      ;(l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[i] = gt(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && go(o, l)),
        l.type === os && (l.patchFlag === -1 && (l = r[i] = gt(l)), (l.el = o.el)),
        l.type === Se && !l.el && (l.el = o.el))
    }
}
function Cc(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const f = e[s]
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ;((t[s] = r), n.push(s))
        continue
      }
      for (i = 0, o = n.length - 1; i < o; ) ((l = (i + o) >> 1), e[n[l]] < f ? (i = l + 1) : (o = l))
      f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) ((n[i] = o), (o = t[o]))
  return n
}
function mo(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : mo(t)
}
function Pr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
function hn(e) {
  if (e.placeholder) return e.placeholder
  const t = e.component
  if (t) return hn(t.subTree)
  const n = e.suspense
  return n && n.activeBranch ? hn(n.activeBranch) : null
}
const _o = (e) => e.__isSuspense,
  Ac = Symbol('_deferredEnter')
function xc(e, t) {
  t && t.pendingBranch ? (B(e) ? t.effects.push(...e) : t.effects.push(e)) : Tl(e)
}
const fe = Symbol.for('v-fgt'),
  os = Symbol.for('v-txt'),
  Se = Symbol.for('v-cmt'),
  vs = Symbol.for('v-stc'),
  kt = []
let De = null
function le(e = !1) {
  kt.push((De = e ? null : []))
}
function vo() {
  ;(kt.pop(), (De = kt[kt.length - 1] || null))
}
let bn = 1
function kn(e, t = !1) {
  ;((bn += e), e < 0 && De && t && (De.hasOnce = !0))
}
function yo(e) {
  return ((e.dynamicChildren = bn > 0 ? De || jt : null), vo(), bn > 0 && De && De.push(e), e)
}
function de(e, t, n, s, r, i) {
  return yo(C(e, t, n, s, r, i, !0))
}
function Fs(e, t, n, s, r) {
  return yo(he(e, t, n, s, r, !0))
}
function En(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Bt(e, t) {
  return e.type === t.type && e.key === t.key
}
const bo = ({ key: e }) => e ?? null,
  Mn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (pe(e) || Re(e) || k(e) ? { i: We, r: e, k: t, f: !!n } : e) : null
  )
function C(e, t = null, n = null, s = 0, r = null, i = e === fe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bo(t),
    ref: t && Mn(t),
    scopeId: Ki,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: We,
  }
  return (
    l ? (Kn(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16),
    bn > 0 && !o && De && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && De.push(c),
    c
  )
}
const he = Sc
function Sc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Ql) && (e = Se), En(e))) {
    const l = Pt(e, t, !0)
    return (
      n && Kn(l, n),
      bn > 0 && !i && De && (l.shapeFlag & 6 ? (De[De.indexOf(e)] = l) : De.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((Fc(e) && (e = e.__vccOpts), t)) {
    t = Rc(t)
    let { class: l, style: c } = t
    ;(l && !pe(l) && (t.class = Kt(l)), te(c) && (Xs(c) && !B(c) && (c = ve({}, c)), (t.style = Gs(c))))
  }
  const o = pe(e) ? 1 : _o(e) ? 128 : ns(e) ? 64 : te(e) ? 4 : k(e) ? 2 : 0
  return C(e, t, n, s, r, o, i, !0)
}
function Rc(e) {
  return e ? (Xs(e) ? ve({}, e) : co(e) ? ve({}, e[So] || e) : e) : null
}
function Pt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    f = t ? wc(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && bo(f),
      ref: t && t.ref ? (n && i ? (B(i) ? i.concat(Mn(t)) : [i, Mn(t)]) : Mn(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== fe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Pt(e.ssContent),
      ssFallback: e.ssFallback && Pt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
      cacheIndex: e.cacheIndex,
    }
  return (c && s && Ut(u, c.clone(u)), u)
}
function Rt(e = ' ', t = 0) {
  return he(os, null, e, t)
}
function sr(e = '', t = !1) {
  return t ? (le(), Fs(Se, null, e)) : he(Se, null, e)
}
function tt(e) {
  return e == null || typeof e == 'boolean'
    ? he(Se)
    : B(e)
      ? he(fe, null, e.slice())
      : En(e)
        ? gt(e)
        : he(os, null, String(e))
}
function gt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Pt(e)
}
function Kn(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (B(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Kn(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !co(t)
        ? (t._ctx = We)
        : r === 3 && We && (We.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else if (k(t)) {
    if (s & 65) {
      Kn(e, { default: t })
      return
    }
    ;((t = { default: t, _ctx: We }), (n = 32))
  } else ((t = String(t)), s & 64 ? ((n = 16), (t = [Rt(t)])) : (n = 8))
  ;((e.children = t), (e.shapeFlag |= n))
}
function wc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = Kt([t.class, s.class]))
      else if (r === 'style') t.style = Gs([t.style, s.style])
      else if (Wn(r)) {
        const i = t[r],
          o = s[r]
        o && i !== o && !(B(i) && i.includes(o))
          ? (t[r] = i ? [].concat(i, o) : o)
          : o == null && i == null && !qn(r) && (t[r] = o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Xe(e, t, n, s = null) {
  $e(e, t, 7, [n, s])
}
const Oc = no()
let Eo = 0
function Tc() {
  return Eo
}
function Pc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Oc,
    i = {
      uid: Eo++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new tl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: uo(s, r),
      emitsOptions: so(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ue,
      inheritAttrs: s.inheritAttrs,
      ctx: ue,
      data: ue,
      props: ue,
      attrs: ue,
      slots: ue,
      refs: ue,
      setupState: ue,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return ((i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = lc.bind(null, i)), e.ce && e.ce(i), i)
}
let xe = null
const Co = () => xe || We
let Gn, Cn
{
  const e = Qn(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;((Gn = t('__VUE_INSTANCE_SETTERS__', (n) => (xe = n))), (Cn = t('__VUE_SSR_SETTERS__', (n) => (An = n))))
}
const On = (e) => {
    const t = xe
    return (
      Gn(e),
      e.scope.on(),
      () => {
        ;(e.scope.off(), Gn(t))
      }
    )
  },
  Ir = () => {
    ;(xe && xe.scope.off(), Gn(null))
  }
function Ao(e) {
  return e.vnode.shapeFlag & 4
}
let An = !1
function Ic(e, t = !1, n = !1) {
  t && Cn(t)
  const { props: s, children: r } = e.vnode,
    i = Ao(e)
  ;(hc(e, s, i, t), _c(e, r, n || t))
  const o = i ? Nc(e, t) : void 0
  return (t && Cn(!1), o)
}
function Nc(e, t) {
  const n = e.type
  ;((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Xl)))
  const { setup: s } = n
  if (s) {
    ot()
    const r = (e.setupContext = s.length > 1 ? Mc(e) : null),
      i = On(e),
      o = wn(s, e, 0, [e.props, r]),
      l = hi(o)
    if ((lt(), i(), (l || e.sp) && !fn(e) && Xi(e), l)) {
      if ((o.then(Ir, Ir), t))
        return o
          .then((c) => {
            Cn(!0)
            try {
              Nr(e, c, t)
            } finally {
              Cn(!1)
            }
          })
          .catch((c) => {
            ;(es(c, e, 0, void 0, !0), (e.ssrRender = (f, u) => u('<!---->')))
          })
      e.asyncDep = o
    } else Nr(e, o)
  } else xo(e)
}
function Nr(e, t, n) {
  ;(k(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : te(t) && (e.setupState = Hi(t)), xo(e))
}
function xo(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || st)
  {
    const r = On(e)
    ot()
    try {
      Zl(e)
    } finally {
      ;(lt(), r())
    }
  }
}
const So = Symbol(),
  Lc = {
    get(e, t) {
      return (Ae(e, 'get', ''), t === So ? e : e[t])
    },
  }
function Mc(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Lc), slots: e.slots, emit: e.emit, expose: t }
}
function rr(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Hi(yl(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in dn) return dn[n](e)
          },
          has(t, n) {
            return n in t || n in dn
          },
        }))
    : e.proxy
}
function Dc(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Fc(e) {
  return k(e) && '__vccOpts' in e
}
const Ge = (e, t) => xl(e, t, An)
function ir(e, t, n) {
  try {
    kn(-1)
    const s = arguments.length
    return s === 2
      ? te(t) && !B(t)
        ? En(t)
          ? he(e, null, [t])
          : he(e, t)
        : he(e, null, t)
      : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && En(n) && (n = [n]), he(e, t, n))
  } finally {
    kn(1)
  }
}
const Hc = '3.5.45'
/**
 * @vue/runtime-dom v3.5.45
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Hs
const Lr = typeof window < 'u' && window.trustedTypes
if (Lr)
  try {
    Hs = Lr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const Ro = Hs ? (e) => Hs.createHTML(e) : (e) => e,
  Bc = 'http://www.w3.org/2000/svg',
  jc = 'http://www.w3.org/1998/Math/MathML',
  pt = typeof document < 'u' ? document : null,
  Mr = pt && pt.createElement('template'),
  Vc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? pt.createElementNS(Bc, e)
          : t === 'mathml'
            ? pt.createElementNS(jc, e)
            : n
              ? pt.createElement(e, { is: n })
              : pt.createElement(e)
      return (e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r)
    },
    createText: (e) => pt.createTextNode(e),
    createComment: (e) => pt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => pt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
      else {
        Mr.innerHTML = Ro(s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e)
        const l = Mr.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  Et = 'transition',
  tn = 'animation',
  xn = Symbol('_vtc'),
  wo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  $c = ve({}, qi, wo),
  Uc = (e) => ((e.displayName = 'Transition'), (e.props = $c), e),
  kc = Uc((e, { slots: t }) => ir(Hl, Kc(e), t)),
  Dt = (e, t = []) => {
    B(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Dr = (e) => (e ? (B(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Kc(e) {
  const t = {}
  for (const N in e) N in wo || (t[N] = e[N])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: f = o,
      appearToClass: u = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    T = Gc(r),
    R = T && T[0],
    j = T && T[1],
    {
      onBeforeEnter: H,
      onEnter: P,
      onEnterCancelled: M,
      onLeave: I,
      onLeaveCancelled: G,
      onBeforeAppear: ge = H,
      onAppear: q = P,
      onAppearCancelled: U = M,
    } = t,
    J = (N, ne, we, Ue) => {
      ;((N._enterCancelled = Ue), Ft(N, ne ? u : l), Ft(N, ne ? f : o), we && we())
    },
    X = (N, ne) => {
      ;((N._isLeaving = !1), Ft(N, d), Ft(N, m), Ft(N, p), ne && ne())
    },
    ce = (N) => (ne, we) => {
      const Ue = N ? q : P,
        _e = () => J(ne, N, we)
      ;(Dt(Ue, [ne, _e]),
        Fr(() => {
          ;(Ft(ne, N ? c : i), dt(ne, N ? u : l), Dr(Ue) || Hr(ne, s, R, _e))
        }))
    }
  return ve(t, {
    onBeforeEnter(N) {
      ;(Dt(H, [N]), dt(N, i), dt(N, o))
    },
    onBeforeAppear(N) {
      ;(Dt(ge, [N]), dt(N, c), dt(N, f))
    },
    onEnter: ce(!1),
    onAppear: ce(!0),
    onLeave(N, ne) {
      N._isLeaving = !0
      const we = () => X(N, ne)
      ;(dt(N, d),
        N._enterCancelled ? (dt(N, p), Vr(N)) : (Vr(N), dt(N, p)),
        Fr(() => {
          N._isLeaving && (Ft(N, d), dt(N, m), Dr(I) || Hr(N, s, j, we))
        }),
        Dt(I, [N, we]))
    },
    onEnterCancelled(N) {
      ;(J(N, !1, void 0, !0), Dt(M, [N]))
    },
    onAppearCancelled(N) {
      ;(J(N, !0, void 0, !0), Dt(U, [N]))
    },
    onLeaveCancelled(N) {
      ;(X(N), Dt(G, [N]))
    },
  })
}
function Gc(e) {
  if (e == null) return null
  if (te(e)) return [ys(e.enter), ys(e.leave)]
  {
    const t = ys(e)
    return [t, t]
  }
}
function ys(e) {
  return Wo(e)
}
function dt(e, t) {
  ;(t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[xn] || (e[xn] = new Set())).add(t))
}
function Ft(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[xn]
  n && (n.delete(t), n.size || (e[xn] = void 0))
}
function Fr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Wc = 0
function Hr(e, t, n, s) {
  const r = (e._endId = ++Wc),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = qc(e, t)
  if (!o) return s()
  const f = o + 'end'
  let u = 0
  const d = () => {
      ;(e.removeEventListener(f, p), i())
    },
    p = (m) => {
      m.target === e && ++u >= c && d()
    }
  ;(setTimeout(() => {
    u < c && d()
  }, l + 1),
    e.addEventListener(f, p))
}
function qc(e, t) {
  const n = window.getComputedStyle(e),
    s = (T) => (n[T] || '').split(', '),
    r = s(`${Et}Delay`),
    i = s(`${Et}Duration`),
    o = Br(r, i),
    l = s(`${tn}Delay`),
    c = s(`${tn}Duration`),
    f = Br(l, c)
  let u = null,
    d = 0,
    p = 0
  t === Et
    ? o > 0 && ((u = Et), (d = o), (p = i.length))
    : t === tn
      ? f > 0 && ((u = tn), (d = f), (p = c.length))
      : ((d = Math.max(o, f)), (u = d > 0 ? (o > f ? Et : tn) : null), (p = u ? (u === Et ? i.length : c.length) : 0))
  const m = u === Et && /\b(?:transform|all)(?:,|$)/.test(s(`${Et}Property`).toString())
  return { type: u, timeout: d, propCount: p, hasTransform: m }
}
function Br(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => jr(n) + jr(e[s])))
}
function jr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Vr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight
}
function zc(e, t, n) {
  const s = e[xn]
  ;(s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t))
}
const $r = Symbol('_vod'),
  Jc = Symbol('_vsh'),
  Qc = Symbol(''),
  Yc = /(?:^|;)\s*display\s*:/
function Xc(e, t, n) {
  const s = e.style,
    r = pe(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (pe(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && rn(s, l, '')
        }
      else for (const o in t) n[o] == null && rn(s, o, '')
    for (const o in n) {
      o === 'display' && (i = !0)
      const l = n[o]
      l != null ? ea(e, o, !pe(t) && t ? t[o] : void 0, l) || rn(s, o, l) : rn(s, o, '')
    }
  } else if (r) {
    if (t !== n) {
      const o = s[Qc]
      ;(o && (n += ';' + o), (s.cssText = n), (i = Yc.test(n)))
    }
  } else t && e.removeAttribute('style')
  $r in e && ((!r || t !== n) && (e[$r] = i ? s.display : ''), e[Jc] && (s.display = 'none'))
}
const Nn = /\s*!important$/
function rn(e, t, n) {
  if (B(n)) n.forEach((s) => rn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--')))
    Nn.test(n) ? e.setProperty(t, n.replace(Nn, ''), 'important') : e.setProperty(t, n)
  else {
    const s = Zc(e, t)
    Nn.test(n) ? e.setProperty(Gt(s), n.replace(Nn, ''), 'important') : (e[s] = n)
  }
}
const Ur = ['Webkit', 'Moz', 'ms'],
  bs = {}
function Zc(e, t) {
  const n = bs[t]
  if (n) return n
  let s = Le(t)
  if (s !== 'filter' && s in e) return (bs[t] = s)
  s = Jn(s)
  for (let r = 0; r < Ur.length; r++) {
    const i = Ur[r] + s
    if (i in e) return (bs[t] = i)
  }
  return t
}
function ea(e, t, n, s) {
  return e.tagName === 'TEXTAREA' && (t === 'width' || t === 'height') && pe(s) && n === s
}
const kr = 'http://www.w3.org/1999/xlink'
function Kr(e, t, n, s, r, i = Xo(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(kr, t.slice(6, t.length))
      : e.setAttributeNS(kr, t, n)
    : n == null || (i && !_i(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : it(n) ? String(n) : n)
}
function Gr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Ro(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;((l !== c || !('_value' in e)) && (e.value = c), n == null && e.removeAttribute(t), (e._value = n))
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = _i(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function ta(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function na(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Wr = Symbol('_vei')
function sa(e, t, n, s, r = null) {
  const i = e[Wr] || (e[Wr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = oa(t)
    if (s) {
      const f = (i[t] = aa(s, r))
      ta(e, l, f, c)
    } else o && (na(e, l, o, c), (i[t] = void 0))
  }
}
const ra = /(Once|Passive|Capture)$/,
  ia = /^on:?(?:Once|Passive|Capture)$/
function oa(e) {
  let t, n
  for (; (n = e.match(ra)) && !ia.test(e); )
    (t || (t = {}), (e = e.slice(0, e.length - n[1].length)), (t[n[1].toLowerCase()] = !0))
  return [e[2] === ':' ? e.slice(3) : Gt(e.slice(2)), t]
}
let Es = 0
const la = Promise.resolve(),
  ca = () => Es || (la.then(() => (Es = 0)), (Es = Date.now()))
function aa(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    const r = n.value
    if (B(r)) {
      const i = s.stopImmediatePropagation
      s.stopImmediatePropagation = () => {
        ;(i.call(s), (s._stopped = !0))
      }
      const o = r.slice(),
        l = [s]
      for (let c = 0; c < o.length && !s._stopped; c++) {
        const f = o[c]
        f && $e(f, t, 5, l)
      }
    } else $e(r, t, 5, [s])
  }
  return ((n.value = e), (n.attached = ca()), n)
}
const qr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  ua = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? zc(e, s, o)
      : t === 'style'
        ? Xc(e, n, s)
        : Wn(t)
          ? qn(t) || sa(e, t, n, s, i)
          : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : fa(e, t, s, o))
            ? (Gr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Kr(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (da(e, t) || (e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(s))))
              ? Gr(e, Le(t), s, i, t)
              : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s), Kr(e, t, s, o))
  }
function fa(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && qr(t) && k(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    (t === 'sandbox' && e.tagName === 'IFRAME') ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return qr(t) && pe(n) ? !1 : t in e
}
function da(e, t) {
  const n = e._def.props
  if (!n) return !1
  const s = Le(t)
  return Array.isArray(n) ? n.some((r) => Le(r) === s) : Object.keys(n).some((r) => Le(r) === s)
}
const ha = ve({ patchProp: ua }, Vc)
let zr
function pa() {
  return zr || (zr = yc(ha))
}
const ga = (...e) => {
  const t = pa().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = _a(s)
      if (!r) return
      const i = t._component
      ;(!k(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = ''))
      const o = n(r, !1, ma(r))
      return (r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), o)
    }),
    t
  )
}
function ma(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function _a(e) {
  return pe(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const Jt = typeof document < 'u'
function Oo(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function va(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Oo(e.default))
}
const ee = Object.assign
function Cs(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = ze(r) ? r.map(e) : e(r)
  }
  return n
}
const pn = () => {},
  ze = Array.isArray
function Jr(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
const To = /#/g,
  ya = /&/g,
  ba = /\//g,
  Ea = /=/g,
  Ca = /\?/g,
  Po = /\+/g,
  Aa = /%5B/g,
  xa = /%5D/g,
  Io = /%5E/g,
  Sa = /%60/g,
  No = /%7B/g,
  Ra = /%7C/g,
  Lo = /%7D/g,
  wa = /%20/g
function or(e) {
  return e == null
    ? ''
    : encodeURI('' + e)
        .replace(Ra, '|')
        .replace(Aa, '[')
        .replace(xa, ']')
}
function Oa(e) {
  return or(e).replace(No, '{').replace(Lo, '}').replace(Io, '^')
}
function Bs(e) {
  return or(e)
    .replace(Po, '%2B')
    .replace(wa, '+')
    .replace(To, '%23')
    .replace(ya, '%26')
    .replace(Sa, '`')
    .replace(No, '{')
    .replace(Lo, '}')
    .replace(Io, '^')
}
function Ta(e) {
  return Bs(e).replace(Ea, '%3D')
}
function Pa(e) {
  return or(e).replace(To, '%23').replace(Ca, '%3F')
}
function Ia(e) {
  return Pa(e).replace(ba, '%2F')
}
function Sn(e) {
  if (e == null) return null
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Na = /\/$/,
  La = (e) => e.replace(Na, '')
function As(e, t, n = '/') {
  let s,
    r = {},
    i = '',
    o = ''
  const l = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    (c = l >= 0 && c > l ? -1 : c),
    c >= 0 && ((s = t.slice(0, c)), (i = t.slice(c, l > 0 ? l : t.length)), (r = e(i.slice(1)))),
    l >= 0 && ((s = s || t.slice(0, l)), (o = t.slice(l, t.length))),
    (s = Ha(s ?? t, n)),
    { fullPath: s + i + o, path: s, query: r, hash: Sn(o) }
  )
}
function Ma(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Qr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Da(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Yt(t.matched[s], n.matched[r]) &&
    Mo(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Yt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Mo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (var n in e) if (!Fa(e[n], t[n])) return !1
  return !0
}
function Fa(e, t) {
  return ze(e) ? Yr(e, t) : ze(t) ? Yr(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf())
}
function Yr(e, t) {
  return ze(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t
}
function Ha(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let i = n.length - 1,
    o,
    l
  for (o = 0; o < s.length; o++)
    if (((l = s[o]), l !== '.'))
      if (l === '..') i > 1 && i--
      else break
  return n.slice(0, i).join('/') + '/' + s.slice(o).join('/')
}
const Ct = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
let js = (function (e) {
    return ((e.pop = 'pop'), (e.push = 'push'), e)
  })({}),
  xs = (function (e) {
    return ((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''), e)
  })({})
function Ba(e) {
  if (!e)
    if (Jt) {
      const t = document.querySelector('base')
      ;((e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, '')))
    } else e = '/'
  return (e[0] !== '/' && e[0] !== '#' && (e = '/' + e), La(e))
}
const ja = /^[^#]+#/
function Va(e, t) {
  return e.replace(ja, '#') + t
}
function $a(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return { behavior: t.behavior, left: s.left - n.left - (t.left || 0), top: s.top - n.top - (t.top || 0) }
}
const ls = () => ({ left: window.scrollX, top: window.scrollY })
function Ua(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r = typeof n == 'string' ? (s ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n
    if (!r) return
    t = $a(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Xr(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Vs = new Map()
function ka(e, t) {
  Vs.set(e, t)
}
function Ka(e) {
  const t = Vs.get(e)
  return (Vs.delete(e), t)
}
function Ga(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Do(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
let me = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = 'MATCHER_NOT_FOUND'),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = 'NAVIGATION_GUARD_REDIRECT'),
    (e[(e.NAVIGATION_ABORTED = 4)] = 'NAVIGATION_ABORTED'),
    (e[(e.NAVIGATION_CANCELLED = 8)] = 'NAVIGATION_CANCELLED'),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = 'NAVIGATION_DUPLICATED'),
    e
  )
})({})
const Fo = Symbol('')
;(me.MATCHER_NOT_FOUND + '',
  me.NAVIGATION_GUARD_REDIRECT + '',
  me.NAVIGATION_ABORTED + '',
  me.NAVIGATION_CANCELLED + '',
  me.NAVIGATION_DUPLICATED + '')
function Xt(e, t) {
  return ee(new Error(), { type: e, [Fo]: !0 }, t)
}
function ht(e, t) {
  return e instanceof Error && Fo in e && (t == null || !!(e.type & t))
}
const Wa = ['params', 'query', 'hash']
function qa(e) {
  if (typeof e == 'string') return e
  if (e.path != null) return e.path
  const t = {}
  for (const n of Wa) n in e && (t[n] = e[n])
  return JSON.stringify(t, null, 2)
}
function za(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < n.length; ++s) {
    const r = n[s].replace(Po, ' '),
      i = r.indexOf('='),
      o = Sn(i < 0 ? r : r.slice(0, i)),
      l = i < 0 ? null : Sn(r.slice(i + 1))
    if (o in t) {
      let c = t[o]
      ;(ze(c) || (c = t[o] = [c]), c.push(l))
    } else t[o] = l
  }
  return t
}
function Zr(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Ta(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(ze(s) ? s.map((r) => r && Bs(r)) : [s && Bs(s)]).forEach((r) => {
      r !== void 0 && ((t += (t.length ? '&' : '') + n), r != null && (t += '=' + r))
    })
  }
  return t
}
function Ja(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 && (t[n] = ze(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const Qa = Symbol(''),
  ei = Symbol(''),
  lr = Symbol(''),
  cr = Symbol(''),
  $s = Symbol('')
function nn() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function xt(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((l, c) => {
      const f = (p) => {
          p === !1
            ? c(Xt(me.NAVIGATION_ABORTED, { from: n, to: t }))
            : p instanceof Error
              ? c(p)
              : Ga(p)
                ? c(Xt(me.NAVIGATION_GUARD_REDIRECT, { from: t, to: p }))
                : (o && s.enterCallbacks[r] === o && typeof p == 'function' && o.push(p), l())
        },
        u = i(() => e.call(s && s.instances[r], t, n, f))
      let d = Promise.resolve(u)
      ;(e.length < 3 && (d = d.then(f)), d.catch((p) => c(p)))
    })
}
function Ss(e, t, n, s, r = (i) => i()) {
  const i = []
  for (const o of e)
    for (const l in o.components) {
      let c = o.components[l]
      if (!(t !== 'beforeRouteEnter' && !o.instances[l]))
        if (Oo(c)) {
          const f = (c.__vccOpts || c)[t]
          f && i.push(xt(f, n, s, o, l, r))
        } else {
          let f = c()
          i.push(() =>
            f.then((u) => {
              if (!u) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`)
              const d = va(u) ? u.default : u
              ;((o.mods[l] = u), (o.components[l] = d))
              const p = (d.__vccOpts || d)[t]
              return p && xt(p, n, s, o, l, r)()
            })
          )
        }
    }
  return i
}
function Ya(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const l = t.matched[o]
    l && (e.matched.find((f) => Yt(f, l)) ? s.push(l) : n.push(l))
    const c = e.matched[o]
    c && (t.matched.find((f) => Yt(f, c)) || r.push(c))
  }
  return [n, s, r]
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let Xa = () => location.protocol + '//' + location.host
function Ho(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let o = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = r.slice(o)
    return (l[0] !== '/' && (l = '/' + l), Qr(l, ''))
  }
  return Qr(n, e) + s + r
}
function Za(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const l = ({ state: p }) => {
    const m = Ho(e, location),
      T = n.value,
      R = t.value
    let j = 0
    if (p) {
      if (((n.value = m), (t.value = p), o && o === T)) {
        o = null
        return
      }
      j = R ? p.position - R.position : 0
    } else s(m)
    r.forEach((H) => {
      H(n.value, T, { delta: j, type: js.pop, direction: j ? (j > 0 ? xs.forward : xs.back) : xs.unknown })
    })
  }
  function c() {
    o = n.value
  }
  function f(p) {
    r.push(p)
    const m = () => {
      const T = r.indexOf(p)
      T > -1 && r.splice(T, 1)
    }
    return (i.push(m), m)
  }
  function u() {
    if (document.visibilityState === 'hidden') {
      const { history: p } = window
      if (!p.state) return
      p.replaceState(ee({}, p.state, { scroll: ls() }), '')
    }
  }
  function d() {
    for (const p of i) p()
    ;((i = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('pagehide', u),
      document.removeEventListener('visibilitychange', u))
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('pagehide', u),
    document.addEventListener('visibilitychange', u),
    { pauseListeners: c, listen: f, destroy: d }
  )
}
function ti(e, t, n, s = !1, r = !1) {
  return { back: e, current: t, forward: n, replaced: s, position: window.history.length, scroll: r ? ls() : null }
}
function eu(e) {
  const { history: t, location: n } = window,
    s = { value: Ho(e, n) },
    r = { value: t.state }
  r.value ||
    i(s.value, { back: null, current: s.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0)
  function i(c, f, u) {
    const d = e.indexOf('#'),
      p = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + c : Xa() + e + c
    try {
      ;(t[u ? 'replaceState' : 'pushState'](f, '', p), (r.value = f))
    } catch (m) {
      ;(console.error(m), n[u ? 'replace' : 'assign'](p))
    }
  }
  function o(c, f) {
    ;(i(c, ee({}, t.state, ti(r.value.back, c, r.value.forward, !0), f, { position: r.value.position }), !0),
      (s.value = c))
  }
  function l(c, f) {
    const u = ee({}, r.value, t.state, { forward: c, scroll: ls() })
    ;(i(u.current, u, !0), i(c, ee({}, ti(s.value, c, null), { position: u.position + 1 }, f), !1), (s.value = c))
  }
  return { location: s, state: r, push: l, replace: o }
}
function tu(e) {
  e = Ba(e)
  const t = eu(e),
    n = Za(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    ;(o || n.pauseListeners(), history.go(i))
  }
  const r = ee({ location: '', base: e, go: s, createHref: Va.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
let Vt = (function (e) {
  return ((e[(e.Static = 0)] = 'Static'), (e[(e.Param = 1)] = 'Param'), (e[(e.Group = 2)] = 'Group'), e)
})({})
var be = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.ParamRegExp = 2)] = 'ParamRegExp'),
    (e[(e.ParamRegExpEnd = 3)] = 'ParamRegExpEnd'),
    (e[(e.EscapeNext = 4)] = 'EscapeNext'),
    e
  )
})(be || {})
const nu = { type: Vt.Static, value: '' },
  su = /[a-zA-Z0-9_]/
function ru(e) {
  if (!e) return [[]]
  if (e === '/') return [[nu]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${f}": ${m}`)
  }
  let n = be.Static,
    s = n
  const r = []
  let i
  function o() {
    ;(i && r.push(i), (i = []))
  }
  let l = 0,
    c,
    f = '',
    u = ''
  function d() {
    f &&
      (n === be.Static
        ? i.push({ type: Vt.Static, value: f })
        : n === be.Param || n === be.ParamRegExp || n === be.ParamRegExpEnd
          ? (i.length > 1 &&
              (c === '*' || c === '+') &&
              t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
              type: Vt.Param,
              value: f,
              regexp: u,
              repeatable: c === '*' || c === '+',
              optional: c === '*' || c === '?',
            }))
          : t('Invalid state to consume buffer'),
      (f = ''))
  }
  function p() {
    f += c
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== be.ParamRegExp)) {
      ;((s = n), (n = be.EscapeNext))
      continue
    }
    switch (n) {
      case be.Static:
        c === '/' ? (f && d(), o()) : c === ':' ? (d(), (n = be.Param)) : p()
        break
      case be.EscapeNext:
        ;(p(), (n = s))
        break
      case be.Param:
        c === '('
          ? (n = be.ParamRegExp)
          : su.test(c)
            ? p()
            : (d(), (n = be.Static), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case be.ParamRegExp:
        c === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + c) : (n = be.ParamRegExpEnd)) : (u += c)
        break
      case be.ParamRegExpEnd:
        ;(d(), (n = be.Static), c !== '*' && c !== '?' && c !== '+' && l--, (u = ''))
        break
      default:
        t('Unknown state')
        break
    }
  }
  return (n === be.ParamRegExp && t(`Unfinished custom RegExp for param "${f}"`), d(), o(), r)
}
const ni = '[^/]+?',
  iu = { sensitive: !1, strict: !1, start: !0, end: !0 }
var Ie = (function (e) {
  return (
    (e[(e._multiplier = 10)] = '_multiplier'),
    (e[(e.Root = 90)] = 'Root'),
    (e[(e.Segment = 40)] = 'Segment'),
    (e[(e.SubSegment = 30)] = 'SubSegment'),
    (e[(e.Static = 40)] = 'Static'),
    (e[(e.Dynamic = 20)] = 'Dynamic'),
    (e[(e.BonusCustomRegExp = 10)] = 'BonusCustomRegExp'),
    (e[(e.BonusWildcard = -50)] = 'BonusWildcard'),
    (e[(e.BonusRepeatable = -20)] = 'BonusRepeatable'),
    (e[(e.BonusOptional = -8)] = 'BonusOptional'),
    (e[(e.BonusStrict = 0.7000000000000001)] = 'BonusStrict'),
    (e[(e.BonusCaseSensitive = 0.25)] = 'BonusCaseSensitive'),
    e
  )
})(Ie || {})
const ou = /[.+*?^${}()[\]/\\]/g
function lu(e, t) {
  const n = ee({}, iu, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const f of e) {
    const u = f.length ? [] : [Ie.Root]
    n.strict && !f.length && (r += '/')
    for (let d = 0; d < f.length; d++) {
      const p = f[d]
      let m = Ie.Segment + (n.sensitive ? Ie.BonusCaseSensitive : 0)
      if (p.type === Vt.Static) (d || (r += '/'), (r += p.value.replace(ou, '\\$&')), (m += Ie.Static))
      else if (p.type === Vt.Param) {
        const { value: T, repeatable: R, optional: j, regexp: H } = p
        i.push({ name: T, repeatable: R, optional: j })
        const P = H || ni
        if (P !== ni) {
          m += Ie.BonusCustomRegExp
          try {
            ;`${P}`
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${T}" (${P}): ` + I.message)
          }
        }
        let M = R ? `((?:${P})(?:/(?:${P}))*)` : `(${P})`
        ;(d || (M = j && f.length < 2 ? `(?:/${M})` : '/' + M),
          j && (M += '?'),
          (r += M),
          (m += Ie.Dynamic),
          j && (m += Ie.BonusOptional),
          R && (m += Ie.BonusRepeatable),
          P === '.*' && (m += Ie.BonusWildcard))
      }
      u.push(m)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const f = s.length - 1
    s[f][s[f].length - 1] += Ie.BonusStrict
  }
  ;(n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)'))
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function l(f) {
    const u = f.match(o),
      d = {}
    if (!u) return null
    for (let p = 1; p < u.length; p++) {
      const m = u[p] || '',
        T = i[p - 1]
      d[T.name] = m && T.repeatable ? m.split('/') : m
    }
    return d
  }
  function c(f) {
    let u = '',
      d = !1
    for (const p of e) {
      ;((!d || !u.endsWith('/')) && (u += '/'), (d = !1))
      for (const m of p)
        if (m.type === Vt.Static) u += m.value
        else if (m.type === Vt.Param) {
          const { value: T, repeatable: R, optional: j } = m,
            H = T in f ? f[T] : ''
          if (ze(H) && !R)
            throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`)
          const P = ze(H) ? H.join('/') : H
          if (!P)
            if (j) p.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${T}"`)
          u += P
        }
    }
    return u || '/'
  }
  return { re: o, score: s, keys: i, parse: l, stringify: c }
}
function cu(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === Ie.Static + Ie.Segment
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === Ie.Static + Ie.Segment
        ? 1
        : -1
      : 0
}
function Bo(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = cu(s[n], r[n])
    if (i) return i
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (si(s)) return 1
    if (si(r)) return -1
  }
  return r.length - s.length
}
function si(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const au = { strict: !1, end: !0, sensitive: !1 }
function uu(e, t, n) {
  const s = lu(ru(e.path), n),
    r = ee(s, { record: e, parent: t, children: [], alias: [] })
  return (t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r)
}
function fu(e, t) {
  const n = [],
    s = new Map()
  t = Jr(au, t)
  function r(d) {
    return s.get(d)
  }
  function i(d, p, m) {
    const T = !m,
      R = ii(d)
    R.aliasOf = m && m.record
    const j = Jr(t, d),
      H = [R]
    if ('alias' in d) {
      const I = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const G of I)
        H.push(
          ii(ee({}, R, { components: m ? m.record.components : R.components, path: G, aliasOf: m ? m.record : R }))
        )
    }
    let P, M
    for (const I of H) {
      const { path: G } = I
      if (p && G[0] !== '/') {
        const ge = p.record.path,
          q = ge[ge.length - 1] === '/' ? '' : '/'
        I.path = p.record.path + (G && q + G)
      }
      if (
        ((P = uu(I, p, j)),
        m ? m.alias.push(P) : ((M = M || P), M !== P && M.alias.push(P), T && d.name && !oi(P) && o(d.name)),
        jo(P) && c(P),
        R.children)
      ) {
        const ge = R.children
        for (let q = 0; q < ge.length; q++) i(ge[q], P, m && m.children[q])
      }
      m = m || P
    }
    return M
      ? () => {
          o(M)
        }
      : pn
  }
  function o(d) {
    if (Do(d)) {
      const p = s.get(d)
      p && (s.delete(d), n.splice(n.indexOf(p), 1), p.children.forEach(o), p.alias.forEach(o))
    } else {
      const p = n.indexOf(d)
      p > -1 && (n.splice(p, 1), d.record.name && s.delete(d.record.name), d.children.forEach(o), d.alias.forEach(o))
    }
  }
  function l() {
    return n
  }
  function c(d) {
    const p = pu(d, n)
    ;(n.splice(p, 0, d), d.record.name && !oi(d) && s.set(d.record.name, d))
  }
  function f(d, p) {
    let m,
      T = {},
      R,
      j
    if ('name' in d && d.name) {
      if (((m = s.get(d.name)), !m)) throw Xt(me.MATCHER_NOT_FOUND, { location: d })
      ;((j = m.record.name),
        (T = ee(
          ri(
            p.params,
            m.keys
              .filter((M) => !M.optional)
              .concat(m.parent ? m.parent.keys.filter((M) => M.optional) : [])
              .map((M) => M.name)
          ),
          d.params &&
            ri(
              d.params,
              m.keys.map((M) => M.name)
            )
        )),
        (R = m.stringify(T)))
    } else if (d.path != null)
      ((R = d.path), (m = n.find((M) => M.re.test(R))), m && ((T = m.parse(R)), (j = m.record.name)))
    else {
      if (((m = p.name ? s.get(p.name) : n.find((M) => M.re.test(p.path))), !m))
        throw Xt(me.MATCHER_NOT_FOUND, { location: d, currentLocation: p })
      ;((j = m.record.name), (T = ee({}, p.params, d.params)), (R = m.stringify(T)))
    }
    const H = []
    let P = m
    for (; P; ) (H.unshift(P.record), (P = P.parent))
    return { name: j, path: R, params: T, matched: H, meta: hu(H) }
  }
  e.forEach((d) => i(d))
  function u() {
    ;((n.length = 0), s.clear())
  }
  return { addRoute: i, resolve: f, removeRoute: o, clearRoutes: u, getRoutes: l, getRecordMatcher: r }
}
function ri(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function ii(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: du(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
  return (Object.defineProperty(t, 'mods', { value: {} }), t)
}
function du(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function oi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function hu(e) {
  return e.reduce((t, n) => ee(t, n.meta), {})
}
function pu(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    Bo(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const r = gu(e)
  return (r && (s = t.lastIndexOf(r, s - 1)), s)
}
function gu(e) {
  let t = e
  for (; (t = t.parent); ) if (jo(t) && Bo(e, t) === 0) return t
}
function jo({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function li(e) {
  const t = rt(lr),
    n = rt(cr),
    s = Ge(() => {
      const c = K(e.to)
      return t.resolve(c)
    }),
    r = Ge(() => {
      const { matched: c } = s.value,
        { length: f } = c,
        u = c[f - 1],
        d = n.matched
      if (!u || !d.length) return -1
      const p = d.findIndex(Yt.bind(null, u))
      if (p > -1) return p
      const m = ci(c[f - 2])
      return f > 1 && ci(u) === m && d[d.length - 1].path !== m ? d.findIndex(Yt.bind(null, c[f - 2])) : p
    }),
    i = Ge(() => r.value > -1 && bu(n.params, s.value.params)),
    o = Ge(() => r.value > -1 && r.value === n.matched.length - 1 && Mo(n.params, s.value.params))
  function l(c = {}) {
    if (yu(c)) {
      const f = t[K(e.replace) ? 'replace' : 'push'](K(e.to)).catch(pn)
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => f),
        f
      )
    }
    return Promise.resolve()
  }
  return { route: s, href: Ge(() => s.value.href), isActive: i, isExactActive: o, navigate: l }
}
function mu(e) {
  return e.length === 1 ? e[0] : e
}
const _u = Yi({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: li,
    setup(e, { slots: t }) {
      const n = Zn(li(e)),
        { options: s } = rt(lr),
        r = Ge(() => ({
          [ai(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [ai(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive,
        }))
      return () => {
        const i = t.default && mu(t.default(n))
        return e.custom
          ? i
          : ir(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i
            )
      }
    },
  }),
  vu = _u
function yu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return (e.preventDefault && e.preventDefault(), !0)
  }
}
function bu(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!ze(r) || r.length !== s.length || s.some((i, o) => i.valueOf() !== r[o].valueOf())) return !1
  }
  return !0
}
function ci(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const ai = (e, t, n) => e ?? t ?? n,
  Eu = Yi({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = rt($s),
        r = Ge(() => e.route || s.value),
        i = rt(ei, 0),
        o = Ge(() => {
          let f = K(i)
          const { matched: u } = r.value
          let d
          for (; (d = u[f]) && !d.components; ) f++
          return f
        }),
        l = Ge(() => r.value.matched[o.value])
      ;(Ln(
        ei,
        Ge(() => o.value + 1)
      ),
        Ln(Qa, l),
        Ln($s, r))
      const c = Zs()
      return (
        an(
          () => [c.value, l.value, e.name],
          ([f, u, d], [p, m, T]) => {
            ;(u &&
              ((u.instances[d] = f),
              m &&
                m !== u &&
                f &&
                f === p &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              f && u && (!m || !Yt(u, m) || !p) && (u.enterCallbacks[d] || []).forEach((R) => R(f)))
          },
          { flush: 'post' }
        ),
        () => {
          const f = r.value,
            u = e.name,
            d = l.value,
            p = d && d.components[u]
          if (!p) return ui(n.default, { Component: p, route: f })
          const m = d.props[u],
            T = m ? (m === !0 ? f.params : typeof m == 'function' ? m(f) : m) : null,
            j = ir(
              p,
              ee({}, T, t, {
                onVnodeUnmounted: (H) => {
                  H.component.isUnmounted && (d.instances[u] = null)
                },
                ref: c,
              })
            )
          return ui(n.default, { Component: j, route: f }) || j
        }
      )
    },
  })
function ui(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Cu = Eu
function Au(e) {
  const t = fu(e.routes, e),
    n = e.parseQuery || za,
    s = e.stringifyQuery || Zr,
    r = e.history,
    i = nn(),
    o = nn(),
    l = nn(),
    c = bl(Ct)
  let f = Ct
  Jt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const u = Cs.bind(null, (y) => '' + y),
    d = Cs.bind(null, Ia),
    p = Cs.bind(null, Sn)
  function m(y, L) {
    let w, V
    return (Do(y) ? ((w = t.getRecordMatcher(y)), (V = L)) : (V = y), t.addRoute(V, w))
  }
  function T(y) {
    const L = t.getRecordMatcher(y)
    L && t.removeRoute(L)
  }
  function R() {
    return t.getRoutes().map((y) => y.record)
  }
  function j(y) {
    return !!t.getRecordMatcher(y)
  }
  function H(y, L) {
    if (((L = ee({}, L || c.value)), typeof y == 'string')) {
      const _ = As(n, y, L.path),
        v = t.resolve({ path: _.path }, L),
        b = r.createHref(_.fullPath)
      return ee(_, v, { params: p(v.params), hash: Sn(_.hash), redirectedFrom: void 0, href: b })
    }
    let w
    if (y.path != null) w = ee({}, y, { path: As(n, y.path, L.path).path })
    else {
      const _ = ee({}, y.params)
      for (const v in _) _[v] == null && delete _[v]
      ;((w = ee({}, y, { params: d(_) })), (L.params = d(L.params)))
    }
    const V = t.resolve(w, L),
      a = y.hash || ''
    V.params = u(p(V.params))
    const h = Ma(s, ee({}, y, { hash: Oa(a), path: V.path })),
      g = r.createHref(h)
    return ee({ fullPath: h, hash: a, query: s === Zr ? Ja(y.query) : y.query || {} }, V, {
      redirectedFrom: void 0,
      href: g,
    })
  }
  function P(y) {
    return typeof y == 'string' ? As(n, y, c.value.path) : ee({}, y)
  }
  function M(y, L) {
    if (f !== y) return Xt(me.NAVIGATION_CANCELLED, { from: L, to: y })
  }
  function I(y) {
    return q(y)
  }
  function G(y) {
    return I(ee(P(y), { replace: !0 }))
  }
  function ge(y, L) {
    const w = y.matched[y.matched.length - 1]
    if (w && w.redirect) {
      const { redirect: V } = w
      let a = typeof V == 'function' ? V(y, L) : V
      return (
        typeof a == 'string' && ((a = a.includes('?') || a.includes('#') ? (a = P(a)) : { path: a }), (a.params = {})),
        ee({ query: y.query, hash: y.hash, params: a.path != null ? {} : y.params }, a)
      )
    }
  }
  function q(y, L) {
    const w = (f = H(y)),
      V = c.value,
      a = y.state,
      h = y.force,
      g = y.replace === !0,
      _ = ge(w, V)
    if (_) return q(ee(P(_), { state: typeof _ == 'object' ? ee({}, a, _.state) : a, force: h, replace: g }), L || w)
    const v = w
    v.redirectedFrom = L
    let b
    return (
      !h && Da(s, V, w) && ((b = Xt(me.NAVIGATION_DUPLICATED, { to: v, from: V })), Je(V, V, !0, !1)),
      (b ? Promise.resolve(b) : X(v, V))
        .catch((A) => (ht(A) ? (ht(A, me.NAVIGATION_GUARD_REDIRECT) ? A : bt(A)) : Z(A, v, V)))
        .then((A) => {
          if (A) {
            if (ht(A, me.NAVIGATION_GUARD_REDIRECT))
              return q(
                ee({ replace: g }, P(A.to), { state: typeof A.to == 'object' ? ee({}, a, A.to.state) : a, force: h }),
                L || v
              )
          } else A = N(v, V, !0, g, a)
          return (ce(v, V, A), A)
        })
    )
  }
  function U(y, L) {
    const w = M(y, L)
    return w ? Promise.reject(w) : Promise.resolve()
  }
  function J(y) {
    const L = It.values().next().value
    return L && typeof L.runWithContext == 'function' ? L.runWithContext(y) : y()
  }
  function X(y, L) {
    let w
    const [V, a, h] = Ya(y, L)
    w = Ss(V.reverse(), 'beforeRouteLeave', y, L)
    for (const _ of V)
      _.leaveGuards.forEach((v) => {
        w.push(xt(v, y, L))
      })
    const g = U.bind(null, y, L)
    return (
      w.push(g),
      Fe(w)
        .then(() => {
          w = []
          for (const _ of i.list()) w.push(xt(_, y, L))
          return (w.push(g), Fe(w))
        })
        .then(() => {
          w = Ss(a, 'beforeRouteUpdate', y, L)
          for (const _ of a)
            _.updateGuards.forEach((v) => {
              w.push(xt(v, y, L))
            })
          return (w.push(g), Fe(w))
        })
        .then(() => {
          w = []
          for (const _ of h)
            if (_.beforeEnter)
              if (ze(_.beforeEnter)) for (const v of _.beforeEnter) w.push(xt(v, y, L))
              else w.push(xt(_.beforeEnter, y, L))
          return (w.push(g), Fe(w))
        })
        .then(
          () => (
            y.matched.forEach((_) => (_.enterCallbacks = {})),
            (w = Ss(h, 'beforeRouteEnter', y, L, J)),
            w.push(g),
            Fe(w)
          )
        )
        .then(() => {
          w = []
          for (const _ of o.list()) w.push(xt(_, y, L))
          return (w.push(g), Fe(w))
        })
        .catch((_) => (ht(_, me.NAVIGATION_CANCELLED) ? _ : Promise.reject(_)))
    )
  }
  function ce(y, L, w) {
    l.list().forEach((V) => J(() => V(y, L, w)))
  }
  function N(y, L, w, V, a) {
    const h = M(y, L)
    if (h) return h
    const g = L === Ct,
      _ = Jt ? history.state : {}
    ;(w && (V || g ? r.replace(y.fullPath, ee({ scroll: g && _ && _.scroll }, a)) : r.push(y.fullPath, a)),
      (c.value = y),
      Je(y, L, w, g),
      bt())
  }
  let ne
  function we() {
    ne ||
      (ne = r.listen((y, L, w) => {
        if (!Nt.listening) return
        const V = H(y),
          a = ge(V, Nt.currentRoute.value)
        if (a) {
          q(ee(a, { replace: !0, force: !0 }), V).catch(pn)
          return
        }
        f = V
        const h = c.value
        ;(Jt && ka(Xr(h.fullPath, w.delta), ls()),
          X(V, h)
            .catch((g) =>
              ht(g, me.NAVIGATION_ABORTED | me.NAVIGATION_CANCELLED)
                ? g
                : ht(g, me.NAVIGATION_GUARD_REDIRECT)
                  ? (q(ee(P(g.to), { force: !0 }), V)
                      .then((_) => {
                        ht(_, me.NAVIGATION_ABORTED | me.NAVIGATION_DUPLICATED) &&
                          !w.delta &&
                          w.type === js.pop &&
                          r.go(-1, !1)
                      })
                      .catch(pn),
                    Promise.reject())
                  : (w.delta && r.go(-w.delta, !1), Z(g, V, h))
            )
            .then((g) => {
              ;((g = g || N(V, h, !1)),
                g &&
                  (w.delta && !ht(g, me.NAVIGATION_CANCELLED)
                    ? r.go(-w.delta, !1)
                    : w.type === js.pop && ht(g, me.NAVIGATION_ABORTED | me.NAVIGATION_DUPLICATED) && r.go(-1, !1)),
                ce(V, h, g))
            })
            .catch(pn))
      }))
  }
  let Ue = nn(),
    _e = nn(),
    se
  function Z(y, L, w) {
    bt(y)
    const V = _e.list()
    return (V.length ? V.forEach((a) => a(y, L, w)) : console.error(y), Promise.reject(y))
  }
  function at() {
    return se && c.value !== Ct
      ? Promise.resolve()
      : new Promise((y, L) => {
          Ue.add([y, L])
        })
  }
  function bt(y) {
    return (se || ((se = !y), we(), Ue.list().forEach(([L, w]) => (y ? w(y) : L())), Ue.reset()), y)
  }
  function Je(y, L, w, V) {
    const { scrollBehavior: a } = e
    if (!Jt || !a) return Promise.resolve()
    const h = (!w && Ka(Xr(y.fullPath, 0))) || ((V || !w) && history.state && history.state.scroll) || null
    return ji()
      .then(() => a(y, L, h))
      .then((g) => g && Ua(g))
      .catch((g) => Z(g, y, L))
  }
  const Oe = (y) => r.go(y)
  let Wt
  const It = new Set(),
    Nt = {
      currentRoute: c,
      listening: !0,
      addRoute: m,
      removeRoute: T,
      clearRoutes: t.clearRoutes,
      hasRoute: j,
      getRoutes: R,
      resolve: H,
      options: e,
      push: I,
      replace: G,
      go: Oe,
      back: () => Oe(-1),
      forward: () => Oe(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: _e.add,
      isReady: at,
      install(y) {
        ;(y.component('RouterLink', vu),
          y.component('RouterView', Cu),
          (y.config.globalProperties.$router = Nt),
          Object.defineProperty(y.config.globalProperties, '$route', { enumerable: !0, get: () => K(c) }),
          Jt && !Wt && c.value === Ct && ((Wt = !0), I(r.location).catch((V) => {})))
        const L = {}
        for (const V in Ct) Object.defineProperty(L, V, { get: () => c.value[V], enumerable: !0 })
        ;(y.provide(lr, Nt), y.provide(cr, Di(L)), y.provide($s, c))
        const w = y.unmount
        ;(It.add(y),
          (y.unmount = function () {
            ;(It.delete(y),
              It.size < 1 && ((f = Ct), ne && ne(), (ne = null), (c.value = Ct), (Wt = !1), (se = !1)),
              w())
          }))
      },
    }
  function Fe(y) {
    return y.reduce((L, w) => L.then(() => J(w)), Promise.resolve())
  }
  return Nt
}
function xu(e) {
  return rt(cr)
}
const fi = '/seaclean/assets/logo-CeJlNVBf.png',
  W = {
    brand: {
      name: '海韻清潔',
      legalName: '海韻清潔有限公司',
      tagline: '是您最好的清潔幫手',
      description: '專業、迅速、實在，讓每一個空間回到舒適潔淨的樣子。',
    },
    navigation: [
      { label: '首頁', to: '/' },
      { label: '關於海韻', to: '/about' },
      { label: '服務項目', to: '/services' },
      { label: '聯絡我們', to: '/contact' },
    ],
    home: {
      eyebrow: '大台北專業清潔服務',
      intro: ['海韻清潔是專業清潔公司，', '我們秉持以客戶為尊與誠信的服務熱忱，', '為您改善居家清潔與公司清潔的品質。'],
      highlights: [
        { number: '01', title: '免費估價', text: '依現場需求評估，提供清楚合適的服務建議。' },
        { number: '02', title: '專業團隊', text: '受過訓練的清潔人員，以效率與細節完成工作。' },
        { number: '03', title: '多元服務', text: '從居家、公司到裝潢細清，一站處理各類需求。' },
      ],
      banners: Array.from({ length: 8 }, (e, t) => `/seaclean/images/banner-${t + 1}.jpg`),
    },
    about: {
      eyebrow: '經營理念',
      title: '清潔服務最專業',
      paragraphs: [
        '海韻清潔致力於專業的清潔服務，我們追求最好的品質、最快速的效率來完成每一項工作，帶給客戶乾淨且舒適的清潔環境，一直是我們追求的目標。',
        '我們的清潔團隊是一群訓練有素、具有專業水準、熱忱親切的夥伴。秉持為客戶創造美好、潔淨、舒適環境的宗旨，「專業、創新、實在」是海韻清潔的經營理念。選擇我們，立即擁有各種專業清潔服務，並享受各項優惠清潔專案。',
      ],
      values: ['專業', '創新', '實在'],
    },
    services: {
      eyebrow: '服務項目',
      title: '從日常維護到專業工程',
      intro: '依空間、材質與現場狀況安排合適方案，歡迎先來電諮詢或預約免費現場估價。',
      items: [
        { title: '居家與辦公清潔', text: '台北縣市環境清潔宅配服務。', image: '/seaclean/images/team-1.jpg' },
        { title: '駐點清潔', text: '公司、工廠、住家派駐清潔人員。', image: '/seaclean/images/team-2.jpg' },
        { title: '地板與石材養護', text: '地毯清洗、石材研磨、洗地打蠟。', image: '/seaclean/images/team-3.jpg' },
        { title: '社區環境維護', text: '社區大樓清洗、水塔消毒與除蟲。', image: '/seaclean/images/team-4.jpg' },
        { title: '廢棄物處理', text: '拆除搬運與廢棄物清理。', image: '/seaclean/images/team-5.jpg' },
        { title: '裝潢與交屋細清', text: '裝潢後細部清潔與交屋清潔。', image: '/seaclean/images/team-6.jpg' },
        { title: '外牆與高處清洗', text: '大樓外牆清洗與洗窗機租借。', image: '/seaclean/images/team-7.jpg' },
        { title: '免費現場估價', text: '政府立案，依現場需求提供估價。', image: '/seaclean/images/team-8.jpg' },
      ],
    },
    contact: {
      eyebrow: '聯絡我們',
      title: '告訴我們您的清潔需求',
      description: '請提供空間類型、坪數、地點與希望服務的日期，我們會儘快回覆。',
      address: '臺北市信義區基隆路1段155號13樓之6',
      phone: '0939-600-865',
      phoneHref: 'tel:+886939600865',
      email: 'cindy246332@gmail.com',
    },
  },
  Su = { class: 'site-shell' },
  Ru = { class: 'site-header' },
  wu = { class: 'container header-inner' },
  Ou = ['aria-expanded'],
  Tu = ['href'],
  Pu = { class: 'site-footer' },
  Iu = { class: 'container footer-grid' },
  Nu = { class: 'footer-links' },
  Lu = ['href'],
  Mu = ['href'],
  Du = { class: 'container copyright' },
  Fu = ['href'],
  Hu = {
    __name: 'App',
    setup(e) {
      const t = xu(),
        n = Zs(!1),
        s = () => {
          n.value = !1
        }
      return (
        an(n, (r) => {
          document.body.classList.toggle('mobile-nav-open', r)
        }),
        rs(() => {
          document.body.classList.remove('mobile-nav-open')
        }),
        (r, i) => {
          const o = $n('RouterLink'),
            l = $n('RouterView')
          return (
            le(),
            de('div', Su, [
              C('header', Ru, [
                C('div', wu, [
                  he(
                    o,
                    { class: 'brand', to: '/', 'aria-label': '海韻清潔首頁', onClick: s },
                    {
                      default: _t(() => [...(i[1] || (i[1] = [C('img', { src: fi, alt: '海韻清潔' }, null, -1)]))]),
                      _: 1,
                    }
                  ),
                  C(
                    'button',
                    {
                      class: 'menu-toggle',
                      type: 'button',
                      'aria-expanded': n.value,
                      'aria-controls': 'primary-navigation',
                      onClick: i[0] || (i[0] = (c) => (n.value = !n.value)),
                    },
                    [
                      ...(i[2] ||
                        (i[2] = [
                          C('span', null, null, -1),
                          C('span', null, null, -1),
                          C('span', null, null, -1),
                          C('span', { class: 'sr-only' }, '開啟選單', -1),
                        ])),
                    ],
                    8,
                    Ou
                  ),
                  C(
                    'nav',
                    {
                      id: 'primary-navigation',
                      class: Kt(['primary-nav', { open: n.value }]),
                      'aria-label': '主要導覽',
                    },
                    [
                      (le(!0),
                      de(
                        fe,
                        null,
                        vt(
                          K(W).navigation,
                          (c) => (
                            le(),
                            Fs(
                              o,
                              { key: c.to, to: c.to, class: Kt({ active: K(t).path === c.to }), onClick: s },
                              { default: _t(() => [Rt(ie(c.label), 1)]), _: 2 },
                              1032,
                              ['to', 'class']
                            )
                          )
                        ),
                        128
                      )),
                      C('a', { class: 'nav-cta', href: K(W).contact.phoneHref }, '立即諮詢', 8, Tu),
                    ],
                    2
                  ),
                ]),
              ]),
              he(
                kc,
                { name: 'nav-mask' },
                {
                  default: _t(() => [
                    n.value
                      ? (le(),
                        de('button', {
                          key: 0,
                          class: 'navigation-mask',
                          type: 'button',
                          'aria-label': '關閉導覽選單',
                          onClick: s,
                        }))
                      : sr('', !0),
                  ]),
                  _: 1,
                }
              ),
              C('main', null, [he(l)]),
              C('footer', Pu, [
                C('div', Iu, [
                  C('div', null, [
                    i[3] || (i[3] = C('img', { class: 'footer-logo', src: fi, alt: '海韻清潔' }, null, -1)),
                    C('p', null, ie(K(W).brand.description), 1),
                  ]),
                  C('div', null, [
                    i[4] || (i[4] = C('p', { class: 'footer-label' }, '網站導覽', -1)),
                    C('div', Nu, [
                      (le(!0),
                      de(
                        fe,
                        null,
                        vt(
                          K(W).navigation,
                          (c) => (
                            le(),
                            Fs(o, { key: c.to, to: c.to }, { default: _t(() => [Rt(ie(c.label), 1)]), _: 2 }, 1032, [
                              'to',
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  C('div', null, [
                    i[5] || (i[5] = C('p', { class: 'footer-label' }, '聯絡資訊', -1)),
                    C('address', null, [
                      C('a', { href: K(W).contact.phoneHref }, ie(K(W).contact.phone), 9, Lu),
                      C('a', { href: `mailto:${K(W).contact.email}` }, ie(K(W).contact.email), 9, Mu),
                      C('span', null, ie(K(W).contact.address), 1),
                    ]),
                  ]),
                ]),
                C('div', Du, [
                  C('span', null, '© ' + ie(new Date().getFullYear()) + ' ' + ie(K(W).brand.legalName), 1),
                  i[6] || (i[6] = C('span', null, '專業 · 創新 · 實在', -1)),
                ]),
              ]),
              C(
                'a',
                { class: 'floating-call', href: K(W).contact.phoneHref, 'aria-label': '撥打電話' },
                [i[7] || (i[7] = C('span', null, '電話諮詢', -1)), C('strong', null, ie(K(W).contact.phone), 1)],
                8,
                Fu
              ),
            ])
          )
        }
      )
    },
  },
  Bu = { class: 'home-hero' },
  ju = { class: 'hero-slides', 'aria-hidden': 'true' },
  Vu = ['src'],
  $u = { class: 'container hero-content' },
  Uu = { class: 'eyebrow light' },
  ku = { class: 'hero-actions' },
  Ku = { class: 'slide-dots', 'aria-label': '輪播圖片切換' },
  Gu = ['aria-label', 'onClick'],
  Wu = { class: 'intro-section section' },
  qu = { class: 'container intro-grid' },
  zu = { class: 'intro-copy' },
  Ju = { class: 'section feature-section' },
  Qu = { class: 'container feature-grid' },
  Yu = { class: 'home-cta' },
  Xu = { class: 'container cta-inner' },
  Zu = {
    __name: 'HomeView',
    setup(e) {
      const t = Zs(0)
      let n
      const s = (r) => {
        t.value = (r + W.home.banners.length) % W.home.banners.length
      }
      return (
        er(() => {
          n = window.setInterval(() => s(t.value + 1), 5e3)
        }),
        rs(() => window.clearInterval(n)),
        (r, i) => {
          const o = $n('RouterLink')
          return (
            le(),
            de(
              fe,
              null,
              [
                C('section', Bu, [
                  C('div', ju, [
                    (le(!0),
                    de(
                      fe,
                      null,
                      vt(
                        K(W).home.banners,
                        (l, c) => (
                          le(),
                          de('img', { key: l, src: l, alt: '', class: Kt({ active: t.value === c }) }, null, 10, Vu)
                        )
                      ),
                      128
                    )),
                  ]),
                  i[3] || (i[3] = C('div', { class: 'hero-overlay' }, null, -1)),
                  C('div', $u, [
                    C('p', Uu, ie(K(W).home.eyebrow), 1),
                    C('h1', null, [Rt(ie(K(W).brand.tagline), 1), i[0] || (i[0] = C('span', null, '！', -1))]),
                    C('p', null, ie(K(W).brand.description), 1),
                    C('div', ku, [
                      he(
                        o,
                        { class: 'button button-primary', to: '/contact' },
                        { default: _t(() => [...(i[1] || (i[1] = [Rt('預約免費估價', -1)]))]), _: 1 }
                      ),
                      he(
                        o,
                        { class: 'button button-ghost', to: '/services' },
                        { default: _t(() => [...(i[2] || (i[2] = [Rt('查看服務項目', -1)]))]), _: 1 }
                      ),
                    ]),
                  ]),
                  C('div', Ku, [
                    (le(!0),
                    de(
                      fe,
                      null,
                      vt(
                        K(W).home.banners,
                        (l, c) => (
                          le(),
                          de(
                            'button',
                            {
                              key: c,
                              type: 'button',
                              class: Kt({ active: t.value === c }),
                              'aria-label': `顯示第 ${c + 1} 張圖片`,
                              onClick: (f) => s(c),
                            },
                            null,
                            10,
                            Gu
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                C('section', Wu, [
                  C('div', qu, [
                    i[4] ||
                      (i[4] = C(
                        'div',
                        null,
                        [
                          C('p', { class: 'eyebrow' }, '我們的承諾'),
                          C('h2', null, '把潔淨，還給每一個生活與工作的空間'),
                        ],
                        -1
                      )),
                    C('div', zu, [
                      (le(!0),
                      de(
                        fe,
                        null,
                        vt(K(W).home.intro, (l) => (le(), de('p', { key: l }, ie(l), 1))),
                        128
                      )),
                    ]),
                  ]),
                ]),
                C('section', Ju, [
                  C('div', Qu, [
                    (le(!0),
                    de(
                      fe,
                      null,
                      vt(
                        K(W).home.highlights,
                        (l) => (
                          le(),
                          de('article', { key: l.number, class: 'feature-card' }, [
                            C('span', null, ie(l.number), 1),
                            C('h3', null, ie(l.title), 1),
                            C('p', null, ie(l.text), 1),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                C('section', Yu, [
                  C('div', Xu, [
                    i[6] ||
                      (i[6] = C(
                        'div',
                        null,
                        [
                          C('p', { class: 'eyebrow light' }, '讓我們協助您'),
                          C('h2', null, '不確定需要哪一種清潔服務？'),
                        ],
                        -1
                      )),
                    he(
                      o,
                      { class: 'button button-light', to: '/contact' },
                      { default: _t(() => [...(i[5] || (i[5] = [Rt('聯絡我們', -1)]))]), _: 1 }
                    ),
                  ]),
                ]),
              ],
              64
            )
          )
        }
      )
    },
  },
  ef = '/seaclean/assets/abt-1-Dfu7L4i9.jpg',
  tf = { class: 'page-hero' },
  nf = { class: 'container page-hero-inner' },
  sf = { class: 'eyebrow' },
  rf = { key: 0, class: 'page-lead' },
  ar = {
    __name: 'PageHero',
    props: {
      eyebrow: { type: String, required: !0 },
      title: { type: String, required: !0 },
      description: { type: String, default: '' },
    },
    setup(e) {
      return (t, n) => (
        le(),
        de('section', tf, [
          C('div', nf, [
            C('p', sf, ie(e.eyebrow), 1),
            C('h1', null, ie(e.title), 1),
            e.description ? (le(), de('p', rf, ie(e.description), 1)) : sr('', !0),
          ]),
        ])
      )
    },
  },
  of = { class: 'section' },
  lf = { class: 'container split-layout' },
  cf = { class: 'prose-block' },
  af = { class: 'value-list' },
  uf = {
    __name: 'AboutView',
    setup(e) {
      return (t, n) => (
        le(),
        de(
          fe,
          null,
          [
            he(
              ar,
              {
                eyebrow: K(W).about.eyebrow,
                title: K(W).about.title,
                description: '專業、創新、實在，是我們對每一次服務的堅持。',
              },
              null,
              8,
              ['eyebrow', 'title']
            ),
            C('section', of, [
              C('div', lf, [
                n[2] ||
                  (n[2] = C('div', { class: 'image-frame' }, [C('img', { src: ef, alt: '專業清潔服務人員' })], -1)),
                C('div', cf, [
                  n[0] || (n[0] = C('p', { class: 'eyebrow' }, '海韻的理念', -1)),
                  n[1] || (n[1] = C('h2', null, '用專業與熱忱，創造舒適潔淨的環境', -1)),
                  (le(!0),
                  de(
                    fe,
                    null,
                    vt(K(W).about.paragraphs, (s) => (le(), de('p', { key: s }, ie(s), 1))),
                    128
                  )),
                  C('div', af, [
                    (le(!0),
                    de(
                      fe,
                      null,
                      vt(K(W).about.values, (s) => (le(), de('span', { key: s }, ie(s), 1))),
                      128
                    )),
                  ]),
                ]),
              ]),
            ]),
          ],
          64
        )
      )
    },
  },
  ff = { class: 'section services-section' },
  df = { class: 'container service-grid' },
  hf = { class: 'service-image' },
  pf = ['src', 'alt'],
  gf = { class: 'service-copy' },
  mf = { class: 'home-cta' },
  _f = { class: 'container cta-inner' },
  vf = {
    __name: 'ServicesView',
    setup(e) {
      return (t, n) => {
        const s = $n('RouterLink')
        return (
          le(),
          de(
            fe,
            null,
            [
              he(
                ar,
                { eyebrow: K(W).services.eyebrow, title: K(W).services.title, description: K(W).services.intro },
                null,
                8,
                ['eyebrow', 'title', 'description']
              ),
              C('section', ff, [
                C('div', df, [
                  (le(!0),
                  de(
                    fe,
                    null,
                    vt(
                      K(W).services.items,
                      (r, i) => (
                        le(),
                        de('article', { key: r.title, class: 'service-card' }, [
                          C('div', hf, [
                            C('img', { src: r.image, alt: r.title }, null, 8, pf),
                            C('span', null, ie(String(i + 1).padStart(2, '0')), 1),
                          ]),
                          C('div', gf, [C('h2', null, ie(r.title), 1), C('p', null, ie(r.text), 1)]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              C('section', mf, [
                C('div', _f, [
                  n[1] ||
                    (n[1] = C(
                      'div',
                      null,
                      [
                        C('p', { class: 'eyebrow light' }, '政府立案 · 專業服務'),
                        C('h2', null, '歡迎預約免費現場估價'),
                      ],
                      -1
                    )),
                  he(
                    s,
                    { class: 'button button-light', to: '/contact' },
                    { default: _t(() => [...(n[0] || (n[0] = [Rt('立即聯絡', -1)]))]), _: 1 }
                  ),
                ]),
              ]),
            ],
            64
          )
        )
      }
    },
  },
  yf = '/seaclean/assets/service-1-CmQH8jEH.jpg',
  bf = { class: 'section contact-section' },
  Ef = { class: 'container contact-grid' },
  Cf = { class: 'contact-details' },
  Af = ['href'],
  xf = ['href'],
  Sf = {
    __name: 'ContactView',
    setup(e) {
      return (t, n) => (
        le(),
        de(
          fe,
          null,
          [
            he(
              ar,
              { eyebrow: K(W).contact.eyebrow, title: K(W).contact.title, description: K(W).contact.description },
              null,
              8,
              ['eyebrow', 'title', 'description']
            ),
            C('section', bf, [
              C('div', Ef, [
                n[6] ||
                  (n[6] = C('div', { class: 'contact-image' }, [C('img', { src: yf, alt: '海韻專業清潔服務' })], -1)),
                C('div', Cf, [
                  C('article', null, [
                    n[0] || (n[0] = C('span', null, '電話', -1)),
                    C('a', { href: K(W).contact.phoneHref }, ie(K(W).contact.phone), 9, Af),
                    n[1] || (n[1] = C('p', null, '點擊電話號碼可直接撥打', -1)),
                  ]),
                  C('article', null, [
                    n[2] || (n[2] = C('span', null, '電子郵件', -1)),
                    C('a', { href: `mailto:${K(W).contact.email}` }, ie(K(W).contact.email), 9, xf),
                    n[3] || (n[3] = C('p', null, '請留下服務地點與需求，我們會儘快回覆', -1)),
                  ]),
                  C('article', null, [
                    n[4] || (n[4] = C('span', null, '公司地址', -1)),
                    C('strong', null, ie(K(W).contact.address), 1),
                    n[5] || (n[5] = C('p', null, '到訪前請先來電預約', -1)),
                  ]),
                ]),
              ]),
            ]),
          ],
          64
        )
      )
    },
  },
  Vo = Au({
    history: tu('/seaclean/'),
    scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
    routes: [
      { path: '/', component: Zu, meta: { title: '首頁' } },
      { path: '/about', component: uf, meta: { title: '關於海韻' } },
      { path: '/services', component: vf, meta: { title: '服務項目' } },
      { path: '/contact', component: Sf, meta: { title: '聯絡我們' } },
      { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
  })
Vo.afterEach((e) => {
  document.title = `${e.meta.title}｜海韻清潔有限公司`
})
ga(Hu).use(Vo).mount('#app')
