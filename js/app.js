#! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
#//@ sourceMappingURL=jquery-1.10.2.min.map
#
((e, t) ->
  M = (e) ->
    t = e.length
    n = x.type(e)
    (if x.isWindow(e) then not 1 else (if 1 is e.nodeType and t then not 0 else "array" is n or "function" isnt n and (0 is t or "number" is typeof t and t > 0 and t - 1 of e)))
  F = (e) ->
    t = O[e] = {}
    x.each(e.match(T) or [], (e, n) ->
      t[n] = not 0
    )
    t
  R = (e, n, r, i) ->
    if x.acceptData(e)
      o = undefined
      a = undefined
      s = x.expando
      l = e.nodeType
      u = (if l then x.cache else e)
      c = (if l then e[s] else e[s] and s)
      if c and u[c] and (i or u[c].data) or r isnt t or "string" isnt typeof n
        c or (c = (if l then e[s] = p.pop() or x.guid++ else s))
        u[c] or (u[c] = (if l then {} else toJSON: x.noop))
        ("object" is typeof n or "function" is typeof n) and ((if i then u[c] = x.extend(u[c], n) else u[c].data = x.extend(u[c].data, n)))
        a = u[c]
        i or (a.data or (a.data = {})
        a = a.data
        )
        r isnt t and (a[x.camelCase(n)] = r)
        (if "string" is typeof n then (o = a[n]
        null is o and (o = a[x.camelCase(n)])
        ) else o = a)
        o
  W = (e, t, n) ->
    if x.acceptData(e)
      r = undefined
      i = undefined
      o = e.nodeType
      a = (if o then x.cache else e)
      s = (if o then e[x.expando] else x.expando)
      if a[s]
        if t and (r = (if n then a[s] else a[s].data))
          (if x.isArray(t) then t = t.concat(x.map(t, x.camelCase)) else (if t of r then t = [t] else (t = x.camelCase(t)
          t = (if t of r then [t] else t.split(" "))
          )))
          i = t.length

          delete r[t[i]]  while i--
          return  if (if n then not I(r) else not x.isEmptyObject(r))
        (n or (delete a[s].data

        I(a[s])
        )) and ((if o then x.cleanData([e], not 0) else (if x.support.deleteExpando or a isnt a.window then delete a[s]
         else a[s] = null)))
  $ = (e, n, r) ->
    if r is t and 1 is e.nodeType
      i = "data-" + n.replace(P, "-$1").toLowerCase()
      if r = e.getAttribute(i)
      "string" is typeof r
        try
          r = (if "true" is r then not 0 else (if "false" is r then not 1 else (if "null" is r then null else (if +r + "" is r then +r else (if B.test(r) then x.parseJSON(r) else r)))))
        x.data e, n, r
      else
        r = t
    r
  I = (e) ->
    t = undefined
    for t of e
      return not 1  if ("data" isnt t or not x.isEmptyObject(e[t])) and "toJSON" isnt t
    not 0
  it = ->
    not 0
  ot = ->
    not 1
  at = ->
    try
      return a.activeElement
  pt = (e, t) ->
    loop
      e = e[t]
      break unless e and 1 isnt e.nodeType
    e
  ft = (e, t, n) ->
    if x.isFunction(t)
      return x.grep(e, (e, r) ->
        !!t.call(e, r, e) isnt n
      )
    if t.nodeType
      return x.grep(e, (e) ->
        e is t isnt n
      )
    if "string" is typeof t
      return x.filter(t, e, n)  if st.test(t)
      t = x.filter(t, e)
    x.grep e, (e) ->
      x.inArray(e, t) >= 0 isnt n

  dt = (e) ->
    t = ht.split("|")
    n = e.createDocumentFragment()
    n.createElement t.pop()  while t.length  if n.createElement
    n
  Lt = (e, t) ->
    (if x.nodeName(e, "table") and x.nodeName((if 1 is t.nodeType then t else t.firstChild), "tr") then e.getElementsByTagName("tbody")[0] or e.appendChild(e.ownerDocument.createElement("tbody")) else e)
  Ht = (e) ->
    e.type = (null isnt x.find.attr(e, "type")) + "/" + e.type
    e
  qt = (e) ->
    t = Et.exec(e.type)
    (if t then e.type = t[1] else e.removeAttribute("type"))
    e
  _t = (e, t) ->
    n = undefined
    r = 0
    while null isnt (n = e[r])
      x._data n, "globalEval", not t or x._data(t[r], "globalEval")
      r++
  Mt = (e, t) ->
    if 1 is t.nodeType and x.hasData(e)
      n = undefined
      r = undefined
      i = undefined
      o = x._data(e)
      a = x._data(t, o)
      s = o.events
      if s
        delete a.handle

        a.events = {}

        for n of s
          r = 0
          i = s[n].length

          while i > r
            x.event.add t, n, s[n][r]
            r++
      a.data and (a.data = x.extend({}, a.data))
  Ot = (e, t) ->
    n = undefined
    r = undefined
    i = undefined
    if 1 is t.nodeType
      if n = t.nodeName.toLowerCase()
      not x.support.noCloneEvent and t[x.expando]
        i = x._data(t)
        for r of i.events
          x.removeEvent t, r, i.handle
        t.removeAttribute x.expando
      (if "script" is n and t.text isnt e.text then (Ht(t).text = e.text
      qt(t)
      ) else (if "object" is n then (t.parentNode and (t.outerHTML = e.outerHTML)
      x.support.html5Clone and e.innerHTML and not x.trim(t.innerHTML) and (t.innerHTML = e.innerHTML)
      ) else (if "input" is n and Ct.test(e.type) then (t.defaultChecked = t.checked = e.checked
      t.value isnt e.value and (t.value = e.value)
      ) else (if "option" is n then t.defaultSelected = t.selected = e.defaultSelected else ("input" is n or "textarea" is n) and (t.defaultValue = e.defaultValue)))))
  Ft = (e, n) ->
    r = undefined
    o = undefined
    a = 0
    s = (if typeof e.getElementsByTagName isnt i then e.getElementsByTagName(n or "*") else (if typeof e.querySelectorAll isnt i then e.querySelectorAll(n or "*") else t))
    unless s
      s = []
      r = e.childNodes or e

      while null isnt (o = r[a])
        (if not n or x.nodeName(o, n) then s.push(o) else x.merge(s, Ft(o, n)))
        a++
    (if n is t or n and x.nodeName(e, n) then x.merge([e], s) else s)
  Bt = (e) ->
    Ct.test(e.type) and (e.defaultChecked = e.checked)
  tn = (e, t) ->
    return t  if t of e
    n = t.charAt(0).toUpperCase() + t.slice(1)
    r = t
    i = en.length
    while i--
      return t  if t = en[i] + n
      t of e
    r
  nn = (e, t) ->
    e = t or e
    "none" is x.css(e, "display") or not x.contains(e.ownerDocument, e)
  rn = (e, t) ->
    n = undefined
    r = undefined
    i = undefined
    o = []
    a = 0
    s = e.length
    while s > a
      r = e[a]
      r.style and (o[a] = x._data(r, "olddisplay")
      n = r.style.display
      (if t then (o[a] or "none" isnt n or (r.style.display = "")
      "" is r.style.display and nn(r) and (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))
      ) else o[a] or (i = nn(r)
      (n and "none" isnt n or not i) and x._data(r, "olddisplay", (if i then n else x.css(r, "display")))
      ))
      )
      a++
    a = 0
    while s > a
      r = e[a]
      r.style and (t and "none" isnt r.style.display and "" isnt r.style.display or (r.style.display = (if t then o[a] or "" else "none")))
      a++
    e
  on = (e, t, n) ->
    r = Vt.exec(t)
    (if r then Math.max(0, r[1] - (n or 0)) + (r[2] or "px") else t)
  an = (e, t, n, r, i) ->
    o = (if n is ((if r then "border" else "content")) then 4 else (if "width" is t then 1 else 0))
    a = 0
    while 4 > o
      "margin" is n and (a += x.css(e, n + Zt[o], not 0, i))
      (if r then ("content" is n and (a -= x.css(e, "padding" + Zt[o], not 0, i))
      "margin" isnt n and (a -= x.css(e, "border" + Zt[o] + "Width", not 0, i))
      ) else (a += x.css(e, "padding" + Zt[o], not 0, i)
      "padding" isnt n and (a += x.css(e, "border" + Zt[o] + "Width", not 0, i))
      ))
      o += 2
    a
  sn = (e, t, n) ->
    r = not 0
    i = (if "width" is t then e.offsetWidth else e.offsetHeight)
    o = Rt(e)
    a = x.support.boxSizing and "border-box" is x.css(e, "boxSizing", not 1, o)
    if 0 >= i or null is i
      return i  if i = Wt(e, t, o)
      (0 > i or null is i) and (i = e.style[t])
      Yt.test(i)

      r = a and (x.support.boxSizingReliable or i is e.style[t])
      i = parseFloat(i) or 0
    i + an(e, t, n or ((if a then "border" else "content")), r, o) + "px"
  ln = (e) ->
    t = a
    n = Gt[e]
    n or (n = un(e, t)
    "none" isnt n and n or (Pt = (Pt or x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement)
    t = (Pt[0].contentWindow or Pt[0].contentDocument).document
    t.write("<!doctype html><html><body>")
    t.close()
    n = un(e, t)
    Pt.detach()
    )
    Gt[e] = n
    )
    n
  un = (e, t) ->
    n = x(t.createElement(e)).appendTo(t.body)
    r = x.css(n[0], "display")
    n.remove()
    r
  gn = (e, t, n, r) ->
    i = undefined
    if x.isArray(t)
      x.each t, (t, i) ->
        (if n or pn.test(e) then r(e, i) else gn(e + "[" + ((if "object" is typeof i then t else "")) + "]", i, n, r))

    else if n or "object" isnt x.type(t)
      r e, t
    else
      for i of t
        gn e + "[" + i + "]", t[i], n, r
  Hn = (e) ->
    (t, n) ->
      "string" isnt typeof t and (n = t
      t = "*"
      )
      r = undefined
      i = 0
      o = t.toLowerCase().match(T) or []
      if x.isFunction(n)
        while r = o[i++]
          (if "+" is r[0] then (r = r.slice(1) or "*"
          (e[r] = e[r] or []).unshift(n)
          ) else (e[r] = e[r] or []).push(n))
  qn = (e, n, r, i) ->
    s = (l) ->
      u = undefined
      o[l] = not 0
      x.each(e[l] or [], (e, l) ->
        c = l(n, r, i)
        (if "string" isnt typeof c or a or o[c] then (if a then not (u = c) else t) else (n.dataTypes.unshift(c)
        s(c)
        not 1
        ))
      )
      u
    o = {}
    a = e is jn
    s(n.dataTypes[0]) or not o["*"] and s("*")
  _n = (e, n) ->
    r = undefined
    i = undefined
    o = x.ajaxSettings.flatOptions or {}
    for i of n
      n[i] isnt t and (((if o[i] then e else r or (r = {})))[i] = n[i])
    r and x.extend(not 0, e, r)
    e
  Mn = (e, n, r) ->
    i = undefined
    o = undefined
    a = undefined
    s = undefined
    l = e.contents
    u = e.dataTypes
    while "*" is u[0]
      u.shift()
      o is t and (o = e.mimeType or n.getResponseHeader("Content-Type"))
    if o
      for s of l
        if l[s] and l[s].test(o)
          u.unshift s
          break
    unless u[0] of r
      for s of r
        if not u[0] or e.converters[s + " " + u[0]]
          a = s
          break
        i or (i = s)
      a = a or i
    (if a then (a isnt u[0] and u.unshift(a)
    r[a]
    ) else t)
  On = (e, t, n, r) ->
    i = undefined
    o = undefined
    a = undefined
    s = undefined
    l = undefined
    u = {}
    c = e.dataTypes.slice()
    if c[1]
      for a of e.converters
        u[a.toLowerCase()] = e.converters[a]
    o = c.shift()
    while o
      if e.responseFields[o] and (n[e.responseFields[o]] = t)
      not l and r and e.dataFilter and (t = e.dataFilter(t, e.dataType))
      l = o
      o = c.shift()
        if "*" is o
          o = l
        else if "*" isnt l and l isnt o
          if a = u[l + " " + o] or u["* " + o]
          not a
            for i of u
              if s = i.split(" ")
              s[1] is o and (a = u[l + " " + s[0]] or u["* " + s[0]])
                (if a is not 0 then a = u[i] else u[i] isnt not 0 and (o = s[0]
                c.unshift(s[1])
                ))
                break
          if a isnt not 0
            if a and e["throws"]
              t = a(t)
            else
              try
                t = a(t)
              catch p
                return (
                  state: "parsererror"
                  error: (if a then p else "No conversion from " + l + " to " + o)
                )
    state: "success"
    data: t
  In = ->
    try
      return new e.XMLHttpRequest
  zn = ->
    try
      return new e.ActiveXObject("Microsoft.XMLHTTP")
  Kn = ->
    setTimeout(->
      Xn = t
    )
    Xn = x.now()
  Zn = (e, t, n) ->
    r = undefined
    i = (Qn[t] or []).concat(Qn["*"])
    o = 0
    a = i.length
    while a > o
      return r  if r = i[o].call(n, t, e)
      o++
  er = (e, t, n) ->
    r = undefined
    i = undefined
    o = 0
    a = Gn.length
    s = x.Deferred().always(->
      delete l.elem
    )
    l = ->
      return not 1  if i
      t = Xn or Kn()
      n = Math.max(0, u.startTime + u.duration - t)
      r = n / u.duration or 0
      o = 1 - r
      a = 0
      l = u.tweens.length
      while l > a
        u.tweens[a].run o
        a++
      s.notifyWith(e, [u, o, n])
      (if 1 > o and l then n else (s.resolveWith(e, [u])
      not 1
      ))

    u = s.promise(
      elem: e
      props: x.extend({}, t)
      opts: x.extend(not 0,
        specialEasing: {}
      , n)
      originalProperties: t
      originalOptions: n
      startTime: Xn or Kn()
      duration: n.duration
      tweens: []
      createTween: (t, n) ->
        r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] or u.opts.easing)
        u.tweens.push(r)
        r

      stop: (t) ->
        n = 0
        r = (if t then u.tweens.length else 0)
        return this  if i
        i = not 0
        while r > n
          u.tweens[n].run 1
          n++
        (if t then s.resolveWith(e, [u, t]) else s.rejectWith(e, [u, t]))
        this
    )
    c = u.props
    tr(c, u.opts.specialEasing)
    while a > o
      return r  if r = Gn[o].call(u, e, c, u.opts)
      o++
    x.map(c, Zn, u)
    x.isFunction(u.opts.start) and u.opts.start.call(e, u)
    x.fx.timer(x.extend(l,
      elem: e
      anim: u
      queue: u.opts.queue
    ))
    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  tr = (e, t) ->
    n = undefined
    r = undefined
    i = undefined
    o = undefined
    a = undefined
    for n of e
      if r = x.camelCase(n)
      i = t[r]
      o = e[n]
      x.isArray(o) and (i = o[1]
      o = e[n] = o[0]
      )
      n isnt r and (e[r] = o
      delete e[n]

      )
      a = x.cssHooks[r]
      a and "expand" of a
        o = a.expand(o)
        delete e[r]


        for n of o
          n of e or (e[n] = o[n]
          t[n] = i
          )
      else
        t[r] = i
  nr = (e, t, n) ->
    r = undefined
    i = undefined
    o = undefined
    a = undefined
    s = undefined
    l = undefined
    u = this
    c = {}
    p = e.style
    f = e.nodeType and nn(e)
    d = x._data(e, "fxshow")
    n.queue or (s = x._queueHooks(e, "fx")
    null is s.unqueued and (s.unqueued = 0
    l = s.empty.fire
    s.empty.fire = ->
      s.unqueued or l()

    )
    s.unqueued++
    u.always(->
      u.always ->
        s.unqueued--
        x.queue(e, "fx").length or s.empty.fire()

    )
    )
    1 is e.nodeType and ("height" of t or "width" of t) and (n.overflow = [p.overflow, p.overflowX, p.overflowY]
    "inline" is x.css(e, "display") and "none" is x.css(e, "float") and ((if x.support.inlineBlockNeedsLayout and "inline" isnt ln(e.nodeName) then p.zoom = 1 else p.display = "inline-block"))
    )
    n.overflow and (p.overflow = "hidden"
    x.support.shrinkWrapBlocks or u.always(->
      p.overflow = n.overflow[0]
      p.overflowX = n.overflow[1]
      p.overflowY = n.overflow[2]
    )
    )

    for r of t
      if i = t[r]
      Vn.exec(i)
        continue  if delete t[r]

        o = o or "toggle" is i
        i is ((if f then "hide" else "show"))

        c[r] = d and d[r] or x.style(e, r)
    unless x.isEmptyObject(c)
      (if d then "hidden" of d and (f = d.hidden) else d = x._data(e, "fxshow", {}))
      o and (d.hidden = not f)
      (if f then x(e).show() else u.done(->
        x(e).hide()
      ))
      u.done(->
        t = undefined
        x._removeData e, "fxshow"
        for t of c
          x.style e, t, c[t]
      )

      for r of c
        a = Zn((if f then d[r] else 0), r, u)
        r of d or (d[r] = a.start
        f and (a.end = a.start
        a.start = (if "width" is r or "height" is r then 1 else 0)
        )
        )
  rr = (e, t, n, r, i) ->
    new rr::init(e, t, n, r, i)
  ir = (e, t) ->
    n = undefined
    r = height: e
    i = 0
    t = (if t then 1 else 0)
    while 4 > i
      n = Zt[i]
      r["margin" + n] = r["padding" + n] = e
      i += 2 - t
    t and (r.opacity = r.width = e)
    r
  or = (e) ->
    (if x.isWindow(e) then e else (if 9 is e.nodeType then e.defaultView or e.parentWindow else not 1))
  n = undefined
  r = undefined
  i = typeof t
  o = e.location
  a = e.document
  s = a.documentElement
  l = e.jQuery
  u = e.$
  c = {}
  p = []
  f = "1.10.2"
  d = p.concat
  h = p.push
  g = p.slice
  m = p.indexOf
  y = c.toString
  v = c.hasOwnProperty
  b = f.trim
  x = (e, t) ->
    new x.fn.init(e, t, r)

  w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
  T = /\S+/g
  C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
  k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
  E = /^[\],:{}\s]*$/
  S = /(?:^|:|,)(?:\s*\[)+/g
  A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g
  j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g
  D = /^-ms-/
  L = /-([\da-z])/g
  H = (e, t) ->
    t.toUpperCase()

  q = (e) ->
    (a.addEventListener or "load" is e.type or "complete" is a.readyState) and (_()
    x.ready()
    )

  _ = ->
    (if a.addEventListener then (a.removeEventListener("DOMContentLoaded", q, not 1)
    e.removeEventListener("load", q, not 1)
    ) else (a.detachEvent("onreadystatechange", q)
    e.detachEvent("onload", q)
    ))

  x.fn = x:: =
    jquery: f
    constructor: x
    init: (e, n, r) ->
      i = undefined
      o = undefined
      return this  unless e
      if "string" is typeof e
        return (if not n or n.jquery then (n or r).find(e) else @constructor(n).find(e))  if i = (if "<" is e.charAt(0) and ">" is e.charAt(e.length - 1) and e.length >= 3 then [null, e, null] else N.exec(e))
        not i or not i[1] and n

        if i[1]
          if n = (if n instanceof x then n[0] else n)
          x.merge(this, x.parseHTML(i[1], (if n and n.nodeType then n.ownerDocument or n else a), not 0))
          k.test(i[1]) and x.isPlainObject(n)
            for i of n
              (if x.isFunction(this[i]) then this[i](n[i]) else @attr(i, n[i]))
          return this
        if o = a.getElementById(i[2])
        o and o.parentNode
          return r.find(e)  if o.id isnt i[2]
          @length = 1
          this[0] = o
        return @context = a
        @selector = e
        this
      (if e.nodeType then (@context = this[0] = e
      @length = 1
      this
      ) else (if x.isFunction(e) then r.ready(e) else (e.selector isnt t and (@selector = e.selector
      @context = e.context
      )
      x.makeArray(e, this)
      )))

    selector: ""
    length: 0
    toArray: ->
      g.call this

    get: (e) ->
      (if null is e then @toArray() else (if 0 > e then this[@length + e] else this[e]))

    pushStack: (e) ->
      t = x.merge(@constructor(), e)
      t.prevObject = this
      t.context = @context
      t

    each: (e, t) ->
      x.each this, e, t

    ready: (e) ->
      x.ready.promise().done(e)
      this

    slice: ->
      @pushStack g.apply(this, arguments_)

    first: ->
      @eq 0

    last: ->
      @eq -1

    eq: (e) ->
      t = @length
      n = +e + ((if 0 > e then t else 0))
      @pushStack (if n >= 0 and t > n then [this[n]] else [])

    map: (e) ->
      @pushStack x.map(this, (t, n) ->
        e.call t, n, t
      )

    end: ->
      @prevObject or @constructor(null)

    push: h
    sort: [].sort
    splice: [].splice

  x.fn.init:: = x.fn
  x.extend = x.fn.extend = ->
    e = undefined
    n = undefined
    r = undefined
    i = undefined
    o = undefined
    a = undefined
    s = arguments_[0] or {}
    l = 1
    u = arguments_.length
    c = not 1
    "boolean" is typeof s and (c = s
    s = arguments_[1] or {}
    l = 2
    )
    "object" is typeof s or x.isFunction(s) or (s = {})
    u is l and (s = this
    --l
    )

    while u > l
      unless null is (o = arguments_[l])
        for i of o
          e = s[i]
          r = o[i]
          s isnt r and ((if c and r and (x.isPlainObject(r) or (n = x.isArray(r))) then ((if n then (n = not 1
          a = (if e and x.isArray(e) then e else [])
          ) else a = (if e and x.isPlainObject(e) then e else {}))
          s[i] = x.extend(c, a, r)
          ) else r isnt t and (s[i] = r)))
      l++
    s

  x.extend(
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, "")
    noConflict: (t) ->
      e.$ is x and (e.$ = u)
      t and e.jQuery is x and (e.jQuery = l)
      x

    isReady: not 1
    readyWait: 1
    holdReady: (e) ->
      (if e then x.readyWait++ else x.ready(not 0))

    ready: (e) ->
      if (if e is not 0 then not --x.readyWait else not x.isReady)
        return setTimeout(x.ready)  unless a.body
        x.isReady = not 0
        e isnt not 0 and --x.readyWait > 0 or (n.resolveWith(a, [x])
        x.fn.trigger and x(a).trigger("ready").off("ready")
        )

    isFunction: (e) ->
      "function" is x.type(e)

    isArray: Array.isArray or (e) ->
      "array" is x.type(e)

    isWindow: (e) ->
      null isnt e and e is e.window

    isNumeric: (e) ->
      not isNaN(parseFloat(e)) and isFinite(e)

    type: (e) ->
      (if null is e then e + "" else (if "object" is typeof e or "function" is typeof e then c[y.call(e)] or "object" else typeof e))

    isPlainObject: (e) ->
      n = undefined
      return not 1  if not e or "object" isnt x.type(e) or e.nodeType or x.isWindow(e)
      try
        return not 1  if e.constructor and not v.call(e, "constructor") and not v.call(e.constructor::, "isPrototypeOf")
      catch r
        return not 1
      if x.support.ownLast
        for n of e
          return v.call(e, n)
      for n of e

      n is t or v.call(e, n)

    isEmptyObject: (e) ->
      t = undefined
      for t of e
        return not 1
      not 0

    error: (e) ->
      throw Error(e)

    parseHTML: (e, t, n) ->
      return null  if not e or "string" isnt typeof e
      "boolean" is typeof t and (n = t
      t = not 1
      )
      t = t or a

      r = k.exec(e)
      i = not n and []
      (if r then [t.createElement(r[1])] else (r = x.buildFragment([e], t, i)
      i and x(i).remove()
      x.merge([], r.childNodes)
      ))

    parseJSON: (n) ->
      (if e.JSON and e.JSON.parse then e.JSON.parse(n) else (if null is n then n else (if "string" is typeof n and (n = x.trim(n)
      n and E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))
      ) then Function("return " + n)() else (x.error("Invalid JSON: " + n)
      t
      ))))

    parseXML: (n) ->
      r = undefined
      i = undefined
      return null  if not n or "string" isnt typeof n
      try
        (if e.DOMParser then (i = new DOMParser
        r = i.parseFromString(n, "text/xml")
        ) else (r = new ActiveXObject("Microsoft.XMLDOM")
        r.async = "false"
        r.loadXML(n)
        ))
      catch o
        r = t
      r and r.documentElement and not r.getElementsByTagName("parsererror").length or x.error("Invalid XML: " + n)
      r

    noop: ->

    globalEval: (t) ->
      t and x.trim(t) and (e.execScript or (t) ->
        e.eval.call e, t
      )(t)

    camelCase: (e) ->
      e.replace(D, "ms-").replace L, H

    nodeName: (e, t) ->
      e.nodeName and e.nodeName.toLowerCase() is t.toLowerCase()

    each: (e, t, n) ->
      r = undefined
      i = 0
      o = e.length
      a = M(e)
      if n
        if a
          while o > i
            break  if r = t.apply(e[i], n)
            r is not 1
            i++
        else
          for i of e
            break  if r = t.apply(e[i], n)
            r is not 1
      else if a
        while o > i
          break  if r = t.call(e[i], i, e[i])
          r is not 1
          i++
      else
        for i of e
          break  if r = t.call(e[i], i, e[i])
          r is not 1
      e

    trim: (if b and not b.call("﻿ ") then (e) ->
      (if null is e then "" else b.call(e))
     else (e) ->
      (if null is e then "" else (e + "").replace(C, ""))
    )
    makeArray: (e, t) ->
      n = t or []
      null isnt e and ((if M(Object(e)) then x.merge(n, (if "string" is typeof e then [e] else e)) else h.call(n, e)))
      n

    inArray: (e, t, n) ->
      r = undefined
      if t
        return m.call(t, e, n)  if m
        r = t.length
        n = (if n then (if 0 > n then Math.max(0, r + n) else n) else 0)

        while r > n
          return n  if n of t and t[n] is e
          n++
      -1

    merge: (e, n) ->
      r = n.length
      i = e.length
      o = 0
      if "number" is typeof r
        while r > o
          e[i++] = n[o]
          o++
      else
        e[i++] = n[o++]  while n[o] isnt t
      e.length = i
      e

    grep: (e, t, n) ->
      r = undefined
      i = []
      o = 0
      a = e.length
      n = !!n
      while a > o
        r = !!t(e[o], o)
        n isnt r and i.push(e[o])
        o++
      i

    map: (e, t, n) ->
      r = undefined
      i = 0
      o = e.length
      a = M(e)
      s = []
      if a
        while o > i
          r = t(e[i], i, n)
          null isnt r and (s[s.length] = r)
          i++
      else
        for i of e
          r = t(e[i], i, n)
          null isnt r and (s[s.length] = r)
      d.apply [], s

    guid: 1
    proxy: (e, n) ->
      r = undefined
      i = undefined
      o = undefined
      "string" is typeof n and (o = e[n]
      n = e
      e = o
      )
      (if x.isFunction(e) then (r = g.call(arguments_, 2)
      i = ->
        e.apply n or this, r.concat(g.call(arguments_))

      i.guid = e.guid = e.guid or x.guid++
      i
      ) else t)

    access: (e, n, r, i, o, a, s) ->
      l = 0
      u = e.length
      c = null is r
      if "object" is x.type(r)
        o = not 0
        for l of r
          x.access e, n, l, r[l], not 0, a, s
      else if i isnt t and (o = not 0
      x.isFunction(i) or (s = not 0)
      c and ((if s then (n.call(e, i)
      n = null
      ) else (c = n
      n = (e, t, n) ->
        c.call x(e), n

      )))
      n
      )
        while u > l
          n e[l], r, (if s then i else i.call(e[l], l, n(e[l], r)))
          l++
      (if o then e else (if c then n.call(e) else (if u then n(e[0], r) else a)))

    now: ->
      (new Date).getTime()

    swap: (e, t, n, r) ->
      i = undefined
      o = undefined
      a = {}
      for o of t
        a[o] = e.style[o]
        e.style[o] = t[o]
      i = n.apply(e, r or [])
      for o of t
        e.style[o] = a[o]
      i
  )
  x.ready.promise = (t) ->
    unless n
      if n = x.Deferred()
      "complete" is a.readyState
        setTimeout x.ready
      else unless a.addEventListener
        a.attachEvent("onreadystatechange", q)
        e.attachEvent("onload", q)

        r = not 1
        try
          r = null is e.frameElement and a.documentElement
        r and r.doScroll and o = ->
          unless x.isReady
            try
              r.doScroll "left"
            catch e
              return setTimeout(o, 50)
            _()
            x.ready()
        ()
    n.promise t

  x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (e, t) ->
    c["[object " + t + "]"] = t.toLowerCase()
  )

  r = x(a)
  (e, t) ->
    at = (e, t, n, i) ->
      o = undefined
      a = undefined
      s = undefined
      l = undefined
      u = undefined
      c = undefined
      d = undefined
      m = undefined
      y = undefined
      x = undefined
      return n  if ((if t then t.ownerDocument or t else w)) isnt f and p(t)
      t = t or f
      n = n or []
      not e or "string" isnt typeof e

      return []  if 1 isnt (l = t.nodeType) and 9 isnt l
      if h and not i
        if o = Z.exec(e)
          if s = o[1]
            if 9 is l
              return n  if a = t.getElementById(s)
              not a or not a.parentNode

              if a.id is s
                return n.push(a)
                n
            else if t.ownerDocument and (a = t.ownerDocument.getElementById(s)) and v(t, a) and a.id is s
              return n.push(a)
              n
          else
            if o[2]
              return M.apply(n, t.getElementsByTagName(e))
              n
            if (s = o[3]) and r.getElementsByClassName and t.getElementsByClassName
              return M.apply(n, t.getElementsByClassName(s))
              n
        if r.qsa and (not g or not g.test(e))
          if m = d = b
          y = t
          x = 9 is l and e
          1 is l and "object" isnt t.nodeName.toLowerCase()
            c = mt(e)
            (if (d = t.getAttribute("id")) then m = d.replace(nt, "\\$&") else t.setAttribute("id", m))
            m = "[id='" + m + "'] "
            u = c.length

            c[u] = m + yt(c[u])  while u--
            y = V.test(e) and t.parentNode or t
            x = c.join(",")
          if x
            try
              return M.apply(n, y.querySelectorAll(x))
              n
            finally
              d or t.removeAttribute("id")
      kt e.replace(z, "$1"), t, n, i
    st = ->
      t = (n, r) ->
        e.push(n += " ") > o.cacheLength and delete t[e.shift()]

        t[n] = r
      e = []
      t
    lt = (e) ->
      e[b] = not 0
      e
    ut = (e) ->
      t = f.createElement("div")
      try
        return !!e(t)
      catch n
        return not 1
      finally
        t.parentNode and t.parentNode.removeChild(t)
        t = null
    ct = (e, t) ->
      n = e.split("|")
      r = e.length
      o.attrHandle[n[r]] = t  while r--
    pt = (e, t) ->
      n = t and e
      r = n and 1 is e.nodeType and 1 is t.nodeType and (~t.sourceIndex or D) - (~e.sourceIndex or D)
      return r  if r
      return -1  if n is t  while n = n.nextSibling  if n
      (if e then 1 else -1)
    ft = (e) ->
      (t) ->
        n = t.nodeName.toLowerCase()
        "input" is n and t.type is e
    dt = (e) ->
      (t) ->
        n = t.nodeName.toLowerCase()
        ("input" is n or "button" is n) and t.type is e
    ht = (e) ->
      lt (t) ->
        t = +t
        lt((n, r) ->
          i = undefined
          o = e([], n.length, t)
          a = o.length
          n[i = o[a]] and (n[i] = not (r[i] = n[i]))  while a--
        )

    gt = ->
    mt = (e, t) ->
      n = undefined
      r = undefined
      i = undefined
      a = undefined
      s = undefined
      l = undefined
      u = undefined
      c = k[e + " "]
      return (if t then 0 else c.slice(0))  if c
      s = e
      l = []
      u = o.preFilter

      while s
        (not n or (r = X.exec(s))) and (r and (s = s.slice(r[0].length) or s)
        l.push(i = [])
        )
        n = not 1
        (r = U.exec(s)) and (n = r.shift()
        i.push(
          value: n
          type: r[0].replace(z, " ")
        )
        s = s.slice(n.length)
        )

        for a of o.filter
          not (r = Q[a].exec(s)) or u[a] and not (r = u[a](r)) or (n = r.shift()
          i.push(
            value: n
            type: a
            matches: r
          )
          s = s.slice(n.length)
          )
        break  unless n
      (if t then s.length else (if s then at.error(e) else k(e, l).slice(0)))
    yt = (e) ->
      t = 0
      n = e.length
      r = ""
      while n > t
        r += e[t].value
        t++
      r
    vt = (e, t, n) ->
      r = t.dir
      o = n and "parentNode" is r
      a = C++
      (if t.first then (t, n, i) ->
        return e(t, n, i)  if 1 is t.nodeType or o  while t = t[r]
       else (t, n, s) ->
        l = undefined
        u = undefined
        c = undefined
        p = T + " " + a
        if s
          return not 0  if (1 is t.nodeType or o) and e(t, n, s)  while t = t[r]
        else
          while t = t[r]
            if 1 is t.nodeType or o
              if c = t[b] or (t[b] = {})
              (u = c[r]) and u[0] is p
                return l is not 0  if (l = u[1]) is not 0 or l is i
              else return not 0  if u = c[r] = [p]
              u[1] = e(t, n, s) or i
              u[1] is not 0
      )
    bt = (e) ->
      (if e.length > 1 then (t, n, r) ->
        i = e.length
        return not 1  unless e[i](t, n, r)  while i--
        not 0
       else e[0])
    xt = (e, t, n, r, i) ->
      o = undefined
      a = []
      s = 0
      l = e.length
      u = null isnt t
      while l > s
        (o = e[s]) and (not n or n(o, r, i)) and (a.push(o)
        u and t.push(s)
        )
        s++
      a
    wt = (e, t, n, r, i, o) ->
      r and not r[b] and (r = wt(r))
      i and not i[b] and (i = wt(i, o))
      lt((o, a, s, l) ->
        u = undefined
        c = undefined
        p = undefined
        f = []
        d = []
        h = a.length
        g = o or Nt(t or "*", (if s.nodeType then [s] else s), [])
        m = (if not e or not o and t then g else xt(g, f, e, s, l))
        y = (if n then (if i or ((if o then e else h or r)) then [] else a) else m)
        if n and n(m, y, s, l)
        r
          u = xt(y, d)
          r(u, [], s, l)
          c = u.length

          (p = u[c]) and (y[d[c]] = not (m[d[c]] = p))  while c--
        if o
          if i or e
            if i
              u = []
              c = y.length

              (p = y[c]) and u.push(m[c] = p)  while c--
              i null, y = [], u, l
            c = y.length
            (p = y[c]) and (u = (if i then F.call(o, p) else f[c])) > -1 and (o[u] = not (a[u] = p))  while c--
        else
          y = xt((if y is a then y.splice(h, y.length) else y))
          (if i then i(null, a, y, l) else M.apply(a, y))
      )
    Tt = (e) ->
      t = undefined
      n = undefined
      r = undefined
      i = e.length
      a = o.relative[e[0].type]
      s = a or o.relative[" "]
      l = (if a then 1 else 0)
      c = vt((e) ->
        e is t
      , s, not 0)
      p = vt((e) ->
        F.call(t, e) > -1
      , s, not 0)
      f = [(e, n, r) ->
        not a and (r or n isnt u) or ((if (t = n).nodeType then c(e, n, r) else p(e, n, r)))
      ]
      while i > l
        unless n = o.relative[e[l].type]
          if n = o.filter[e[l].type].apply(null, e[l].matches)
          n[b]
            r = ++l
            while i > r
              break  if o.relative[e[r].type]
              r++
            return wt(l > 1 and bt(f), l > 1 and yt(e.slice(0, l - 1).concat(value: (if " " is e[l - 2].type then "*" else ""))).replace(z, "$1"), n, r > l and Tt(e.slice(l, r)), i > r and Tt(e = e.slice(r)), i > r and yt(e))
          f.push n
        l++
      bt f
    Ct = (e, t) ->
      n = 0
      r = t.length > 0
      a = e.length > 0
      s = (s, l, c, p, d) ->
        h = undefined
        g = undefined
        m = undefined
        y = []
        v = 0
        b = "0"
        x = s and []
        w = null isnt d
        C = u
        N = s or a and o.find.TAG("*", d and l.parentNode or l)
        k = T += (if null is C then 1 else Math.random() or .1)
        w and (u = l isnt f and l
        i = n
        )
        while null isnt (h = N[b])
          if a and h
            g = 0
            while m = e[g++]
              if m(h, l, c)
                p.push h
                break
            w and (T = k
            i = ++n
            )
          r and ((h = not m and h) and v--
          s and x.push(h)
          )
          b++
        if v += b
        r and b isnt v
          g = 0
          m x, y, l, c  while m = t[g++]
          if s
            x[b] or y[b] or (y[b] = q.call(p))  while b--  if v > 0
            y = xt(y)
          M.apply(p, y)
          w and not s and y.length > 0 and v + t.length > 1 and at.uniqueSort(p)
        w and (T = k
        u = C
        )
        x

      (if r then lt(s) else s)
    Nt = (e, t, n) ->
      r = 0
      i = t.length
      while i > r
        at e, t[r], n
        r++
      n
    kt = (e, t, n, i) ->
      a = undefined
      s = undefined
      u = undefined
      c = undefined
      p = undefined
      f = mt(e)
      if not i and 1 is f.length
        if s = f[0] = f[0].slice(0)
        s.length > 2 and "ID" is (u = s[0]).type and r.getById and 9 is t.nodeType and h and o.relative[s[1].type]
          return n  if t = (o.find.ID(u.matches[0].replace(rt, it), t) or [])[0]
          not t

          e = e.slice(s.shift().value.length)
        a = (if Q.needsContext.test(e) then 0 else s.length)
        while a--
          break  if u = s[a]
          o.relative[c = u.type]

          if (p = o.find[c]) and (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) and t.parentNode or t))
            if s.splice(a, 1)
            e = i.length and yt(s)
            not e
              return M.apply(n, i)
              n
            break
      l(e, f)(i, t, not h, n, V.test(e))
      n
    n = undefined
    r = undefined
    i = undefined
    o = undefined
    a = undefined
    s = undefined
    l = undefined
    u = undefined
    c = undefined
    p = undefined
    f = undefined
    d = undefined
    h = undefined
    g = undefined
    m = undefined
    y = undefined
    v = undefined
    b = "sizzle" + -new Date
    w = e.document
    T = 0
    C = 0
    N = st()
    k = st()
    E = st()
    S = not 1
    A = (e, t) ->
      (if e is t then (S = not 0
      0
      ) else 0)

    j = typeof t
    D = 1 << 31
    L = {}.hasOwnProperty
    H = []
    q = H.pop
    _ = H.push
    M = H.push
    O = H.slice
    F = H.indexOf or (e) ->
      t = 0
      n = @length
      while n > t
        return t  if this[t] is e
        t++
      -1

    B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
    P = "[\\x20\\t\\r\\n\\f]"
    R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+"
    W = R.replace("w", "w#")
    $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]"
    I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)"
    z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g")
    X = RegExp("^" + P + "*," + P + "*")
    U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*")
    V = RegExp(P + "*[+~]")
    Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g")
    J = RegExp(I)
    G = RegExp("^" + W + "$")
    Q =
      ID: RegExp("^#(" + R + ")")
      CLASS: RegExp("^\\.(" + R + ")")
      TAG: RegExp("^(" + R.replace("w", "w*") + ")")
      ATTR: RegExp("^" + $)
      PSEUDO: RegExp("^" + I)
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i")
      bool: RegExp("^(?:" + B + ")$", "i")
      needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")

    K = /^[^{]+\{\s*\[native \w/
    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
    et = /^(?:input|select|textarea|button)$/i
    tt = /^h\d$/i
    nt = /'|\\/g
    rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig")
    it = (e, t, n) ->
      r = "0x" + t - 65536
      (if r isnt r or n then t else (if 0 > r then String.fromCharCode(r + 65536) else String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)))

    try
      M.apply(H = O.call(w.childNodes), w.childNodes)
      H[w.childNodes.length].nodeType
    catch ot
      M = apply: (if H.length then (e, t) ->
        _.apply e, O.call(t)
       else (e, t) ->
        n = e.length
        r = 0
          while e[n++] = t[r++]
        e.length = n - 1
      )
    s = at.isXML = (e) ->
      t = e and (e.ownerDocument or e).documentElement
      (if t then "HTML" isnt t.nodeName else not 1)

    r = at.support = {}
    p = at.setDocument = (e) ->
      n = (if e then e.ownerDocument or e else w)
      i = n.defaultView
      (if n isnt f and 9 is n.nodeType and n.documentElement then (f = n
      d = n.documentElement
      h = not s(n)
      i and i.attachEvent and i isnt i.top and i.attachEvent("onbeforeunload", ->
        p()
      )
      r.attributes = ut((e) ->
        e.className = "i"
        not e.getAttribute("className")
      )
      r.getElementsByTagName = ut((e) ->
        e.appendChild(n.createComment(""))
        not e.getElementsByTagName("*").length
      )
      r.getElementsByClassName = ut((e) ->
        e.innerHTML = "<div class='a'></div><div class='a i'></div>"
        e.firstChild.className = "i"
        2 is e.getElementsByClassName("i").length
      )
      r.getById = ut((e) ->
        d.appendChild(e).id = b
        not n.getElementsByName or not n.getElementsByName(b).length
      )
      (if r.getById then (o.find.ID = (e, t) ->
        if typeof t.getElementById isnt j and h
          n = t.getElementById(e)
          (if n and n.parentNode then [n] else [])

      o.filter.ID = (e) ->
        t = e.replace(rt, it)
        (e) ->
          e.getAttribute("id") is t

      ) else (delete o.find.ID

      o.filter.ID = (e) ->
        t = e.replace(rt, it)
        (e) ->
          n = typeof e.getAttributeNode isnt j and e.getAttributeNode("id")
          n and n.value is t

      ))
      o.find.TAG = (if r.getElementsByTagName then (e, n) ->
        (if typeof n.getElementsByTagName isnt j then n.getElementsByTagName(e) else t)
       else (e, t) ->
        n = undefined
        r = []
        i = 0
        o = t.getElementsByTagName(e)
        if "*" is e
          1 is n.nodeType and r.push(n)  while n = o[i++]
          return r
        o
      )
      o.find.CLASS = r.getElementsByClassName and (e, n) ->
        (if typeof n.getElementsByClassName isnt j and h then n.getElementsByClassName(e) else t)

      m = []
      g = []
      (r.qsa = K.test(n.querySelectorAll)) and (ut((e) ->
        e.innerHTML = "<select><option selected=''></option></select>"
        e.querySelectorAll("[selected]").length or g.push("\\[" + P + "*(?:value|" + B + ")")
        e.querySelectorAll(":checked").length or g.push(":checked")
      )
      ut((e) ->
        t = n.createElement("input")
        t.setAttribute("type", "hidden")
        e.appendChild(t).setAttribute("t", "")
        e.querySelectorAll("[t^='']").length and g.push("[*^$]=" + P + "*(?:''|\"\")")
        e.querySelectorAll(":enabled").length or g.push(":enabled", ":disabled")
        e.querySelectorAll("*,:x")
        g.push(",.*:")
      )
      )
      (r.matchesSelector = K.test(y = d.webkitMatchesSelector or d.mozMatchesSelector or d.oMatchesSelector or d.msMatchesSelector)) and ut((e) ->
        r.disconnectedMatch = y.call(e, "div")
        y.call(e, "[s!='']:x")
        m.push("!=", I)
      )
      g = g.length and RegExp(g.join("|"))
      m = m.length and RegExp(m.join("|"))
      v = (if K.test(d.contains) or d.compareDocumentPosition then (e, t) ->
        n = (if 9 is e.nodeType then e.documentElement else e)
        r = t and t.parentNode
        e is r or not (not r or 1 isnt r.nodeType or not ((if n.contains then n.contains(r) else e.compareDocumentPosition and 16 & e.compareDocumentPosition(r))))
       else (e, t) ->
        return not 0  if t is e  while t = t.parentNode  if t
        not 1
      )
      A = (if d.compareDocumentPosition then (e, t) ->
        if e is t
          return S = not 0
          0
        i = t.compareDocumentPosition and e.compareDocumentPosition and e.compareDocumentPosition(t)
        (if i then (if 1 & i or not r.sortDetached and t.compareDocumentPosition(e) is i then (if e is n or v(w, e) then -1 else (if t is n or v(w, t) then 1 else (if c then F.call(c, e) - F.call(c, t) else 0))) else (if 4 & i then -1 else 1)) else (if e.compareDocumentPosition then -1 else 1))
       else (e, t) ->
        r = undefined
        i = 0
        o = e.parentNode
        a = t.parentNode
        s = [e]
        l = [t]
        if e is t
          return S = not 0
          0
        return (if e is n then -1 else (if t is n then 1 else (if o then -1 else (if a then 1 else (if c then F.call(c, e) - F.call(c, t) else 0)))))  if not o or not a
        return pt(e, t)  if o is a
        r = e
        s.unshift r  while r = r.parentNode
        r = t
        l.unshift r  while r = r.parentNode
        i++  while s[i] is l[i]
        (if i then pt(s[i], l[i]) else (if s[i] is w then -1 else (if l[i] is w then 1 else 0)))
      )
      n
      ) else f)

    at.matches = (e, t) ->
      at e, null, null, t

    at.matchesSelector = (e, t) ->
      if (e.ownerDocument or e) isnt f and p(e)
      t = t.replace(Y, "='$1']")
      not (not r.matchesSelector or not h or m and m.test(t) or g and g.test(t))
        try
          n = y.call(e, t)
          return n  if n or r.disconnectedMatch or e.document and 11 isnt e.document.nodeType
      at(t, f, null, [e]).length > 0

    at.contains = (e, t) ->
      (e.ownerDocument or e) isnt f and p(e)
      v(e, t)

    at.attr = (e, n) ->
      (e.ownerDocument or e) isnt f and p(e)
      i = o.attrHandle[n.toLowerCase()]
      a = (if i and L.call(o.attrHandle, n.toLowerCase()) then i(e, n, not h) else t)
      (if a is t then (if r.attributes or not h then e.getAttribute(n) else (if (a = e.getAttributeNode(n)) and a.specified then a.value else null)) else a)

    at.error = (e) ->
      throw Error("Syntax error, unrecognized expression: " + e)

    at.uniqueSort = (e) ->
      t = undefined
      n = []
      i = 0
      o = 0
      if S = not r.detectDuplicates
      c = not r.sortStable and e.slice(0)
      e.sort(A)
      S
        t is e[o] and (i = n.push(o))  while t = e[o++]
        e.splice n[i], 1  while i--
      e

    a = at.getText = (e) ->
      t = undefined
      n = ""
      r = 0
      i = e.nodeType
      if i
        if 1 is i or 9 is i or 11 is i
          return e.textContent  if "string" is typeof e.textContent
          e = e.firstChild
          while e
            n += a(e)
            e = e.nextSibling
        else return e.nodeValue  if 3 is i or 4 is i
      else
        while t = e[r]
          n += a(t)
          r++
      n

    o = at.selectors =
      cacheLength: 50
      createPseudo: lt
      match: Q
      attrHandle: {}
      find: {}
      relative:
        ">":
          dir: "parentNode"
          first: not 0

        " ":
          dir: "parentNode"

        "+":
          dir: "previousSibling"
          first: not 0

        "~":
          dir: "previousSibling"

      preFilter:
        ATTR: (e) ->
          e[1] = e[1].replace(rt, it)
          e[3] = (e[4] or e[5] or "").replace(rt, it)
          "~=" is e[2] and (e[3] = " " + e[3] + " ")
          e.slice(0, 4)

        CHILD: (e) ->
          e[1] = e[1].toLowerCase()
          (if "nth" is e[1].slice(0, 3) then (e[3] or at.error(e[0])
          e[4] = +((if e[4] then e[5] + (e[6] or 1) else 2 * ("even" is e[3] or "odd" is e[3])))
          e[5] = +(e[7] + e[8] or "odd" is e[3])
          ) else e[3] and at.error(e[0]))
          e

        PSEUDO: (e) ->
          n = undefined
          r = not e[5] and e[2]
          (if Q.CHILD.test(e[0]) then null else ((if e[3] and e[4] isnt t then e[2] = e[4] else r and J.test(r) and (n = mt(r, not 0)) and (n = r.indexOf(")", r.length - n) - r.length) and (e[0] = e[0].slice(0, n)
          e[2] = r.slice(0, n)
          ))
          e.slice(0, 3)
          ))

      filter:
        TAG: (e) ->
          t = e.replace(rt, it).toLowerCase()
          (if "*" is e then ->
            not 0
           else (e) ->
            e.nodeName and e.nodeName.toLowerCase() is t
          )

        CLASS: (e) ->
          t = N[e + " "]
          t or (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) and N(e, (e) ->
            t.test "string" is typeof e.className and e.className or typeof e.getAttribute isnt j and e.getAttribute("class") or ""
          )

        ATTR: (e, t, n) ->
          (r) ->
            i = at.attr(r, e)
            (if null is i then "!=" is t else (if t then (i += ""
            (if "=" is t then i is n else (if "!=" is t then i isnt n else (if "^=" is t then n and 0 is i.indexOf(n) else (if "*=" is t then n and i.indexOf(n) > -1 else (if "$=" is t then n and i.slice(-n.length) is n else (if "~=" is t then (" " + i + " ").indexOf(n) > -1 else (if "|=" is t then i is n or i.slice(0, n.length + 1) is n + "-" else not 1)))))))
            ) else not 0))

        CHILD: (e, t, n, r, i) ->
          o = "nth" isnt e.slice(0, 3)
          a = "last" isnt e.slice(-4)
          s = "of-type" is t
          (if 1 is r and 0 is i then (e) ->
            !!e.parentNode
           else (t, n, l) ->
            u = undefined
            c = undefined
            p = undefined
            f = undefined
            d = undefined
            h = undefined
            g = (if o isnt a then "nextSibling" else "previousSibling")
            m = t.parentNode
            y = s and t.nodeName.toLowerCase()
            v = not l and not s
            if m
              if o
                while g
                  p = t
                  return not 1  if (if s then p.nodeName.toLowerCase() is y else 1 is p.nodeType)  while p = p[g]
                  h = g = "only" is e and not h and "nextSibling"
                return not 0
              if h = [(if a then m.firstChild else m.lastChild)]
              a and v
                c = m[b] or (m[b] = {})
                u = c[e] or []
                d = u[0] is T and u[1]
                f = u[0] is T and u[2]
                p = d and m.childNodes[d]

                while p = ++d and p and p[g] or (f = d = 0) or h.pop()
                  if 1 is p.nodeType and ++f and p is t
                    c[e] = [T, d, f]
                    break
              else if v and (u = (t[b] or (t[b] = {}))[e]) and u[0] is T
                f = u[1]
              else
                while p = ++d and p and p[g] or (f = d = 0) or h.pop()
                  break  if ((if s then p.nodeName.toLowerCase() is y else 1 is p.nodeType)) and ++f and (v and ((p[b] or (p[b] = {}))[e] = [T, f])
                  p is t
                  )
              f -= i
              f is r or 0 is f % r and f / r >= 0
          )

        PSEUDO: (e, t) ->
          n = undefined
          r = o.pseudos[e] or o.setFilters[e.toLowerCase()] or at.error("unsupported pseudo: " + e)
          (if r[b] then r(t) else (if r.length > 1 then (n = [e, e, "", t]
          (if o.setFilters.hasOwnProperty(e.toLowerCase()) then lt((e, n) ->
            i = undefined
            o = r(e, t)
            a = o.length
            while a--
              i = F.call(e, o[a])
              e[i] = not (n[i] = o[a])
          ) else (e) ->
            r e, 0, n
          )
          ) else r))

      pseudos:
        not: lt((e) ->
          t = []
          n = []
          r = l(e.replace(z, "$1"))
          (if r[b] then lt((e, t, n, i) ->
            o = undefined
            a = r(e, null, i, [])
            s = e.length
            (o = a[s]) and (e[s] = not (t[s] = o))  while s--
          ) else (e, i, o) ->
            t[0] = e
            r(t, null, o, n)
            not n.pop()
          )
        )
        has: lt((e) ->
          (t) ->
            at(e, t).length > 0
        )
        contains: lt((e) ->
          (t) ->
            (t.textContent or t.innerText or a(t)).indexOf(e) > -1
        )
        lang: lt((e) ->
          G.test(e or "") or at.error("unsupported lang: " + e)
          e = e.replace(rt, it).toLowerCase()
          (t) ->
            n = undefined
            loop
              if n = (if h then t.lang else t.getAttribute("xml:lang") or t.getAttribute("lang"))
                return n = n.toLowerCase()
                n is e or 0 is n.indexOf(e + "-")
              break unless (t = t.parentNode) and 1 is t.nodeType
            not 1
        )
        target: (t) ->
          n = e.location and e.location.hash
          n and n.slice(1) is t.id

        root: (e) ->
          e is d

        focus: (e) ->
          e is f.activeElement and (not f.hasFocus or f.hasFocus()) and !!(e.type or e.href or ~e.tabIndex)

        enabled: (e) ->
          e.disabled is not 1

        disabled: (e) ->
          e.disabled is not 0

        checked: (e) ->
          t = e.nodeName.toLowerCase()
          "input" is t and !!e.checked or "option" is t and !!e.selected

        selected: (e) ->
          e.parentNode and e.parentNode.selectedIndex
          e.selected is not 0

        empty: (e) ->
          e = e.firstChild
          while e
            return not 1  if e.nodeName > "@" or 3 is e.nodeType or 4 is e.nodeType
            e = e.nextSibling
          not 0

        parent: (e) ->
          not o.pseudos.empty(e)

        header: (e) ->
          tt.test e.nodeName

        input: (e) ->
          et.test e.nodeName

        button: (e) ->
          t = e.nodeName.toLowerCase()
          "input" is t and "button" is e.type or "button" is t

        text: (e) ->
          t = undefined
          "input" is e.nodeName.toLowerCase() and "text" is e.type and (null is (t = e.getAttribute("type")) or t.toLowerCase() is e.type)

        first: ht(->
          [0]
        )
        last: ht((e, t) ->
          [t - 1]
        )
        eq: ht((e, t, n) ->
          [(if 0 > n then n + t else n)]
        )
        even: ht((e, t) ->
          n = 0
          while t > n
            e.push n
            n += 2
          e
        )
        odd: ht((e, t) ->
          n = 1
          while t > n
            e.push n
            n += 2
          e
        )
        lt: ht((e, t, n) ->
          r = (if 0 > n then n + t else n)
          while --r >= 0
            e.push r
          e
        )
        gt: ht((e, t, n) ->
          r = (if 0 > n then n + t else n)
          while t > ++r
            e.push r
          e
        )

    o.pseudos.nth = o.pseudos.eq

    for n of
      radio: not 0
      checkbox: not 0
      file: not 0
      password: not 0
      image: not 0
      o.pseudos[n] = ft(n)
    for n of
      submit: not 0
      reset: not 0
      o.pseudos[n] = dt(n)
    gt:: = o.filters = o.pseudos
    o.setFilters = new gt

    l = at.compile = (e, t) ->
      n = undefined
      r = []
      i = []
      o = E[e + " "]
      unless o
        t or (t = mt(e))
        n = t.length

        while n--
          o = Tt(t[n])
          (if o[b] then r.push(o) else i.push(o))
        o = E(e, Ct(i, r))
      o

    r.sortStable = b.split("").sort(A).join("") is b
    r.detectDuplicates = S
    p()
    r.sortDetached = ut((e) ->
      1 & e.compareDocumentPosition(f.createElement("div"))
    )
    ut((e) ->
      e.innerHTML = "<a href='#'></a>"
      "#" is e.firstChild.getAttribute("href")
    ) or ct("type|href|height|width", (e, n, r) ->
      (if r then t else e.getAttribute(n, (if "type" is n.toLowerCase() then 1 else 2)))
    )
    r.attributes and ut((e) ->
      e.innerHTML = "<input/>"
      e.firstChild.setAttribute("value", "")
      "" is e.firstChild.getAttribute("value")
    ) or ct("value", (e, n, r) ->
      (if r or "input" isnt e.nodeName.toLowerCase() then t else e.defaultValue)
    )
    ut((e) ->
      null is e.getAttribute("disabled")
    ) or ct(B, (e, n, r) ->
      i = undefined
      (if r then t else (if (i = e.getAttributeNode(n)) and i.specified then i.value else (if e[n] is not 0 then n.toLowerCase() else null)))
    )
    x.find = at
    x.expr = at.selectors
    x.expr[":"] = x.expr.pseudos
    x.unique = at.uniqueSort
    x.text = at.getText
    x.isXMLDoc = at.isXML
    x.contains = at.contains
  (e)

  O = {}
  x.Callbacks = (e) ->
    e = (if "string" is typeof e then O[e] or F(e) else x.extend({}, e))
    n = undefined
    r = undefined
    i = undefined
    o = undefined
    a = undefined
    s = undefined
    l = []
    u = not e.once and []
    c = (t) ->
      r = e.memory and t
      i = not 0
      a = s or 0
      s = 0
      o = l.length
      n = not 0

      while l and o > a
        if l[a].apply(t[0], t[1]) is not 1 and e.stopOnFalse
          r = not 1
          break
        a++
      n = not 1
      l and ((if u then u.length and c(u.shift()) else (if r then l = [] else p.disable())))

    p =
      add: ->
        if l
          t = l.length
          (i = (t) ->
            x.each t, (t, n) ->
              r = x.type(n)
              (if "function" is r then e.unique and p.has(n) or l.push(n) else n and n.length and "string" isnt r and i(n))

          )(arguments_)
          (if n then o = l.length else r and (s = t
          c(r)
          ))
        this

      remove: ->
        l and x.each(arguments_, (e, t) ->
          r = undefined
          while (r = x.inArray(t, l, r)) > -1
            l.splice(r, 1)
            n and (o >= r and o--
            a >= r and a--
            )
        )
        this

      has: (e) ->
        (if e then x.inArray(e, l) > -1 else not (not l or not l.length))

      empty: ->
        l = []
        o = 0
        this

      disable: ->
        l = u = r = t
        this

      disabled: ->
        not l

      lock: ->
        u = t
        r or p.disable()
        this

      locked: ->
        not u

      fireWith: (e, t) ->
        not l or i and not u or (t = t or []
        t = [e, (if t.slice then t.slice() else t)]
        (if n then u.push(t) else c(t))
        )
        this

      fire: ->
        p.fireWith(this, arguments_)
        this

      fired: ->
        !!i

    p

  x.extend(
    Deferred: (e) ->
      t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
      n = "pending"
      r =
        state: ->
          n

        always: ->
          i.done(arguments_).fail(arguments_)
          this

        then: ->
          e = arguments_
          x.Deferred((n) ->
            x.each(t, (t, o) ->
              a = o[0]
              s = x.isFunction(e[t]) and e[t]
              i[o[1]] ->
                e = s and s.apply(this, arguments_)
                (if e and x.isFunction(e.promise) then e.promise().done(n.resolve).fail(n.reject).progress(n.notify) else n[a + "With"]((if this is r then n.promise() else this), (if s then [e] else arguments_)))

            )
            e = null
          ).promise()

        promise: (e) ->
          (if null isnt e then x.extend(e, r) else r)

      i = {}
      r.pipe = r.then
      x.each(t, (e, o) ->
        a = o[2]
        s = o[3]
        r[o[1]] = a.add
        s and a.add(->
          n = s
        , t[1 ^ e][2].disable, t[2][2].lock)
        i[o[0]] = ->
          i[o[0] + "With"]((if this is i then r else this), arguments_)
          this

        i[o[0] + "With"] = a.fireWith
      )
      r.promise(i)
      e and e.call(i, i)
      i

    when: (e) ->
      t = 0
      n = g.call(arguments_)
      r = n.length
      i = (if 1 isnt r or e and x.isFunction(e.promise) then r else 0)
      o = (if 1 is i then e else x.Deferred())
      a = (e, t, n) ->
        (r) ->
          t[e] = this
          n[e] = (if arguments_.length > 1 then g.call(arguments_) else r)
          (if n is s then o.notifyWith(t, n) else --i or o.resolveWith(t, n))

      s = undefined
      l = undefined
      u = undefined
      if r > 1
        s = Array(r)
        l = Array(r)
        u = Array(r)

        while r > t
          (if n[t] and x.isFunction(n[t].promise) then n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) else --i)
          t++
      i or o.resolveWith(u, n)
      o.promise()
  )
  x.support = (t) ->
    n = undefined
    r = undefined
    o = undefined
    s = undefined
    l = undefined
    u = undefined
    c = undefined
    p = undefined
    f = undefined
    d = a.createElement("div")
    return t  if d.setAttribute("className", "t")
    d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"
    n = d.getElementsByTagName("*") or []
    r = d.getElementsByTagName("a")[0]
    not r or not r.style or not n.length

    s = a.createElement("select")
    u = s.appendChild(a.createElement("option"))
    o = d.getElementsByTagName("input")[0]
    r.style.cssText = "top:1px;float:left;opacity:.5"
    t.getSetAttribute = "t" isnt d.className
    t.leadingWhitespace = 3 is d.firstChild.nodeType
    t.tbody = not d.getElementsByTagName("tbody").length
    t.htmlSerialize = !!d.getElementsByTagName("link").length
    t.style = /top/.test(r.getAttribute("style"))
    t.hrefNormalized = "/a" is r.getAttribute("href")
    t.opacity = /^0.5/.test(r.style.opacity)
    t.cssFloat = !!r.style.cssFloat
    t.checkOn = !!o.value
    t.optSelected = u.selected
    t.enctype = !!a.createElement("form").enctype
    t.html5Clone = "<:nav></:nav>" isnt a.createElement("nav").cloneNode(not 0).outerHTML
    t.inlineBlockNeedsLayout = not 1
    t.shrinkWrapBlocks = not 1
    t.pixelPosition = not 1
    t.deleteExpando = not 0
    t.noCloneEvent = not 0
    t.reliableMarginRight = not 0
    t.boxSizingReliable = not 0
    o.checked = not 0
    t.noCloneChecked = o.cloneNode(not 0).checked
    s.disabled = not 0
    t.optDisabled = not u.disabled

    try
      delete d.test
    catch h
      t.deleteExpando = not 1
    o = a.createElement("input")
    o.setAttribute("value", "")
    t.input = "" is o.getAttribute("value")
    o.value = "t"
    o.setAttribute("type", "radio")
    t.radioValue = "t" is o.value
    o.setAttribute("checked", "t")
    o.setAttribute("name", "t")
    l = a.createDocumentFragment()
    l.appendChild(o)
    t.appendChecked = o.checked
    t.checkClone = l.cloneNode(not 0).cloneNode(not 0).lastChild.checked
    d.attachEvent and (d.attachEvent("onclick", ->
      t.noCloneEvent = not 1
    )
    d.cloneNode(not 0).click()
    )

    for f of
      submit: not 0
      change: not 0
      focusin: not 0
      d.setAttribute(c = "on" + f, "t")
      t[f + "Bubbles"] = c of e or d.attributes[c].expando is not 1
    d.style.backgroundClip = "content-box"
    d.cloneNode(not 0).style.backgroundClip = ""
    t.clearCloneStyle = "content-box" is d.style.backgroundClip

    for f of x(t)
      break
    t.ownLast = "0" isnt f
    x(->
      n = undefined
      r = undefined
      o = undefined
      s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;"
      l = a.getElementsByTagName("body")[0]
      l and (n = a.createElement("div")
      n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"
      l.appendChild(n).appendChild(d)
      d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"
      o = d.getElementsByTagName("td")
      o[0].style.cssText = "padding:0;margin:0;border:0;display:none"
      p = 0 is o[0].offsetHeight
      o[0].style.display = ""
      o[1].style.display = "none"
      t.reliableHiddenOffsets = p and 0 is o[0].offsetHeight
      d.innerHTML = ""
      d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"
      x.swap(l, (if null isnt l.style.zoom then zoom: 1 else {}), ->
        t.boxSizing = 4 is d.offsetWidth
      )
      e.getComputedStyle and (t.pixelPosition = "1%" isnt (e.getComputedStyle(d, null) or {}).top
      t.boxSizingReliable = "4px" is (e.getComputedStyle(d, null) or width: "4px").width
      r = d.appendChild(a.createElement("div"))
      r.style.cssText = d.style.cssText = s
      r.style.marginRight = r.style.width = "0"
      d.style.width = "1px"
      t.reliableMarginRight = not parseFloat((e.getComputedStyle(r, null) or {}).marginRight)
      )
      typeof d.style.zoom isnt i and (d.innerHTML = ""
      d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1"
      t.inlineBlockNeedsLayout = 3 is d.offsetWidth
      d.style.display = "block"
      d.innerHTML = "<div></div>"
      d.firstChild.style.width = "5px"
      t.shrinkWrapBlocks = 3 isnt d.offsetWidth
      t.inlineBlockNeedsLayout and (l.style.zoom = 1)
      )
      l.removeChild(n)
      n = d = o = r = null
      )
    )
    n = s = l = u = r = o = null
    t
  ({})

  B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
  P = /([A-Z])/g
  x.extend(
    cache: {}
    noData:
      applet: not 0
      embed: not 0
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"

    hasData: (e) ->
      e = (if e.nodeType then x.cache[e[x.expando]] else e[x.expando])
      !!e and not I(e)

    data: (e, t, n) ->
      R e, t, n

    removeData: (e, t) ->
      W e, t

    _data: (e, t, n) ->
      R e, t, n, not 0

    _removeData: (e, t) ->
      W e, t, not 0

    acceptData: (e) ->
      return not 1  if e.nodeType and 1 isnt e.nodeType and 9 isnt e.nodeType
      t = e.nodeName and x.noData[e.nodeName.toLowerCase()]
      not t or t isnt not 0 and e.getAttribute("classid") is t
  )
  x.fn.extend(
    data: (e, n) ->
      r = undefined
      i = undefined
      o = null
      a = 0
      s = this[0]
      if e is t
        if @length and (o = x.data(s)
        1 is s.nodeType and not x._data(s, "parsedAttrs")
        )
          r = s.attributes
          while r.length > a
            i = r[a].name
            0 is i.indexOf("data-") and (i = x.camelCase(i.slice(5))
            $(s, i, o[i])
            )
            a++
          x._data s, "parsedAttrs", not 0
        return o
      (if "object" is typeof e then @each(->
        x.data this, e
      ) else (if arguments_.length > 1 then @each(->
        x.data this, e, n
      ) else (if s then $(s, e, x.data(s, e)) else null)))

    removeData: (e) ->
      @each ->
        x.removeData this, e

  )

  x.extend(
    queue: (e, n, r) ->
      i = undefined
      (if e then (n = (n or "fx") + "queue"
      i = x._data(e, n)
      r and ((if not i or x.isArray(r) then i = x._data(e, n, x.makeArray(r)) else i.push(r)))
      i or []
      ) else t)

    dequeue: (e, t) ->
      t = t or "fx"
      n = x.queue(e, t)
      r = n.length
      i = n.shift()
      o = x._queueHooks(e, t)
      a = ->
        x.dequeue e, t

      "inprogress" is i and (i = n.shift()
      r--
      )
      i and ("fx" is t and n.unshift("inprogress")
      delete o.stop

      i.call(e, a, o)
      )
      not r and o and o.empty.fire()

    _queueHooks: (e, t) ->
      n = t + "queueHooks"
      x._data(e, n) or x._data(e, n,
        empty: x.Callbacks("once memory").add(->
          x._removeData(e, t + "queue")
          x._removeData(e, n)
        )
      )
  )
  x.fn.extend(
    queue: (e, n) ->
      r = 2
      "string" isnt typeof e and (n = e
      e = "fx"
      r--
      )
      (if r > arguments_.length then x.queue(this[0], e) else (if n is t then this else @each(->
        t = x.queue(this, e, n)
        x._queueHooks(this, e)
        "fx" is e and "inprogress" isnt t[0] and x.dequeue(this, e)
      )))

    dequeue: (e) ->
      @each ->
        x.dequeue this, e


    delay: (e, t) ->
      e = (if x.fx then x.fx.speeds[e] or e else e)
      t = t or "fx"
      @queue(t, (t, n) ->
        r = setTimeout(t, e)
        n.stop = ->
          clearTimeout r
      )

    clearQueue: (e) ->
      @queue e or "fx", []

    promise: (e, n) ->
      r = undefined
      i = 1
      o = x.Deferred()
      a = this
      s = @length
      l = ->
        --i or o.resolveWith(a, [a])

      "string" isnt typeof e and (n = e
      e = t
      )
      e = e or "fx"

      while s--
        r = x._data(a[s], e + "queueHooks")
        r and r.empty and (i++
        r.empty.add(l)
        )
      l()
      o.promise(n)
  )

  z = undefined
  X = undefined
  U = /[\t\r\n\f]/g
  V = /\r/g
  Y = /^(?:input|select|textarea|button|object)$/i
  J = /^(?:a|area)$/i
  G = /^(?:checked|selected)$/i
  Q = x.support.getSetAttribute
  K = x.support.input
  x.fn.extend(
    attr: (e, t) ->
      x.access this, x.attr, e, t, arguments_.length > 1

    removeAttr: (e) ->
      @each ->
        x.removeAttr this, e


    prop: (e, t) ->
      x.access this, x.prop, e, t, arguments_.length > 1

    removeProp: (e) ->
      e = x.propFix[e] or e
      @each(->
        try
          this[e] = t
          delete this[e]
      )

    addClass: (e) ->
      t = undefined
      n = undefined
      r = undefined
      i = undefined
      o = undefined
      a = 0
      s = @length
      l = "string" is typeof e and e
      if x.isFunction(e)
        return @each((t) ->
          x(this).addClass e.call(this, t, @className)
        )
      if l
        t = (e or "").match(T) or []
        while s > a
          if n = this[a]
          r = 1 is n.nodeType and ((if n.className then (" " + n.className + " ").replace(U, " ") else " "))
            o = 0
            0 > r.indexOf(" " + i + " ") and (r += i + " ")  while i = t[o++]
            n.className = x.trim(r)
          a++
      this

    removeClass: (e) ->
      t = undefined
      n = undefined
      r = undefined
      i = undefined
      o = undefined
      a = 0
      s = @length
      l = 0 is arguments_.length or "string" is typeof e and e
      if x.isFunction(e)
        return @each((t) ->
          x(this).removeClass e.call(this, t, @className)
        )
      if l
        t = (e or "").match(T) or []
        while s > a
          if n = this[a]
          r = 1 is n.nodeType and ((if n.className then (" " + n.className + " ").replace(U, " ") else ""))
            o = 0
            r = r.replace(" " + i + " ", " ")  while r.indexOf(" " + i + " ") >= 0  while i = t[o++]
            n.className = (if e then x.trim(r) else "")
          a++
      this

    toggleClass: (e, t) ->
      n = typeof e
      (if "boolean" is typeof t and "string" is n then (if t then @addClass(e) else @removeClass(e)) else (if x.isFunction(e) then @each((n) ->
        x(this).toggleClass e.call(this, n, @className, t), t
      ) else @each(->
        if "string" is n
          t = undefined
          r = 0
          o = x(this)
          a = e.match(T) or []
          (if o.hasClass(t) then o.removeClass(t) else o.addClass(t))  while t = a[r++]
        else
          (n is i or "boolean" is n) and (@className and x._data(this, "__className__", @className)
          @className = (if @className or e is not 1 then "" else x._data(this, "__className__") or "")
          )
      )))

    hasClass: (e) ->
      t = " " + e + " "
      n = 0
      r = @length
      while r > n
        return not 0  if 1 is this[n].nodeType and (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0
        n++
      not 1

    val: (e) ->
      n = undefined
      r = undefined
      i = undefined
      o = this[0]
      if arguments_.length
        return i = x.isFunction(e)
        @each((n) ->
          o = undefined
          1 is @nodeType and (o = (if i then e.call(this, n, x(this).val()) else e)
          (if null is o then o = "" else (if "number" is typeof o then o += "" else x.isArray(o) and (o = x.map(o, (e) ->
            (if null is e then "" else e + "")
          ))))
          r = x.valHooks[@type] or x.valHooks[@nodeName.toLowerCase()]
          r and "set" of r and r.set(this, o, "value") isnt t or (@value = o)
          )
        )
      if o
        r = x.valHooks[o.type] or x.valHooks[o.nodeName.toLowerCase()]
        (if r and "get" of r and (n = r.get(o, "value")) isnt t then n else (n = o.value
        (if "string" is typeof n then n.replace(V, "") else (if null is n then "" else n))
        ))
  )
  x.extend(
    valHooks:
      option:
        get: (e) ->
          t = x.find.attr(e, "value")
          (if null isnt t then t else e.text)

      select:
        get: (e) ->
          t = undefined
          n = undefined
          r = e.options
          i = e.selectedIndex
          o = "select-one" is e.type or 0 > i
          a = (if o then null else [])
          s = (if o then i + 1 else r.length)
          l = (if 0 > i then s else (if o then i else 0))
          while s > l
            if n = r[l]
            not (not n.selected and l isnt i or ((if x.support.optDisabled then n.disabled else null isnt n.getAttribute("disabled"))) or n.parentNode.disabled and x.nodeName(n.parentNode, "optgroup"))
              return t  if t = x(n).val()
              o

              a.push t
            l++
          a

        set: (e, t) ->
          n = undefined
          r = undefined
          i = e.options
          o = x.makeArray(t)
          a = i.length
          while a--
            r = i[a]
            (r.selected = x.inArray(x(r).val(), o) >= 0) and (n = not 0)
          n or (e.selectedIndex = -1)
          o

    attr: (e, n, r) ->
      o = undefined
      a = undefined
      s = e.nodeType
      if e and 3 isnt s and 8 isnt s and 2 isnt s
        (if typeof e.getAttribute is i then x.prop(e, n, r) else (1 is s and x.isXMLDoc(e) or (n = n.toLowerCase()
        o = x.attrHooks[n] or ((if x.expr.match.bool.test(n) then X else z))
        )
        (if r is t then (if o and "get" of o and null isnt (a = o.get(e, n)) then a else (a = x.find.attr(e, n)
        (if null is a then t else a)
        )) else (if null isnt r then (if o and "set" of o and (a = o.set(e, r, n)) isnt t then a else (e.setAttribute(n, r + "")
        r
        )) else (x.removeAttr(e, n)
        t
        )))
        ))

    removeAttr: (e, t) ->
      n = undefined
      r = undefined
      i = 0
      o = t and t.match(T)
      if o and 1 is e.nodeType
        while n = o[i++]
          r = x.propFix[n] or n
          (if x.expr.match.bool.test(n) then (if K and Q or not G.test(n) then e[r] = not 1 else e[x.camelCase("default-" + n)] = e[r] = not 1) else x.attr(e, n, ""))
          e.removeAttribute((if Q then n else r))

    attrHooks:
      type:
        set: (e, t) ->
          if not x.support.radioValue and "radio" is t and x.nodeName(e, "input")
            n = e.value
            e.setAttribute("type", t)
            n and (e.value = n)
            t

    propFix:
      for: "htmlFor"
      class: "className"

    prop: (e, n, r) ->
      i = undefined
      o = undefined
      a = undefined
      s = e.nodeType
      if e and 3 isnt s and 8 isnt s and 2 isnt s
        a = 1 isnt s or not x.isXMLDoc(e)
        a and (n = x.propFix[n] or n
        o = x.propHooks[n]
        )
        (if r isnt t then (if o and "set" of o and (i = o.set(e, r, n)) isnt t then i else e[n] = r) else (if o and "get" of o and null isnt (i = o.get(e, n)) then i else e[n]))

    propHooks:
      tabIndex:
        get: (e) ->
          t = x.find.attr(e, "tabindex")
          (if t then parseInt(t, 10) else (if Y.test(e.nodeName) or J.test(e.nodeName) and e.href then 0 else -1))
  )
  X = set: (e, t, n) ->
    (if t is not 1 then x.removeAttr(e, n) else (if K and Q or not G.test(n) then e.setAttribute(not Q and x.propFix[n] or n, n) else e[x.camelCase("default-" + n)] = e[n] = not 0))
    n

  x.each(x.expr.match.bool.source.match(/\w+/g), (e, n) ->
    r = x.expr.attrHandle[n] or x.find.attr
    x.expr.attrHandle[n] = (if K and Q or not G.test(n) then (e, n, i) ->
      o = x.expr.attrHandle[n]
      a = (if i then t else (if (x.expr.attrHandle[n] = t) isnt r(e, n, i) then n.toLowerCase() else null))
      x.expr.attrHandle[n] = o
      a
     else (e, n, r) ->
      (if r then t else (if e[x.camelCase("default-" + n)] then n.toLowerCase() else null))
    )
  )
  K and Q or (x.attrHooks.value = set: (e, n, r) ->
    (if x.nodeName(e, "input") then (e.defaultValue = n
    t
    ) else z and z.set(e, n, r))
  )
  Q or (z = set: (e, n, r) ->
    i = e.getAttributeNode(r)
    i or e.setAttributeNode(i = e.ownerDocument.createAttribute(r))
    i.value = n += ""
    (if "value" is r or n is e.getAttribute(r) then n else t)

  x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = (e, n, r) ->
    i = undefined
    (if r then t else (if (i = e.getAttributeNode(n)) and "" isnt i.value then i.value else null))

  x.valHooks.button =
    get: (e, n) ->
      r = e.getAttributeNode(n)
      (if r and r.specified then r.value else t)

    set: z.set

  x.attrHooks.contenteditable = set: (e, t, n) ->
    z.set e, (if "" is t then not 1 else t), n

  x.each(["width", "height"], (e, n) ->
    x.attrHooks[n] = set: (e, r) ->
      (if "" is r then (e.setAttribute(n, "auto")
      r
      ) else t)
  )
  )
  x.support.hrefNormalized or x.each(["href", "src"], (e, t) ->
    x.propHooks[t] = get: (e) ->
      e.getAttribute t, 4
  )
  x.support.style or (x.attrHooks.style =
    get: (e) ->
      e.style.cssText or t

    set: (e, t) ->
      e.style.cssText = t + ""
  )
  x.support.optSelected or (x.propHooks.selected = get: (e) ->
    t = e.parentNode
    t and (t.selectedIndex
    t.parentNode and t.parentNode.selectedIndex
    )
    null
  )
  x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], ->
    x.propFix[@toLowerCase()] = this
  )
  x.support.enctype or (x.propFix.enctype = "encoding")
  x.each(["radio", "checkbox"], ->
    x.valHooks[this] = set: (e, n) ->
      (if x.isArray(n) then e.checked = x.inArray(x(e).val(), n) >= 0 else t)

    x.support.checkOn or (x.valHooks[this].get = (e) ->
      (if null is e.getAttribute("value") then "on" else e.value)
    )
  )

  Z = /^(?:input|select|textarea)$/i
  et = /^key/
  tt = /^(?:mouse|contextmenu)|click/
  nt = /^(?:focusinfocus|focusoutblur)$/
  rt = /^([^.]*)(?:\.(.+)|)$/
  x.event =
    global: {}
    add: (e, n, r, o, a) ->
      s = undefined
      l = undefined
      u = undefined
      c = undefined
      p = undefined
      f = undefined
      d = undefined
      h = undefined
      g = undefined
      m = undefined
      y = undefined
      v = x._data(e)
      if v
        r.handler and (c = r
        r = c.handler
        a = c.selector
        )
        r.guid or (r.guid = x.guid++)
        (l = v.events) or (l = v.events = {})
        (f = v.handle) or (f = v.handle = (e) ->
          (if typeof x is i or e and x.event.triggered is e.type then t else x.event.dispatch.apply(f.elem, arguments_))

        f.elem = e
        )
        n = (n or "").match(T) or [""]
        u = n.length

        while u--
          s = rt.exec(n[u]) or []
          g = y = s[1]
          m = (s[2] or "").split(".").sort()
          g and (p = x.event.special[g] or {}
          g = ((if a then p.delegateType else p.bindType)) or g
          p = x.event.special[g] or {}
          d = x.extend(
            type: g
            origType: y
            data: o
            handler: r
            guid: r.guid
            selector: a
            needsContext: a and x.expr.match.needsContext.test(a)
            namespace: m.join(".")
          , c)
          (h = l[g]) or (h = l[g] = []
          h.delegateCount = 0
          p.setup and p.setup.call(e, o, m, f) isnt not 1 or ((if e.addEventListener then e.addEventListener(g, f, not 1) else e.attachEvent and e.attachEvent("on" + g, f)))
          )
          p.add and (p.add.call(e, d)
          d.handler.guid or (d.handler.guid = r.guid)
          )
          (if a then h.splice(h.delegateCount++, 0, d) else h.push(d))
          x.event.global[g] = not 0
          )
        e = null

    remove: (e, t, n, r, i) ->
      o = undefined
      a = undefined
      s = undefined
      l = undefined
      u = undefined
      c = undefined
      p = undefined
      f = undefined
      d = undefined
      h = undefined
      g = undefined
      m = x.hasData(e) and x._data(e)
      if m and (c = m.events)
        t = (t or "").match(T) or [""]
        u = t.length

        while u--
          if s = rt.exec(t[u]) or []
          d = g = s[1]
          h = (s[2] or "").split(".").sort()
          d
            p = x.event.special[d] or {}
            d = ((if r then p.delegateType else p.bindType)) or d
            f = c[d] or []
            s = s[2] and RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            l = o = f.length

            while o--
              a = f[o]
              not i and g isnt a.origType or n and n.guid isnt a.guid or s and not s.test(a.namespace) or r and r isnt a.selector and ("**" isnt r or not a.selector) or (f.splice(o, 1)
              a.selector and f.delegateCount--
              p.remove and p.remove.call(e, a)
              )
            l and not f.length and (p.teardown and p.teardown.call(e, h, m.handle) isnt not 1 or x.removeEvent(e, d, m.handle)
            delete c[d]

            )
          else
            for d of c
              x.event.remove e, d + t[u], n, r, not 0
        x.isEmptyObject(c) and (delete m.handle

        x._removeData(e, "events")
        )

    trigger: (n, r, i, o) ->
      s = undefined
      l = undefined
      u = undefined
      c = undefined
      p = undefined
      f = undefined
      d = undefined
      h = [i or a]
      g = (if v.call(n, "type") then n.type else n)
      m = (if v.call(n, "namespace") then n.namespace.split(".") else [])
      if u = f = i = i or a
      3 isnt i.nodeType and 8 isnt i.nodeType and not nt.test(g + x.event.triggered) and (g.indexOf(".") >= 0 and (m = g.split(".")
      g = m.shift()
      m.sort()
      )
      l = 0 > g.indexOf(":") and "on" + g
      n = (if n[x.expando] then n else new x.Event(g, "object" is typeof n and n))
      n.isTrigger = (if o then 2 else 3)
      n.namespace = m.join(".")
      n.namespace_re = (if n.namespace then RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") else null)
      n.result = t
      n.target or (n.target = i)
      r = (if null is r then [n] else x.makeArray(r, [n]))
      p = x.event.special[g] or {}
      o or not p.trigger or p.trigger.apply(i, r) isnt not 1
      )
        if not o and not p.noBubble and not x.isWindow(i)
          c = p.delegateType or g
          nt.test(c + g) or (u = u.parentNode)

          while u
            h.push(u)
            f = u
            u = u.parentNode
          f is (i.ownerDocument or a) and h.push(f.defaultView or f.parentWindow or e)
        d = 0
        while (u = h[d++]) and not n.isPropagationStopped()
          n.type = (if d > 1 then c else p.bindType or g)
          s = (x._data(u, "events") or {})[n.type] and x._data(u, "handle")
          s and s.apply(u, r)
          s = l and u[l]
          s and x.acceptData(u) and s.apply and s.apply(u, r) is not 1 and n.preventDefault()
        if n.type = g
        not o and not n.isDefaultPrevented() and (not p._default or p._default.apply(h.pop(), r) is not 1) and x.acceptData(i) and l and i[g] and not x.isWindow(i)
          f = i[l]
          f and (i[l] = null)
          x.event.triggered = g

          try
            i[g]()
          x.event.triggered = t
          f and (i[l] = f)
        n.result

    dispatch: (e) ->
      e = x.event.fix(e)
      n = undefined
      r = undefined
      i = undefined
      o = undefined
      a = undefined
      s = []
      l = g.call(arguments_)
      u = (x._data(this, "events") or {})[e.type] or []
      c = x.event.special[e.type] or {}
      if l[0] = e
      e.delegateTarget = this
      not c.preDispatch or c.preDispatch.call(this, e) isnt not 1
        s = x.event.handlers.call(this, e, u)
        n = 0

        while (o = s[n++]) and not e.isPropagationStopped()
          e.currentTarget = o.elem
          a = 0

          while (i = o.handlers[a++]) and not e.isImmediatePropagationStopped()
            (not e.namespace_re or e.namespace_re.test(i.namespace)) and (e.handleObj = i
            e.data = i.data
            r = ((x.event.special[i.origType] or {}).handle or i.handler).apply(o.elem, l)
            r isnt t and (e.result = r) is not 1 and (e.preventDefault()
            e.stopPropagation()
            )
            )
        c.postDispatch and c.postDispatch.call(this, e)
        e.result

    handlers: (e, n) ->
      r = undefined
      i = undefined
      o = undefined
      a = undefined
      s = []
      l = n.delegateCount
      u = e.target
      if l and u.nodeType and (not e.button or "click" isnt e.type)
        while u isnt this
          if 1 is u.nodeType and (u.disabled isnt not 0 or "click" isnt e.type)
            o = []
            a = 0

            while l > a
              i = n[a]
              r = i.selector + " "
              o[r] is t and (o[r] = (if i.needsContext then x(r, this).index(u) >= 0 else x.find(r, this, null, [u]).length))
              o[r] and o.push(i)
              a++
            o.length and s.push(
              elem: u
              handlers: o
            )
          u = u.parentNode or this
      n.length > l and s.push(
        elem: this
        handlers: n.slice(l)
      )
      s

    fix: (e) ->
      return e  if e[x.expando]
      t = undefined
      n = undefined
      r = undefined
      i = e.type
      o = e
      s = @fixHooks[i]
      s or (@fixHooks[i] = s = (if tt.test(i) then @mouseHooks else (if et.test(i) then @keyHooks else {})))
      r = (if s.props then @props.concat(s.props) else @props)
      e = new x.Event(o)
      t = r.length

      while t--
        n = r[t]
        e[n] = o[n]
      e.target or (e.target = o.srcElement or a)
      3 is e.target.nodeType and (e.target = e.target.parentNode)
      e.metaKey = !!e.metaKey
      (if s.filter then s.filter(e, o) else e)

    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" ")
    fixHooks: {}
    keyHooks:
      props: "char charCode key keyCode".split(" ")
      filter: (e, t) ->
        null is e.which and (e.which = (if null isnt t.charCode then t.charCode else t.keyCode))
        e

    mouseHooks:
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")
      filter: (e, n) ->
        r = undefined
        i = undefined
        o = undefined
        s = n.button
        l = n.fromElement
        null is e.pageX and null isnt n.clientX and (i = e.target.ownerDocument or a
        o = i.documentElement
        r = i.body
        e.pageX = n.clientX + (o and o.scrollLeft or r and r.scrollLeft or 0) - (o and o.clientLeft or r and r.clientLeft or 0)
        e.pageY = n.clientY + (o and o.scrollTop or r and r.scrollTop or 0) - (o and o.clientTop or r and r.clientTop or 0)
        )
        not e.relatedTarget and l and (e.relatedTarget = (if l is e.target then n.toElement else l))
        e.which or s is t or (e.which = (if 1 & s then 1 else (if 2 & s then 3 else (if 4 & s then 2 else 0))))
        e

    special:
      load:
        noBubble: not 0

      focus:
        trigger: ->
          if this isnt at() and @focus
            try
              return @focus()
              not 1

        delegateType: "focusin"

      blur:
        trigger: ->
          (if this is at() and @blur then (@blur()
          not 1
          ) else t)

        delegateType: "focusout"

      click:
        trigger: ->
          (if x.nodeName(this, "input") and "checkbox" is @type and @click then (@click()
          not 1
          ) else t)

        _default: (e) ->
          x.nodeName e.target, "a"

      beforeunload:
        postDispatch: (e) ->
          e.result isnt t and (e.originalEvent.returnValue = e.result)

    simulate: (e, t, n, r) ->
      i = x.extend(new x.Event, n,
        type: e
        isSimulated: not 0
        originalEvent: {}
      )
      (if r then x.event.trigger(i, null, t) else x.event.dispatch.call(t, i))
      i.isDefaultPrevented() and n.preventDefault()

  x.removeEvent = (if a.removeEventListener then (e, t, n) ->
    e.removeEventListener and e.removeEventListener(t, n, not 1)
   else (e, t, n) ->
    r = "on" + t
    e.detachEvent and (typeof e[r] is i and (e[r] = null)
    e.detachEvent(r, n)
    )
  )
  x.Event = (e, n) ->
    (if this instanceof x.Event then ((if e and e.type then (@originalEvent = e
    @type = e.type
    @isDefaultPrevented = (if e.defaultPrevented or e.returnValue is not 1 or e.getPreventDefault and e.getPreventDefault() then it else ot)
    ) else @type = e)
    n and x.extend(this, n)
    @timeStamp = e and e.timeStamp or x.now()
    this[x.expando] = not 0
    t
    ) else new x.Event(e, n))

  x.Event:: =
    isDefaultPrevented: ot
    isPropagationStopped: ot
    isImmediatePropagationStopped: ot
    preventDefault: ->
      e = @originalEvent
      @isDefaultPrevented = it
      e and ((if e.preventDefault then e.preventDefault() else e.returnValue = not 1))

    stopPropagation: ->
      e = @originalEvent
      @isPropagationStopped = it
      e and (e.stopPropagation and e.stopPropagation()
      e.cancelBubble = not 0
      )

    stopImmediatePropagation: ->
      @isImmediatePropagationStopped = it
      @stopPropagation()

  x.each(
    mouseenter: "mouseover"
    mouseleave: "mouseout"
  , (e, t) ->
    x.event.special[e] =
      delegateType: t
      bindType: t
      handle: (e) ->
        n = undefined
        r = this
        i = e.relatedTarget
        o = e.handleObj
        (not i or i isnt r and not x.contains(r, i)) and (e.type = o.origType
        n = o.handler.apply(this, arguments_)
        e.type = t
        )
        n
  )
  x.support.submitBubbles or (x.event.special.submit =
    setup: ->
      (if x.nodeName(this, "form") then not 1 else (x.event.add(this, "click._submit keypress._submit", (e) ->
        n = e.target
        r = (if x.nodeName(n, "input") or x.nodeName(n, "button") then n.form else t)
        r and not x._data(r, "submitBubbles") and (x.event.add(r, "submit._submit", (e) ->
          e._submit_bubble = not 0
        )
        x._data(r, "submitBubbles", not 0)
        )
      )
      t
      ))

    postDispatch: (e) ->
      e._submit_bubble and (delete e._submit_bubble

      @parentNode and not e.isTrigger and x.event.simulate("submit", @parentNode, e, not 0)
      )

    teardown: ->
      (if x.nodeName(this, "form") then not 1 else (x.event.remove(this, "._submit")
      t
      ))
  )
  x.support.changeBubbles or (x.event.special.change =
    setup: ->
      (if Z.test(@nodeName) then (("checkbox" is @type or "radio" is @type) and (x.event.add(this, "propertychange._change", (e) ->
        "checked" is e.originalEvent.propertyName and (@_just_changed = not 0)
      )
      x.event.add(this, "click._change", (e) ->
        @_just_changed and not e.isTrigger and (@_just_changed = not 1)
        x.event.simulate("change", this, e, not 0)
      )
      )
      not 1
      ) else (x.event.add(this, "beforeactivate._change", (e) ->
        t = e.target
        Z.test(t.nodeName) and not x._data(t, "changeBubbles") and (x.event.add(t, "change._change", (e) ->
          not @parentNode or e.isSimulated or e.isTrigger or x.event.simulate("change", @parentNode, e, not 0)
        )
        x._data(t, "changeBubbles", not 0)
        )
      )
      t
      ))

    handle: (e) ->
      n = e.target
      (if this isnt n or e.isSimulated or e.isTrigger or "radio" isnt n.type and "checkbox" isnt n.type then e.handleObj.handler.apply(this, arguments_) else t)

    teardown: ->
      x.event.remove(this, "._change")
      not Z.test(@nodeName)
  )
  x.support.focusinBubbles or x.each(
    focus: "focusin"
    blur: "focusout"
  , (e, t) ->
    n = 0
    r = (e) ->
      x.event.simulate t, e.target, x.event.fix(e), not 0

    x.event.special[t] =
      setup: ->
        0 is n++ and a.addEventListener(e, r, not 0)

      teardown: ->
        0 is --n and a.removeEventListener(e, r, not 0)
  )
  x.fn.extend(
    on: (e, n, r, i, o) ->
      a = undefined
      s = undefined
      if "object" is typeof e
        "string" isnt typeof n and (r = r or n
        n = t
        )
        for a of e
          @on a, n, r, e[a], o
        return this
      if (if null is r and null is i then (i = n
      r = n = t
      ) else null is i and ((if "string" is typeof n then (i = r
      r = t
      ) else (i = r
      r = n
      n = t
      ))))
      i is not 1
        i = ot
      else return this  unless i
      1 is o and (s = i
      i = (e) ->
        x().off(e)
        s.apply(this, arguments_)

      i.guid = s.guid or (s.guid = x.guid++)
      )
      @each(->
        x.event.add this, e, i, r, n
      )

    one: (e, t, n, r) ->
      @on e, t, n, r, 1

    off: (e, n, r) ->
      i = undefined
      o = undefined
      if e and e.preventDefault and e.handleObj
        return i = e.handleObj
        x(e.delegateTarget).off((if i.namespace then i.origType + "." + i.namespace else i.origType), i.selector, i.handler)
        this
      if "object" is typeof e
        for o of e
          @off o, n, e[o]
        return this
      (n is not 1 or "function" is typeof n) and (r = n
      n = t
      )
      r is not 1 and (r = ot)
      @each(->
        x.event.remove this, e, r, n
      )

    trigger: (e, t) ->
      @each ->
        x.event.trigger e, t, this


    triggerHandler: (e, n) ->
      r = this[0]
      (if r then x.event.trigger(e, n, r, not 0) else t)
  )

  st = /^.[^:#\[\.,]*$/
  lt = /^(?:parents|prev(?:Until|All))/
  ut = x.expr.match.needsContext
  ct =
    children: not 0
    contents: not 0
    next: not 0
    prev: not 0

  x.fn.extend
    find: (e) ->
      t = undefined
      n = []
      r = this
      i = r.length
      unless "string" is typeof e
        return @pushStack(x(e).filter(->
          t = 0
          while i > t
            return not 0  if x.contains(r[t], this)
            t++
        ))
      t = 0
      while i > t
        x.find e, r[t], n
        t++
      n = @pushStack((if i > 1 then x.unique(n) else n))
      n.selector = (if @selector then @selector + " " + e else e)
      n

    has: (e) ->
      t = undefined
      n = x(e, this)
      r = n.length
      @filter ->
        t = 0
        while r > t
          return not 0  if x.contains(this, n[t])
          t++


    not: (e) ->
      @pushStack ft(this, e or [], not 0)

    filter: (e) ->
      @pushStack ft(this, e or [], not 1)

    is: (e) ->
      !!ft(this, (if "string" is typeof e and ut.test(e) then x(e) else e or []), not 1).length

    closest: (e, t) ->
      n = undefined
      r = 0
      i = @length
      o = []
      a = (if ut.test(e) or "string" isnt typeof e then x(e, t or @context) else 0)
      while i > r
        n = this[r]
        while n and n isnt t
          if 11 > n.nodeType and ((if a then a.index(n) > -1 else 1 is n.nodeType and x.find.matchesSelector(n, e)))
            n = o.push(n)
            break
          n = n.parentNode
        r++
      @pushStack (if o.length > 1 then x.unique(o) else o)

    index: (e) ->
      (if e then (if "string" is typeof e then x.inArray(this[0], x(e)) else x.inArray((if e.jquery then e[0] else e), this)) else (if this[0] and this[0].parentNode then @first().prevAll().length else -1))

    add: (e, t) ->
      n = (if "string" is typeof e then x(e, t) else x.makeArray((if e and e.nodeType then [e] else e)))
      r = x.merge(@get(), n)
      @pushStack x.unique(r)

    addBack: (e) ->
      @add (if null is e then @prevObject else @prevObject.filter(e))

  x.each(
    parent: (e) ->
      t = e.parentNode
      (if t and 11 isnt t.nodeType then t else null)

    parents: (e) ->
      x.dir e, "parentNode"

    parentsUntil: (e, t, n) ->
      x.dir e, "parentNode", n

    next: (e) ->
      pt e, "nextSibling"

    prev: (e) ->
      pt e, "previousSibling"

    nextAll: (e) ->
      x.dir e, "nextSibling"

    prevAll: (e) ->
      x.dir e, "previousSibling"

    nextUntil: (e, t, n) ->
      x.dir e, "nextSibling", n

    prevUntil: (e, t, n) ->
      x.dir e, "previousSibling", n

    siblings: (e) ->
      x.sibling (e.parentNode or {}).firstChild, e

    children: (e) ->
      x.sibling e.firstChild

    contents: (e) ->
      (if x.nodeName(e, "iframe") then e.contentDocument or e.contentWindow.document else x.merge([], e.childNodes))
  , (e, t) ->
    x.fn[e] = (n, r) ->
      i = x.map(this, t, n)
      "Until" isnt e.slice(-5) and (r = n)
      r and "string" is typeof r and (i = x.filter(r, i))
      @length > 1 and (ct[e] or (i = x.unique(i))
      lt.test(e) and (i = i.reverse())
      )
      @pushStack(i)
  )
  x.extend(
    filter: (e, t, n) ->
      r = t[0]
      n and (e = ":not(" + e + ")")
      (if 1 is t.length and 1 is r.nodeType then (if x.find.matchesSelector(r, e) then [r] else []) else x.find.matches(e, x.grep(t, (e) ->
        1 is e.nodeType
      )))

    dir: (e, n, r) ->
      i = []
      o = e[n]
      while o and 9 isnt o.nodeType and (r is t or 1 isnt o.nodeType or not x(o).is(r))
        1 is o.nodeType and i.push(o)
        o = o[n]
      i

    sibling: (e, t) ->
      n = []
      while e
        1 is e.nodeType and e isnt t and n.push(e)
        e = e.nextSibling
      n
  )

  ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
  gt = RegExp(" jQuery\\d+=\"(?:null|\\d+)\"", "g")
  mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
  yt = /^\s+/
  vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/g
  bt = /<([\w:]+)/
  xt = /<tbody/i
  wt = /<|&#?\w+;/
  Tt = /<(?:script|style|link)/i
  Ct = /^(?:checkbox|radio)$/i
  Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
  kt = /^$|\/(?:java|ecma)script/i
  Et = /^true\/(.*)/
  St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  At =
    option: [1, "<select multiple='multiple'>", "</select>"]
    legend: [1, "<fieldset>", "</fieldset>"]
    area: [1, "<map>", "</map>"]
    param: [1, "<object>", "</object>"]
    thead: [1, "<table>", "</table>"]
    tr: [2, "<table><tbody>", "</tbody></table>"]
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
    _default: (if x.support.htmlSerialize then [0, "", ""] else [1, "X<div>", "</div>"])

  jt = dt(a)
  Dt = jt.appendChild(a.createElement("div"))
  At.optgroup = At.option
  At.tbody = At.tfoot = At.colgroup = At.caption = At.thead
  At.th = At.td
  x.fn.extend(
    text: (e) ->
      x.access this, ((e) ->
        (if e is t then x.text(this) else @empty().append((this[0] and this[0].ownerDocument or a).createTextNode(e)))
      ), null, e, arguments_.length

    append: ->
      @domManip arguments_, (e) ->
        if 1 is @nodeType or 11 is @nodeType or 9 is @nodeType
          t = Lt(this, e)
          t.appendChild e


    prepend: ->
      @domManip arguments_, (e) ->
        if 1 is @nodeType or 11 is @nodeType or 9 is @nodeType
          t = Lt(this, e)
          t.insertBefore e, t.firstChild


    before: ->
      @domManip arguments_, (e) ->
        @parentNode and @parentNode.insertBefore(e, this)


    after: ->
      @domManip arguments_, (e) ->
        @parentNode and @parentNode.insertBefore(e, @nextSibling)


    remove: (e, t) ->
      n = undefined
      r = (if e then x.filter(e, this) else this)
      i = 0
      while null isnt (n = r[i])
        t or 1 isnt n.nodeType or x.cleanData(Ft(n))
        n.parentNode and (t and x.contains(n.ownerDocument, n) and _t(Ft(n, "script"))
        n.parentNode.removeChild(n)
        )
        i++
      this

    empty: ->
      e = undefined
      t = 0
      while null isnt (e = this[t])
        1 is e.nodeType and x.cleanData(Ft(e, not 1))
        e.removeChild e.firstChild  while e.firstChild
        e.options and x.nodeName(e, "select") and (e.options.length = 0)
        t++
      this

    clone: (e, t) ->
      e = (if null is e then not 1 else e)
      t = (if null is t then e else t)
      @map(->
        x.clone this, e, t
      )

    html: (e) ->
      x.access this, ((e) ->
        n = this[0] or {}
        r = 0
        i = @length
        return (if 1 is n.nodeType then n.innerHTML.replace(gt, "") else t)  if e is t
        unless "string" isnt typeof e or Tt.test(e) or not x.support.htmlSerialize and mt.test(e) or not x.support.leadingWhitespace and yt.test(e) or At[(bt.exec(e) or ["", ""])[1].toLowerCase()]
          e = e.replace(vt, "<$1></$2>")
          try
            while i > r
              n = this[r] or {}
              1 is n.nodeType and (x.cleanData(Ft(n, not 1))
              n.innerHTML = e
              )
              r++
            n = 0
        n and @empty().append(e)
      ), null, e, arguments_.length

    replaceWith: ->
      e = x.map(this, (e) ->
        [e.nextSibling, e.parentNode]
      )
      t = 0
      @domManip(arguments_, (n) ->
        r = e[t++]
        i = e[t++]
        i and (r and r.parentNode isnt i and (r = @nextSibling)
        x(this).remove()
        i.insertBefore(n, r)
        )
      , not 0)
      (if t then this else @remove())

    detach: (e) ->
      @remove e, not 0

    domManip: (e, t, n) ->
      e = d.apply([], e)
      r = undefined
      i = undefined
      o = undefined
      a = undefined
      s = undefined
      l = undefined
      u = 0
      c = @length
      p = this
      f = c - 1
      h = e[0]
      g = x.isFunction(h)
      if g or not (1 >= c or "string" isnt typeof h or x.support.checkClone) and Nt.test(h)
        return @each((r) ->
          i = p.eq(r)
          g and (e[0] = h.call(this, r, i.html()))
          i.domManip(e, t, n)
        )
      if c and (l = x.buildFragment(e, this[0].ownerDocument, not 1, not n and this)
      r = l.firstChild
      1 is l.childNodes.length and (l = r)
      r
      )
        a = x.map(Ft(l, "script"), Ht)
        o = a.length

        while c > u
          i = l
          u isnt f and (i = x.clone(i, not 0, not 0)
          o and x.merge(a, Ft(i, "script"))
          )
          t.call(this[u], i, u)
          u++
        if o
          s = a[a.length - 1].ownerDocument
          x.map(a, qt)
          u = 0

          while o > u
            i = a[u]
            kt.test(i.type or "") and not x._data(i, "globalEval") and x.contains(s, i) and ((if i.src then x._evalUrl(i.src) else x.globalEval((i.text or i.textContent or i.innerHTML or "").replace(St, ""))))
            u++
        l = r = null
      this
  )

  x.each
    appendTo: "append"
    prependTo: "prepend"
    insertBefore: "before"
    insertAfter: "after"
    replaceAll: "replaceWith"
  , (e, t) ->
    x.fn[e] = (e) ->
      n = undefined
      r = 0
      i = []
      o = x(e)
      a = o.length - 1
      while a >= r
        n = (if r is a then this else @clone(not 0))
        x(o[r])[t](n)
        h.apply(i, n.get())
        r++
      @pushStack i

  x.extend(
    clone: (e, t, n) ->
      r = undefined
      i = undefined
      o = undefined
      a = undefined
      s = undefined
      l = x.contains(e.ownerDocument, e)
      if (if x.support.html5Clone or x.isXMLDoc(e) or not mt.test("<" + e.nodeName + ">") then o = e.cloneNode(not 0) else (Dt.innerHTML = e.outerHTML
      Dt.removeChild(o = Dt.firstChild)
      ))
      not (x.support.noCloneEvent and x.support.noCloneChecked or 1 isnt e.nodeType and 11 isnt e.nodeType or x.isXMLDoc(e))
        r = Ft(o)
        s = Ft(e)
        a = 0

        while null isnt (i = s[a])
          r[a] and Ot(i, r[a])
          ++a
      if t
        if n
          s = s or Ft(e)
          r = r or Ft(o)
          a = 0

          while null isnt (i = s[a])
            Mt i, r[a]
            a++
        else
          Mt e, o
      r = Ft(o, "script")
      r.length > 0 and _t(r, not l and Ft(e, "script"))
      r = s = i = null
      o

    buildFragment: (e, t, n, r) ->
      i = undefined
      o = undefined
      a = undefined
      s = undefined
      l = undefined
      u = undefined
      c = undefined
      p = e.length
      f = dt(t)
      d = []
      h = 0
      while p > h
        if o = e[h]
        o or 0 is o
          if "object" is x.type(o)
            x.merge d, (if o.nodeType then [o] else o)
          else if wt.test(o)
            s = s or f.appendChild(t.createElement("div"))
            l = (bt.exec(o) or ["", ""])[1].toLowerCase()
            c = At[l] or At._default
            s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2]
            i = c[0]

            s = s.lastChild  while i--
            if not x.support.leadingWhitespace and yt.test(o) and d.push(t.createTextNode(yt.exec(o)[0]))
            not x.support.tbody
              o = (if "table" isnt l or xt.test(o) then (if "<table>" isnt c[1] or xt.test(o) then 0 else s) else s.firstChild)
              i = o and o.childNodes.length

              x.nodeName(u = o.childNodes[i], "tbody") and not u.childNodes.length and o.removeChild(u)  while i--
            x.merge(d, s.childNodes)
            s.textContent = ""

            s.removeChild s.firstChild  while s.firstChild
            s = f.lastChild
          else
            d.push t.createTextNode(o)
        h++
      s and f.removeChild(s)
      x.support.appendChecked or x.grep(Ft(d, "input"), Bt)
      h = 0

      while o = d[h++]
        if (not r or -1 is x.inArray(o, r)) and (a = x.contains(o.ownerDocument, o)
        s = Ft(f.appendChild(o), "script")
        a and _t(s)
        n
        )
          i = 0
          kt.test(o.type or "") and n.push(o)  while o = s[i++]
      s = null
      f

    cleanData: (e, t) ->
      n = undefined
      r = undefined
      o = undefined
      a = undefined
      s = 0
      l = x.expando
      u = x.cache
      c = x.support.deleteExpando
      f = x.event.special
      while null isnt (n = e[s])
        if (t or x.acceptData(n)) and (o = n[l]
        a = o and u[o]
        )
          if a.events
            for r of a.events
              (if f[r] then x.event.remove(n, r) else x.removeEvent(n, r, a.handle))
          u[o] and (delete u[o]

          (if c then delete n[l]
           else (if typeof n.removeAttribute isnt i then n.removeAttribute(l) else n[l] = null))
          p.push(o)
          )
        s++

    _evalUrl: (e) ->
      x.ajax
        url: e
        type: "GET"
        dataType: "script"
        async: not 1
        global: not 1
        throws: not 0

  )
  x.fn.extend(
    wrapAll: (e) ->
      if x.isFunction(e)
        return @each((t) ->
          x(this).wrapAll e.call(this, t)
        )
      if this[0]
        t = x(e, this[0].ownerDocument).eq(0).clone(not 0)
        this[0].parentNode and t.insertBefore(this[0])
        t.map(->
          e = this
          e = e.firstChild  while e.firstChild and 1 is e.firstChild.nodeType
          e
        ).append(this)
      this

    wrapInner: (e) ->
      (if x.isFunction(e) then @each((t) ->
        x(this).wrapInner e.call(this, t)
      ) else @each(->
        t = x(this)
        n = t.contents()
        (if n.length then n.wrapAll(e) else t.append(e))
      ))

    wrap: (e) ->
      t = x.isFunction(e)
      @each (n) ->
        x(this).wrapAll (if t then e.call(this, n) else e)


    unwrap: ->
      @parent().each(->
        x.nodeName(this, "body") or x(this).replaceWith(@childNodes)
      ).end()
  )

  Pt = undefined
  Rt = undefined
  Wt = undefined
  $t = /alpha\([^)]*\)/i
  It = /opacity\s*=\s*([^)]*)/
  zt = /^(top|right|bottom|left)$/
  Xt = /^(none|table(?!-c[ea]).+)/
  Ut = /^margin/
  Vt = RegExp("^(" + w + ")(.*)$", "i")
  Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i")
  Jt = RegExp("^([+-])=(" + w + ")", "i")
  Gt = BODY: "block"
  Qt =
    position: "absolute"
    visibility: "hidden"
    display: "block"

  Kt =
    letterSpacing: 0
    fontWeight: 400

  Zt = ["Top", "Right", "Bottom", "Left"]
  en = ["Webkit", "O", "Moz", "ms"]
  x.fn.extend(
    css: (e, n) ->
      x.access this, ((e, n, r) ->
        i = undefined
        o = undefined
        a = {}
        s = 0
        if x.isArray(n)
          o = Rt(e)
          i = n.length

          while i > s
            a[n[s]] = x.css(e, n[s], not 1, o)
            s++
          return a
        (if r isnt t then x.style(e, n, r) else x.css(e, n))
      ), e, n, arguments_.length > 1

    show: ->
      rn this, not 0

    hide: ->
      rn this

    toggle: (e) ->
      (if "boolean" is typeof e then (if e then @show() else @hide()) else @each(->
        (if nn(this) then x(this).show() else x(this).hide())
      ))
  )
  x.extend(
    cssHooks:
      opacity:
        get: (e, t) ->
          if t
            n = Wt(e, "opacity")
            (if "" is n then "1" else n)

    cssNumber:
      columnCount: not 0
      fillOpacity: not 0
      fontWeight: not 0
      lineHeight: not 0
      opacity: not 0
      order: not 0
      orphans: not 0
      widows: not 0
      zIndex: not 0
      zoom: not 0

    cssProps:
      float: (if x.support.cssFloat then "cssFloat" else "styleFloat")

    style: (e, n, r, i) ->
      if e and 3 isnt e.nodeType and 8 isnt e.nodeType and e.style
        o = undefined
        a = undefined
        s = undefined
        l = x.camelCase(n)
        u = e.style
        return (if s and "get" of s and (o = s.get(e, not 1, i)) isnt t then o else u[n])  if n = x.cssProps[l] or (x.cssProps[l] = tn(u, l))
        s = x.cssHooks[n] or x.cssHooks[l]
        r is t

        if a = typeof r
        "string" is a and (o = Jt.exec(r)) and (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n))
        a = "number"
        )
        not (null is r or "number" is a and isNaN(r) or ("number" isnt a or x.cssNumber[l] or (r += "px")
        x.support.clearCloneStyle or "" isnt r or 0 isnt n.indexOf("background") or (u[n] = "inherit")
        s and "set" of s and (r = s.set(e, r, i)) is t
        ))
          try
            u[n] = r

    css: (e, n, r, i) ->
      o = undefined
      a = undefined
      s = undefined
      l = x.camelCase(n)
      n = x.cssProps[l] or (x.cssProps[l] = tn(e.style, l))
      s = x.cssHooks[n] or x.cssHooks[l]
      s and "get" of s and (a = s.get(e, not 0, r))
      a is t and (a = Wt(e, n, i))
      "normal" is a and n of Kt and (a = Kt[n])
      (if "" is r or r then (o = parseFloat(a)
      (if r is not 0 or x.isNumeric(o) then o or 0 else a)
      ) else a)
  )
  (if e.getComputedStyle then (Rt = (t) ->
    e.getComputedStyle t, null

  Wt = (e, n, r) ->
    i = undefined
    o = undefined
    a = undefined
    s = r or Rt(e)
    l = (if s then s.getPropertyValue(n) or s[n] else t)
    u = e.style
    s and ("" isnt l or x.contains(e.ownerDocument, e) or (l = x.style(e, n))
    Yt.test(l) and Ut.test(n) and (i = u.width
    o = u.minWidth
    a = u.maxWidth
    u.minWidth = u.maxWidth = u.width = l
    l = s.width
    u.width = i
    u.minWidth = o
    u.maxWidth = a
    )
    )
    l

  ) else a.documentElement.currentStyle and (Rt = (e) ->
    e.currentStyle

  Wt = (e, n, r) ->
    i = undefined
    o = undefined
    a = undefined
    s = r or Rt(e)
    l = (if s then s[n] else t)
    u = e.style
    null is l and u and u[n] and (l = u[n])
    Yt.test(l) and not zt.test(n) and (i = u.left
    o = e.runtimeStyle
    a = o and o.left
    a and (o.left = e.currentStyle.left)
    u.left = (if "fontSize" is n then "1em" else l)
    l = u.pixelLeft + "px"
    u.left = i
    a and (o.left = a)
    )
    (if "" is l then "auto" else l)

  ))

  x.each(["height", "width"], (e, n) ->
    x.cssHooks[n] =
      get: (e, r, i) ->
        (if r then (if 0 is e.offsetWidth and Xt.test(x.css(e, "display")) then x.swap(e, Qt, ->
          sn e, n, i
        ) else sn(e, n, i)) else t)

      set: (e, t, r) ->
        i = r and Rt(e)
        on_ e, t, (if r then an(e, n, r, x.support.boxSizing and "border-box" is x.css(e, "boxSizing", not 1, i), i) else 0)
  )
  x.support.opacity or (x.cssHooks.opacity =
    get: (e, t) ->
      (if It.test(((if t and e.currentStyle then e.currentStyle.filter else e.style.filter)) or "") then .01 * parseFloat(RegExp.$1) + "" else (if t then "1" else ""))

    set: (e, t) ->
      n = e.style
      r = e.currentStyle
      i = (if x.isNumeric(t) then "alpha(opacity=" + 100 * t + ")" else "")
      o = r and r.filter or n.filter or ""
      n.zoom = 1
      (t >= 1 or "" is t) and "" is x.trim(o.replace($t, "")) and n.removeAttribute and (n.removeAttribute("filter")
      "" is t or r and not r.filter
      ) or (n.filter = (if $t.test(o) then o.replace($t, i) else o + " " + i))
  )
  x(->
    x.support.reliableMarginRight or (x.cssHooks.marginRight = get: (e, n) ->
      (if n then x.swap(e,
        display: "inline-block"
      , Wt, [e, "marginRight"]) else t)
    )
    not x.support.pixelPosition and x.fn.position and x.each(["top", "left"], (e, n) ->
      x.cssHooks[n] = get: (e, r) ->
        (if r then (r = Wt(e, n)
        (if Yt.test(r) then x(e).position()[n] + "px" else r)
        ) else t)
    )
  )
  x.expr and x.expr.filters and (x.expr.filters.hidden = (e) ->
    0 >= e.offsetWidth and 0 >= e.offsetHeight or not x.support.reliableHiddenOffsets and "none" is (e.style and e.style.display or x.css(e, "display"))

  x.expr.filters.visible = (e) ->
    not x.expr.filters.hidden(e)

  )
  x.each(
    margin: ""
    padding: ""
    border: "Width"
  , (e, t) ->
    x.cssHooks[e + t] = expand: (n) ->
      r = 0
      i = {}
      o = (if "string" is typeof n then n.split(" ") else [n])
      while 4 > r
        i[e + Zt[r] + t] = o[r] or o[r - 2] or o[0]
        r++
      i

    Ut.test(e) or (x.cssHooks[e + t].set = on_)
  )

  cn = /%20/g
  pn = /\[\]$/
  fn = /\r?\n/g
  dn = /^(?:submit|button|image|reset|file)$/i
  hn = /^(?:input|select|textarea|keygen)/i
  x.fn.extend(
    serialize: ->
      x.param @serializeArray()

    serializeArray: ->
      @map(->
        e = x.prop(this, "elements")
        (if e then x.makeArray(e) else this)
      ).filter(->
        e = @type
        @name and not x(this).is(":disabled") and hn.test(@nodeName) and not dn.test(e) and (@checked or not Ct.test(e))
      ).map((e, t) ->
        n = x(this).val()
        (if null is n then null else (if x.isArray(n) then x.map(n, (e) ->
          name: t.name
          value: e.replace(fn, "\r\n")
        ) else
          name: t.name
          value: n.replace(fn, "\r\n")
        ))
      ).get()
  )
  x.param = (e, n) ->
    r = undefined
    i = []
    o = (e, t) ->
      t = (if x.isFunction(t) then t() else (if null is t then "" else t))
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)

    if n is t and (n = x.ajaxSettings and x.ajaxSettings.traditional)
    x.isArray(e) or e.jquery and not x.isPlainObject(e)
      x.each e, ->
        o @name, @value

    else
      for r of e
        gn r, e[r], n, o
    i.join("&").replace cn, "+"


  x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (e, t) ->
    x.fn[t] = (e, n) ->
      (if arguments_.length > 0 then @on(t, null, e, n) else @trigger(t))
  )
  x.fn.extend(
    hover: (e, t) ->
      @mouseenter(e).mouseleave t or e

    bind: (e, t, n) ->
      @on e, null, t, n

    unbind: (e, t) ->
      @off e, null, t

    delegate: (e, t, n, r) ->
      @on t, e, n, r

    undelegate: (e, t, n) ->
      (if 1 is arguments_.length then @off(e, "**") else @off(t, e or "**", n))
  )

  mn = undefined
  yn = undefined
  vn = x.now()
  bn = /\?/
  xn = /#.*$/
  wn = /([?&])_=[^&]*/
  Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/g
  Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
  Nn = /^(?:GET|HEAD)$/
  kn = /^\/\//
  En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/
  Sn = x.fn.load
  An = {}
  jn = {}
  Dn = "*/".concat("*")
  try
    yn = o.href
  catch Ln
    yn = a.createElement("a")
    yn.href = ""
    yn = yn.href
  mn = En.exec(yn.toLowerCase()) or []
  x.fn.load = (e, n, r) ->
    return Sn.apply(this, arguments_)  if "string" isnt typeof e and Sn
    i = undefined
    o = undefined
    a = undefined
    s = this
    l = e.indexOf(" ")
    l >= 0 and (i = e.slice(l, e.length)
    e = e.slice(0, l)
    )
    (if x.isFunction(n) then (r = n
    n = t
    ) else n and "object" is typeof n and (a = "POST"))
    s.length > 0 and x.ajax(
      url: e
      type: a
      dataType: "html"
      data: n
    ).done((e) ->
      o = arguments_
      s.html((if i then x("<div>").append(x.parseHTML(e)).find(i) else e))
    ).complete(r and (e, t) ->
      s.each r, o or [e.responseText, t, e]
    )
    this

  x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (e, t) ->
    x.fn[t] = (e) ->
      @on t, e
  )
  x.extend(
    active: 0
    lastModified: {}
    etag: {}
    ajaxSettings:
      url: yn
      type: "GET"
      isLocal: Cn.test(mn[1])
      global: not 0
      processData: not 0
      async: not 0
      contentType: "application/x-www-form-urlencoded; charset=UTF-8"
      accepts:
        "*": Dn
        text: "text/plain"
        html: "text/html"
        xml: "application/xml, text/xml"
        json: "application/json, text/javascript"

      contents:
        xml: /xml/
        html: /html/
        json: /json/

      responseFields:
        xml: "responseXML"
        text: "responseText"
        json: "responseJSON"

      converters:
        "* text": String
        "text html": not 0
        "text json": x.parseJSON
        "text xml": x.parseXML

      flatOptions:
        url: not 0
        context: not 0

    ajaxSetup: (e, t) ->
      (if t then _n(_n(e, x.ajaxSettings), t) else _n(x.ajaxSettings, e))

    ajaxPrefilter: Hn(An)
    ajaxTransport: Hn(jn)
    ajax: (e, n) ->
      k = (e, n, r, i) ->
        c = undefined
        y = undefined
        v = undefined
        w = undefined
        T = undefined
        N = n
        2 isnt b and (b = 2
        s and clearTimeout(s)
        u = t
        a = i or ""
        C.readyState = (if e > 0 then 4 else 0)
        c = e >= 200 and 300 > e or 304 is e
        r and (w = Mn(p, C, r))
        w = On(p, w, C, c)
        (if c then (p.ifModified and (T = C.getResponseHeader("Last-Modified")
        T and (x.lastModified[o] = T)
        T = C.getResponseHeader("etag")
        T and (x.etag[o] = T)
        )
        (if 204 is e or "HEAD" is p.type then N = "nocontent" else (if 304 is e then N = "notmodified" else (N = w.state
        y = w.data
        v = w.error
        c = not v
        )))
        ) else (v = N
        (e or not N) and (N = "error"
        0 > e and (e = 0)
        )
        ))
        C.status = e
        C.statusText = (n or N) + ""
        (if c then h.resolveWith(f, [y, N, C]) else h.rejectWith(f, [C, N, v]))
        C.statusCode(m)
        m = t
        l and d.trigger((if c then "ajaxSuccess" else "ajaxError"), [C, p, (if c then y else v)])
        g.fireWith(f, [C, N])
        l and (d.trigger("ajaxComplete", [C, p])
        --x.active or x.event.trigger("ajaxStop")
        )
        )
      "object" is typeof e and (n = e
      e = t
      )
      n = n or {}

      r = undefined
      i = undefined
      o = undefined
      a = undefined
      s = undefined
      l = undefined
      u = undefined
      c = undefined
      p = x.ajaxSetup({}, n)
      f = p.context or p
      d = (if p.context and (f.nodeType or f.jquery) then x(f) else x.event)
      h = x.Deferred()
      g = x.Callbacks("once memory")
      m = p.statusCode or {}
      y = {}
      v = {}
      b = 0
      w = "canceled"
      C =
        readyState: 0
        getResponseHeader: (e) ->
          t = undefined
          if 2 is b
            unless c
              c = {}
              c[t[1].toLowerCase()] = t[2]  while t = Tn.exec(a)
            t = c[e.toLowerCase()]
          (if null is t then null else t)

        getAllResponseHeaders: ->
          (if 2 is b then a else null)

        setRequestHeader: (e, t) ->
          n = e.toLowerCase()
          b or (e = v[n] = v[n] or e
          y[e] = t
          )
          this

        overrideMimeType: (e) ->
          b or (p.mimeType = e)
          this

        statusCode: (e) ->
          t = undefined
          if e
            if 2 > b
              for t of e
                m[t] = [m[t], e[t]]
            else
              C.always e[C.status]
          this

        abort: (e) ->
          t = e or w
          u and u.abort(t)
          k(0, t)
          this

      return C  if h.promise(C).complete = g.add
      C.success = C.done
      C.error = C.fail
      p.url = ((e or p.url or yn) + "").replace(xn, "").replace(kn, mn[1] + "//")
      p.type = n.method or n.type or p.method or p.type
      p.dataTypes = x.trim(p.dataType or "*").toLowerCase().match(T) or [""]
      null is p.crossDomain and (r = En.exec(p.url.toLowerCase())
      p.crossDomain = not (not r or r[1] is mn[1] and r[2] is mn[2] and (r[3] or ((if "http:" is r[1] then "80" else "443"))) is (mn[3] or ((if "http:" is mn[1] then "80" else "443"))))
      )
      p.data and p.processData and "string" isnt typeof p.data and (p.data = x.param(p.data, p.traditional))
      qn(An, p, n, C)
      2 is b

      l = p.global
      l and 0 is x.active++ and x.event.trigger("ajaxStart")
      p.type = p.type.toUpperCase()
      p.hasContent = not Nn.test(p.type)
      o = p.url
      p.hasContent or (p.data and (o = p.url += ((if bn.test(o) then "&" else "?")) + p.data
      delete p.data

      )
      p.cache is not 1 and (p.url = (if wn.test(o) then o.replace(wn, "$1_=" + vn++) else o + ((if bn.test(o) then "&" else "?")) + "_=" + vn++))
      )
      p.ifModified and (x.lastModified[o] and C.setRequestHeader("If-Modified-Since", x.lastModified[o])
      x.etag[o] and C.setRequestHeader("If-None-Match", x.etag[o])
      )
      (p.data and p.hasContent and p.contentType isnt not 1 or n.contentType) and C.setRequestHeader("Content-Type", p.contentType)
      C.setRequestHeader("Accept", (if p.dataTypes[0] and p.accepts[p.dataTypes[0]] then p.accepts[p.dataTypes[0]] + ((if "*" isnt p.dataTypes[0] then ", " + Dn + "; q=0.01" else "")) else p.accepts["*"]))

      for i of p.headers
        C.setRequestHeader i, p.headers[i]
      return C.abort()  if p.beforeSend and (p.beforeSend.call(f, C, p) is not 1 or 2 is b)
      w = "abort"
      for i of
        success: 1
        error: 1
        complete: 1
        C[i] p[i]
      if u = qn(jn, p, n, C)
        C.readyState = 1
        l and d.trigger("ajaxSend", [C, p])
        p.async and p.timeout > 0 and (s = setTimeout(->
          C.abort "timeout"
        , p.timeout))

        try
          b = 1
          u.send(y, k)
        catch N
          throw N  unless 2 > b
          k -1, N
      else
        k -1, "No Transport"
      C

    getJSON: (e, t, n) ->
      x.get e, t, n, "json"

    getScript: (e, n) ->
      x.get e, t, n, "script"
  )
  x.each(["get", "post"], (e, n) ->
    x[n] = (e, r, i, o) ->
      x.isFunction(r) and (o = o or i
      i = r
      r = t
      )
      x.ajax(
        url: e
        type: n
        dataType: o
        data: r
        success: i
      )
  )

  x.ajaxSetup(
    accepts:
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"

    contents:
      script: /(?:java|ecma)script/

    converters:
      "text script": (e) ->
        x.globalEval(e)
        e
  )
  x.ajaxPrefilter("script", (e) ->
    e.cache is t and (e.cache = not 1)
    e.crossDomain and (e.type = "GET"
    e.global = not 1
    )
  )
  x.ajaxTransport("script", (e) ->
    if e.crossDomain
      n = undefined
      r = a.head or x("head")[0] or a.documentElement
      send: (t, i) ->
        n = a.createElement("script")
        n.async = not 0
        e.scriptCharset and (n.charset = e.scriptCharset)
        n.src = e.url
        n.onload = n.onreadystatechange = (e, t) ->
          (t or not n.readyState or /loaded|complete/.test(n.readyState)) and (n.onload = n.onreadystatechange = null
          n.parentNode and n.parentNode.removeChild(n)
          n = null
          t or i(200, "success")
          )

        r.insertBefore(n, r.firstChild)

      abort: ->
        n and n.onload(t, not 0)
  )

  Fn = []
  Bn = /(=)\?(?=&|$)|\?\?/
  x.ajaxSetup(
    jsonp: "callback"
    jsonpCallback: ->
      e = Fn.pop() or x.expando + "_" + vn++
      this[e] = not 0
      e
  )
  x.ajaxPrefilter("json jsonp", (n, r, i) ->
    o = undefined
    a = undefined
    s = undefined
    l = n.jsonp isnt not 1 and ((if Bn.test(n.url) then "url" else "string" is typeof n.data and not (n.contentType or "").indexOf("application/x-www-form-urlencoded") and Bn.test(n.data) and "data"))
    (if l or "jsonp" is n.dataTypes[0] then (o = n.jsonpCallback = (if x.isFunction(n.jsonpCallback) then n.jsonpCallback() else n.jsonpCallback)
    (if l then n[l] = n[l].replace(Bn, "$1" + o) else n.jsonp isnt not 1 and (n.url += ((if bn.test(n.url) then "&" else "?")) + n.jsonp + "=" + o))
    n.converters["script json"] = ->
      s or x.error(o + " was not called")
      s[0]

    n.dataTypes[0] = "json"
    a = e[o]
    e[o] = ->
      s = arguments_

    i.always(->
      e[o] = a
      n[o] and (n.jsonpCallback = r.jsonpCallback
      Fn.push(o)
      )
      s and x.isFunction(a) and a(s[0])
      s = a = t
    )
    "script"
    ) else t)
  )

  Pn = undefined
  Rn = undefined
  Wn = 0
  $n = e.ActiveXObject and ->
    e = undefined
    for e of Pn
      Pn[e] t, not 0

  x.ajaxSettings.xhr = (if e.ActiveXObject then ->
    not @isLocal and In() or zn()
   else In)
  Rn = x.ajaxSettings.xhr()
  x.support.cors = !!Rn and "withCredentials" of Rn
  Rn = x.support.ajax = !!Rn
  Rn and x.ajaxTransport((n) ->
    if not n.crossDomain or x.support.cors
      r = undefined
      send: (i, o) ->
        a = undefined
        s = undefined
        l = n.xhr()
        if (if n.username then l.open(n.type, n.url, n.async, n.username, n.password) else l.open(n.type, n.url, n.async))
        n.xhrFields
          for s of n.xhrFields
            l[s] = n.xhrFields[s]
        n.mimeType and l.overrideMimeType and l.overrideMimeType(n.mimeType)
        n.crossDomain or i["X-Requested-With"] or (i["X-Requested-With"] = "XMLHttpRequest")

        try
          for s of i
            l.setRequestHeader s, i[s]
        l.send(n.hasContent and n.data or null)
        r = (e, i) ->
          s = undefined
          u = undefined
          c = undefined
          p = undefined
          try
            if r and (i or 4 is l.readyState)
              unless r = t
              a and (l.onreadystatechange = x.noop
              $n and delete Pn[a]

              )
              i
                p = {}
                s = l.status
                u = l.getAllResponseHeaders()
                "string" is typeof l.responseText and (p.text = l.responseText)

                try
                  c = l.statusText
                catch f
                  c = ""
                (if s or not n.isLocal or n.crossDomain then 1223 is s and (s = 204) else s = (if p.text then 200 else 404))
          catch d
            i or o(-1, d)
          p and o(s, c, p, u)

        (if n.async then (if 4 is l.readyState then setTimeout(r) else (a = ++Wn
        $n and (Pn or (Pn = {}
        x(e).unload($n)
        )
        Pn[a] = r
        )
        l.onreadystatechange = r
        )) else r())

      abort: ->
        r and r(t, not 0)
  )

  Xn = undefined
  Un = undefined
  Vn = /^(?:toggle|show|hide)$/
  Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i")
  Jn = /queueHooks$/
  Gn = [nr]
  Qn = "*": [(e, t) ->
    n = @createTween(e, t)
    r = n.cur()
    i = Yn.exec(t)
    o = i and i[3] or ((if x.cssNumber[e] then "" else "px"))
    a = (x.cssNumber[e] or "px" isnt o and +r) and Yn.exec(x.css(n.elem, e))
    s = 1
    l = 20
    if a and a[3] isnt o
      o = o or a[3]
      i = i or []
      a = +r or 1

      loop
        s = s or ".5"
        a /= s
        x.style(n.elem, e, a + o)
        break unless s isnt (s = n.cur() / r) and 1 isnt s and --l
    i and (a = n.start = +a or +r or 0
    n.unit = o
    n.end = (if i[1] then a + (i[1] + 1) * i[2] else +i[2])
    )
    n
  ]
  x.Animation = x.extend(er,
    tweener: (e, t) ->
      (if x.isFunction(e) then (t = e
      e = ["*"]
      ) else e = e.split(" "))
      n = undefined
      r = 0
      i = e.length
      while i > r
        n = e[r]
        Qn[n] = Qn[n] or []
        Qn[n].unshift(t)
        r++

    prefilter: (e, t) ->
      (if t then Gn.unshift(e) else Gn.push(e))
  )
  x.Tween = rr
  rr:: =
    constructor: rr
    init: (e, t, n, r, i, o) ->
      @elem = e
      @prop = n
      @easing = i or "swing"
      @options = t
      @start = @now = @cur()
      @end = r
      @unit = o or ((if x.cssNumber[n] then "" else "px"))

    cur: ->
      e = rr.propHooks[@prop]
      (if e and e.get then e.get(this) else rr.propHooks._default.get(this))

    run: (e) ->
      t = undefined
      n = rr.propHooks[@prop]
      @pos = t = (if @options.duration then x.easing[@easing](e, @options.duration * e, 0, 1, @options.duration) else e)
      @now = (@end - @start) * t + @start
      @options.step and @options.step.call(@elem, @now, this)
      (if n and n.set then n.set(this) else rr.propHooks._default.set(this))
      this

  rr::init:: = rr::
  rr.propHooks = _default:
    get: (e) ->
      t = undefined
      (if null is e.elem[e.prop] or e.elem.style and null isnt e.elem.style[e.prop] then (t = x.css(e.elem, e.prop, "")
      (if t and "auto" isnt t then t else 0)
      ) else e.elem[e.prop])

    set: (e) ->
      (if x.fx.step[e.prop] then x.fx.step[e.prop](e) else (if e.elem.style and (null isnt e.elem.style[x.cssProps[e.prop]] or x.cssHooks[e.prop]) then x.style(e.elem, e.prop, e.now + e.unit) else e.elem[e.prop] = e.now))

  rr.propHooks.scrollTop = rr.propHooks.scrollLeft = set: (e) ->
    e.elem.nodeType and e.elem.parentNode and (e.elem[e.prop] = e.now)

  x.each(["toggle", "show", "hide"], (e, t) ->
    n = x.fn[t]
    x.fn[t] = (e, r, i) ->
      (if null is e or "boolean" is typeof e then n.apply(this, arguments_) else @animate(ir(t, not 0), e, r, i))
  )
  x.fn.extend(
    fadeTo: (e, t, n, r) ->
      @filter(nn).css("opacity", 0).show().end().animate
        opacity: t
      , e, n, r

    animate: (e, t, n, r) ->
      i = x.isEmptyObject(e)
      o = x.speed(t, n, r)
      a = ->
        t = er(this, x.extend({}, e), o)
        (i or x._data(this, "finish")) and t.stop(not 0)

      a.finish = a
      (if i or o.queue is not 1 then @each(a) else @queue(o.queue, a))

    stop: (e, n, r) ->
      i = (e) ->
        t = e.stop
        delete e.stop

        t(r)

      "string" isnt typeof e and (r = n
      n = e
      e = t
      )
      n and e isnt not 1 and @queue(e or "fx", [])
      @each(->
        t = not 0
        n = null isnt e and e + "queueHooks"
        o = x.timers
        a = x._data(this)
        if n
          a[n] and a[n].stop and i(a[n])
        else
          for n of a
            a[n] and a[n].stop and Jn.test(n) and i(a[n])
        n = o.length
        while n--
          o[n].elem isnt this or null isnt e and o[n].queue isnt e or (o[n].anim.stop(r)
          t = not 1
          o.splice(n, 1)
          )
        (t or not r) and x.dequeue(this, e)
      )

    finish: (e) ->
      e isnt not 1 and (e = e or "fx")
      @each(->
        t = undefined
        n = x._data(this)
        r = n[e + "queue"]
        i = n[e + "queueHooks"]
        o = x.timers
        a = (if r then r.length else 0)
        n.finish = not 0
        x.queue(this, e, [])
        i and i.stop and i.stop.call(this, not 0)
        t = o.length

        while t--
          o[t].elem is this and o[t].queue is e and (o[t].anim.stop(not 0)
          o.splice(t, 1)
          )
        t = 0
        while a > t
          r[t] and r[t].finish and r[t].finish.call(this)
          t++
        delete n.finish
      )
  )

  x.each(
    slideDown: ir("show")
    slideUp: ir("hide")
    slideToggle: ir("toggle")
    fadeIn:
      opacity: "show"

    fadeOut:
      opacity: "hide"

    fadeToggle:
      opacity: "toggle"
  , (e, t) ->
    x.fn[e] = (e, n, r) ->
      @animate t, e, n, r
  )
  x.speed = (e, t, n) ->
    r = (if e and "object" is typeof e then x.extend({}, e) else
      complete: n or not n and t or x.isFunction(e) and e
      duration: e
      easing: n and t or t and not x.isFunction(t) and t
    )
    r.duration = (if x.fx.off then 0 else (if "number" is typeof r.duration then r.duration else (if r.duration of x.fx.speeds then x.fx.speeds[r.duration] else x.fx.speeds._default)))
    (null is r.queue or r.queue is not 0) and (r.queue = "fx")
    r.old = r.complete
    r.complete = ->
      x.isFunction(r.old) and r.old.call(this)
      r.queue and x.dequeue(this, r.queue)

    r

  x.easing =
    linear: (e) ->
      e

    swing: (e) ->
      .5 - Math.cos(e * Math.PI) / 2

  x.timers = []
  x.fx = rr::init
  x.fx.tick = ->
    e = undefined
    n = x.timers
    r = 0
    Xn = x.now()
    while n.length > r
      e = n[r]
      e() or n[r] isnt e or n.splice(r--, 1)
      r++
    n.length or x.fx.stop()
    Xn = t

  x.fx.timer = (e) ->
    e() and x.timers.push(e) and x.fx.start()

  x.fx.interval = 13
  x.fx.start = ->
    Un or (Un = setInterval(x.fx.tick, x.fx.interval))

  x.fx.stop = ->
    clearInterval(Un)
    Un = null

  x.fx.speeds =
    slow: 600
    fast: 200
    _default: 400

  x.fx.step = {}
  x.expr and x.expr.filters and (x.expr.filters.animated = (e) ->
    x.grep(x.timers, (t) ->
      e is t.elem
    ).length
  )
  x.fn.offset = (e) ->
    if arguments_.length
      return (if e is t then this else @each((t) ->
        x.offset.setOffset this, e, t
      ))
    n = undefined
    r = undefined
    o =
      top: 0
      left: 0

    a = this[0]
    s = a and a.ownerDocument
    if s
      n = s.documentElement
      (if x.contains(n, a) then (typeof a.getBoundingClientRect isnt i and (o = a.getBoundingClientRect())
      r = or_(s)

        top: o.top + (r.pageYOffset or n.scrollTop) - (n.clientTop or 0)
        left: o.left + (r.pageXOffset or n.scrollLeft) - (n.clientLeft or 0)

      ) else o)

  x.offset = setOffset: (e, t, n) ->
    r = x.css(e, "position")
    "static" is r and (e.style.position = "relative")
    i = x(e)
    o = i.offset()
    a = x.css(e, "top")
    s = x.css(e, "left")
    l = ("absolute" is r or "fixed" is r) and x.inArray("auto", [a, s]) > -1
    u = {}
    c = {}
    p = undefined
    f = undefined
    (if l then (c = i.position()
    p = c.top
    f = c.left
    ) else (p = parseFloat(a) or 0
    f = parseFloat(s) or 0
    ))
    x.isFunction(t) and (t = t.call(e, n, o))
    null isnt t.top and (u.top = t.top - o.top + p)
    null isnt t.left and (u.left = t.left - o.left + f)
    (if "using" of t then t.using.call(e, u) else i.css(u))

  x.fn.extend(
    position: ->
      if this[0]
        e = undefined
        t = undefined
        n =
          top: 0
          left: 0

        r = this[0]
        (if "fixed" is x.css(r, "position") then t = r.getBoundingClientRect() else (e = @offsetParent()
        t = @offset()
        x.nodeName(e[0], "html") or (n = e.offset())
        n.top += x.css(e[0], "borderTopWidth", not 0)
        n.left += x.css(e[0], "borderLeftWidth", not 0)
        ))

          top: t.top - n.top - x.css(r, "marginTop", not 0)
          left: t.left - n.left - x.css(r, "marginLeft", not 0)

    offsetParent: ->
      @map ->
        e = @offsetParent or s
        e = e.offsetParent  while e and not x.nodeName(e, "html") and "static" is x.css(e, "position")
        e or s

  )
  x.each(
    scrollLeft: "pageXOffset"
    scrollTop: "pageYOffset"
  , (e, n) ->
    r = /Y/.test(n)
    x.fn[e] = (i) ->
      x.access this, ((e, i, o) ->
        a = or_(e)
        (if o is t then (if a then (if n of a then a[n] else a.document.documentElement[i]) else e[i]) else ((if a then a.scrollTo((if r then x(a).scrollLeft() else o), (if r then o else x(a).scrollTop())) else e[i] = o)
        t
        ))
      ), e, i, arguments_.length, null
  )

  x.each(
    Height: "height"
    Width: "width"
  , (e, n) ->
    x.each
      padding: "inner" + e
      content: n
      "": "outer" + e
    , (r, i) ->
      x.fn[i] = (i, o) ->
        a = arguments_.length and (r or "boolean" isnt typeof i)
        s = r or ((if i is not 0 or o is not 0 then "margin" else "border"))
        x.access this, ((n, r, i) ->
          o = undefined
          (if x.isWindow(n) then n.document.documentElement["client" + e] else (if 9 is n.nodeType then (o = n.documentElement
          Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])
          ) else (if i is t then x.css(n, r, s) else x.style(n, r, i, s))))
        ), n, (if a then i else t), a, null

  )
  x.fn.size = ->
    @length

  x.fn.andSelf = x.fn.addBack
  (if "object" is typeof module and module and "object" is typeof module.exports then module.exports = x else (e.jQuery = e.$ = x
  "function" is typeof define and define.amd and define("jquery", [], ->
    x
  )
  ))
) window

### --------------------------------------------
     Begin app.coffee
-------------------------------------------- ###

# Avoid `console` errors in browsers that lack a console.
(->
  method = undefined
  noop = ->

  methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"]
  length = methods.length
  console = (window.console = window.console or {})
  while length--
    method = methods[length]

    # Only stub undefined methods.
    console[method] = noop  unless console[method]
)()
