var cf_tracker = cf_tracker || [],
    funnel_stat = 0;
if (void 0 === ecookie) var ecookie = !1;
cf_tracker.push = function(e) {
    void 0 === funnel_state && (funnel_stat = 0), action = e[0], data1 = e[1], data2 = e[2];
    var t = null;
    if (push = !0, "record" == action && (t = action), "set" == action && (t = action), "identify" == action && (t = action), "alias" == action && (t = action), t) {
        var n = window.location,
            r = document.referrer,
            a = serverUrl + "?_unique=" + Math.random();
        return a += "&_uniqueVisitorID=" + cfUniqueVisitorID, a += "&_action=" + t, a += "&_data1=" + formatObject(data1), a += "&_data2=" + formatObject(data2), a += "&_key=" + cf_key, a += "&_page_key=" + page_key, a += "&_fid=" + fid, a += "&_fspos=" + fspos, a += "&_fvrs=" + fvrs, a += "&_funnel_stat=" + funnel_stat, a += "&_location=" + n, a += "&_referrer=" + r, url_params.affiliate_id && (a += "&affiliate_id=" + url_params.affiliate_id), url_params.aff_sub && (a += "&aff_sub=" + url_params.aff_sub), url_params.aff_sub2 && (a += "&aff_sub2=" + url_params.aff_sub2), "identify" == action && (a += "&email=" + formatObject(data1)), cfUniqueVisitorID = readCookie("cf_uvid"), (sender = document.createElement("script")).src = a, replied = !1, sender.onreadystatechange = function() {
            replied || ("complete" == this.readyState || "loaded" == this.readyState) && answered(instance, attached)
        }, null != document.body ? document.body.appendChild(sender) : postpone(), !0
    }
    return !1
}, Array.indexOf || (Array.prototype.indexOf = function(e) {
    for (var t = 0; t < this.length; t++)
        if (this[t] == e) return t;
    return -1
});
var loadScript = function(e, t) {
    var n = document.createElement("script");
    n.type = "text/javascript", n.setAttribute("async", "true"), n.setAttribute("src", e), n.readyState ? n.onreadystatechange = function() {
        /loaded|complete/.test(n.readyState) && t()
    } : n.addEventListener("load", t, !1), document.documentElement.firstChild.appendChild(n)
};

function jQueryCheck() {
    return window.jQuery && jQuery.fn && /^1\.[3-9]/.test(jQuery.fn.jquery)
}

function createCookie(e, t, n, r) {
    if (n) {
        var a = new Date;
        a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
        var o = "; expires=" + a.toGMTString()
    } else o = "";
    document.cookie = e + "=" + t + o + "; path=/", r && (1 != jQueryCheck && loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js", (function() {})), "undefined" == typeof swfobject && loadScript("swfobject-2.2.min.js", (function() {})), loadScript("evercookie.js", (function() {
        (new evercookie).set(e, t)
    })))
}

function readCookie(e, t) {
    t && (1 != jQueryCheck && loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js", (function() {})), "undefined" == typeof swfobject && loadScript("swfobject-2.2.min.js", (function() {})), loadScript("evercookie.js", (function() {
        (new evercookie).get(e, (function(e) {
            alert("Cookie value is " + e)
        }))
    })));
    for (var n = e + "=", r = document.cookie.split(";"), a = 0; a < r.length; a++) {
        for (var o = r[a];
            " " == o.charAt(0);) o = o.substring(1, o.length);
        if (0 == o.indexOf(n)) return o.substring(n.length, o.length)
    }
    return null
}

function formatObject(e) {
    if ("object" == typeof e) {
        var t = "{";
        for (property in e) t += '"' + property + '":"' + e[property] + '",';
        return t.substring(0, t.length - 1) + "}"
    }
    return e
}

function getFormData(formElement) {
    var params = "",
        jsonObject = {};
    for (i = 0; i < formElement.elements.length; i++) {
        var current = formElement.elements[i];
        sub_name = current.name.replace("_", ""), sub_name = sub_name.replace("\\", ""), sub_name = sub_name.replace("-", ""), null == sub_name.match(/utf|pass|billing|creditcard|cardnum|^cc|ccnum|exp|seccode|securitycode|securitynum|cvc|cvv|ssn|socialsec|socsec|csc/i) && "hidden" != current.type.toLowerCase() && "password" != current.type.toLowerCase() && "input" == current.nodeName.toLowerCase() && "submit" != current.type.toLowerCase() && "password" != current.type.toLowerCase() && 1 != filteredMatch(current) && ("radio" == current.type.toLowerCase() || "checkbox" == current.type.toLowerCase() ? (current.checked && (params += current.name + "=" + current.value + "&"), current.checked && eval("jsonObject['" + current.name + "']=\"" + current.value + '";')) : (params += current.name + "=" + filtered_string(current.value) + "&", "email" == current.type && (params += "email_type=" + filtered_string(current.value) + "&"), eval("jsonObject['" + current.name + "']=\"" + filtered_string(current.value) + '";')))
    }
    return formatObject(jsonObject)
}

function filteredMatch(e) {
    return ("enabled" != e.className || null != e.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i)) && ("submit" == e.type.toLowerCase() || "password" == e.type.toLowerCase() || "disabled" == e.className || null != e.className.match(/acskip/i) || null != e.name.match(/cc/i) || null != e.name.match(/credit/))
}

function changeText(e, t) {
    elem = document.getElementById(e), elem.innerHTML = t
}
var replied = !1,
    sender = null,
    cfUniqueVisitorID;

function cfSetUniqueVisitorID(e) {
    null != e && "" != e && createCookie("cf_uvid", cfUniqueVisitorID = e, 100)
}

function SendData(e, t) {
    if (-1 != (t = (t = String(t)).substring(t.indexOf("{") + 1, t.length - 1)).indexOf("return")) {
        var n = t.indexOf("return"),
            r = n + 2 + t.substring(n + 1).indexOf(";");
        t = t.substring(0, n) + t.substring(r, t.length)
    }
    cfUniqueVisitorID = readCookie("cf_uvid", ecookie);
    var a = (e = null == document.getElementById(e) ? e : document.getElementById(e)).id,
        o = e.name,
        i = e.href,
        c = e == window ? "WINDOW" : e.nodeName,
        s = window.location,
        u = document.referrer,
        f = serverUrl + "?_unique=" + Math.random();
    if ("FORM" == c)
        if (void 0 !== e.attributes.name) o = e.attributes.name.nodeValue;
        else o = "Unnamed";
    root_url = f, f = "&_uniqueVisitorID=" + cfUniqueVisitorID, a && (f += "&_id=" + a), o && (f += "&_name=" + o), c && (f += "&_type=" + c), i && (f += "&_href=" + i), s && (f += "&_location=" + String(escape(s)).substring(1)), u && "WINDOW" == c && (f += "&_referrer=" + String(escape(u)).substring(1)), "WINDOW" == c && (f += "&_title=" + String(encodeURIComponent(document.title))), navigator.cookieEnabled || (f += "&_cookiesDisabled=1"), null != e.nodeName && "form" == e.nodeName.toLowerCase() && (f += "&_formData=" + escape(getFormData(e))), f += "&_key=" + cf_key, f += "&_page_key=" + page_key, f += "&_fid=" + fid, f += "&_fspos=" + fspos, f += "&_fvrs=" + fvrs, f += "&_funnel_stat=" + funnel_stat, f += "&_location=" + s, f += "&_referrer=" + u, url_params.affiliate_id && (f += "&affiliate_id=" + url_params.affiliate_id), url_params.aff_sub && (f += "&aff_sub=" + url_params.aff_sub), url_params.aff_sub2 && (f += "&aff_sub2=" + url_params.aff_sub2), replied = !1;
    var d = get_XmlHttp();
    d.onreadystatechange = function() {
        checkresponse(e, t, d, !0)
    }, d.open("GET", root_url + f, !0), d.send(null), wait(e)
}

function wait(e) {
    replied ? replied = !1 : (setTimeout(wait, 100), sleep(100))
}

function sleep(e) {
    for (var t = (new Date).getTime(), n = 0; n < 1e7 && !((new Date).getTime() - t > e); n++);
}

function checkresponse(e, t, n, r) {
    now = !1, timeout = 0, (e.href || e.action) && (now = !0, timeout = 500), setTimeout((function() {
        replied || (4 == n.readyState || 1 == now && n.readyState > 0 ? answered(e, t, n) : r && setTimeout((function() {
            checkresponse(e, t, n)
        }), 500))
    }), timeout)
}

function answered(instance, attached, request) {
    replied = !0, "undefine" != attached && "nul" != attached && void 0 !== attached && attached && eval(attached), "undefine" != request && "nul" != request && void 0 !== request && request && eval(request.responseText), instance.href ? window.location = instance.href : instance.action && instance.push
}

function postpone() {
    null != document.body ? document.body.appendChild(sender) : setTimeout("postpone()", 500)
}
var formSubmitFunctions = {};

function formAttach() {
    var forms = document.getElementsByTagName("form"),
        counter;
    for (counter = 0; counter < forms.length; counter++)
        if ("acskip" != forms[counter].className && forms[counter].action != window.location && -1 == forms[counter].action.indexOf("clickfunnels.com") && -1 == forms[counter].action.indexOf("/members")) {
            forms[counter].id || (forms[counter].id = "acform" + counter), f = document.getElementById(forms[counter].id), eval('formSubmitFunctions["' + forms[counter].id + '"] = function(){SendData("' + forms[counter].id + '", ' + forms[counter].onsubmit + ");return false;};"), addEvent(forms[counter], "submit", (function() {
                if (void 0 !== forms[counter]) return console.log("sending data - counter: " + counter + " - forms: " + document.getElementsByTagName("form") + " - id: " + document.getElementsByTagName("form")[counter].id), SendData(forms[counter].id, forms[counter].onsubmit), console.log("sent data"), !0
            }));
            for (var i = 0; i < forms[counter].elements.length; i++) "submit" == forms[counter].elements[i].type && addEvent(forms[counter].elements[i], "click", (function() {
                this.form.submited = this.value
            }))
        }
}

function addEvent(e, t, n) {
    return e.addEventListener ? (e.addEventListener(t, n, !1), !0) : e.attachEvent ? e.attachEvent("on" + t, n) : void(e.onclick = function() {
        if (null != e.target) var t = e.target;
        else t = e.srcElement;
        SendData(t)
    })
}

function filtered_string(e) {
    return regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$./, e.replace(regex, "FILTERED_CC")
}
var url_params = {};
if (location.search)
    for (var parts = location.search.substring(1).split("&"), i = 0; i < parts.length; i++) {
        var nv = parts[i].split("=");
        nv[0] && (url_params[nv[0]] = nv[1] || !0)
    }

function cf_load() {
    formAttach(), null != url_params.cf_uvid && cfSetUniqueVisitorID(url_params.cf_uvid), "true" == readCookie(page_key) || readCookie(fid.toString() + "_viewed_" + fspos.toString()) == fvrs.toString() || "undefined" != typeof fid && (readCookie(fid.toString() + "_viewed_" + (fspos - 1).toString()) == fvrs.toString() && null != readCookie(fid.toString() + "_viewed_1") && readCookie(fid.toString() + "_viewed_1").toString() == fvrs.toString() && (funnel_stat = 1), "1" == fspos.toString() && (funnel_stat = 1), SendData(this))
}

function get_XmlHttp() {
    var e = null;
    return window.XMLHttpRequest ? e = new XMLHttpRequest : window.ActiveXObject && (e = new ActiveXObject("Microsoft.XMLHTTP")), e
}
window.attachEvent ? window.attachEvent("onload", cf_load) : window.addEventListener("load", cf_load, !1);
for (var i = 0; i < cf_tracker.length; i++) cf_tracker.push(cf_tracker[i]);