/* Offline-safe artwork: each illustration is generated as an inline SVG data URI. */
window.portfolioAsset = function (kind, label) {
  const esc = String(label || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
  const icon = {
    mail:'<path d="M8 10.5 2.2 5.8V4.5h11.6v1.3L8 10.5Z"/><path d="M2.2 5.8v6.7h11.6V5.8M2.3 12.3l3.9-3.5m5.6 0 3.9 3.5"/>',
    phone:'<path d="M5.1 2.5 3.4 3.3c-.6.3-.8 1-.5 1.6 1.3 3.3 3.9 5.9 7.2 7.2.6.2 1.3 0 1.6-.5l.8-1.7-2.3-1.5-1 1c-1.5-.7-2.7-1.9-3.4-3.4l1-1-1.7-2.3Z"/>',
    pin:'<path d="M8 13.7s4.3-4.2 4.3-7.4A4.3 4.3 0 1 0 3.7 6.3c0 3.2 4.3 7.4 4.3 7.4Z"/><circle cx="8" cy="6.3" r="1.5"/>',
    linkedin:'<path d="M3 6.2v6.6M3 3.5v.1M6.3 12.8V8.9c0-1.8 2.6-2 2.6 0v3.9M6.3 8.2V6.2"/><path d="M11.3 8.5c.3-1.6 2.7-2 2.7.4v3.9"/>',
    code:'<path d="m6.1 4.2-3.2 3.8 3.2 3.8M9.9 4.2l3.2 3.8-3.2 3.8M9 2.8 7 13.2"/>',
    responsive:'<rect x="2.2" y="3" width="8.6" height="6.8" rx=".8"/><rect x="11.4" y="5.5" width="2.5" height="6.3" rx=".5"/><path d="M5.5 12.4h3"/>',
    html:'<path d="m3 2.5 1 11 4 1.2 4-1.2 1-11H3Z"/><path d="M5.2 5.2h5.6l-.2 2H6.1m.2 2.2h4l-.3 2-2 .6-2-.6"/>',
    js:'<rect x="2.1" y="2.1" width="11.8" height="11.8" rx="1"/><path d="M8.8 11.4c.5.7 1.8.7 2.1-.1.4-1-2.5-1-2-2.5.3-.9 1.7-1 2.3-.3M6.7 9v2.2c0 1.1-1.7 1.2-2 .3"/>',
    react:'<ellipse cx="8" cy="8" rx="6" ry="2.4"/><ellipse cx="8" cy="8" rx="6" ry="2.4" transform="rotate(60 8 8)"/><ellipse cx="8" cy="8" rx="6" ry="2.4" transform="rotate(120 8 8)"/><circle cx="8" cy="8" r=".9" fill="currentColor"/>',
    git:'<path d="M8 1.8 14.2 8 8 14.2 1.8 8 8 1.8Z"/><circle cx="8" cy="5.3" r=".8" fill="currentColor"/><circle cx="5.3" cy="8" r=".8" fill="currentColor"/><circle cx="8" cy="10.7" r=".8" fill="currentColor"/><path d="M8 6.1V8H6.1M8 8v1.9"/>',
    puzzle:'<path d="M5.6 3.1h2.1c-.2.9.3 1.6 1.2 1.6s1.4-.7 1.2-1.6h2.1v3c-.8-.2-1.5.3-1.5 1.2s.7 1.4 1.5 1.2v3H9.3c.2-.8-.3-1.5-1.2-1.5s-1.4.7-1.2 1.5h-3V9.4c.8.2 1.5-.3 1.5-1.2S4.7 6.8 3.9 7V3.1h1.7Z"/>',
    graduation:'<path d="m1.7 6.1 6.3-3.2 6.3 3.2L8 9.3 1.7 6.1Z"/><path d="M4.2 7.4v3.1c2.2 1.6 5.4 1.6 7.6 0V7.4M14.3 6.1v4"/>',
    book:'<path d="M2.5 3.2c1.8-.7 3.7-.4 5.5.7v8.5c-1.8-1.1-3.7-1.4-5.5-.7V3.2ZM13.5 3.2c-1.8-.7-3.7-.4-5.5.7v8.5c1.8-1.1 3.7-1.4 5.5-.7V3.2Z"/><path d="M5 5.5h1.5m2.5 0h1.5M5 7.5h1.5m2.5 0h1.5"/>',
    wallet:'<path d="M2.4 4.3h9.8c.8 0 1.4.6 1.4 1.4v5.7c0 .8-.6 1.4-1.4 1.4H3.8c-.8 0-1.4-.6-1.4-1.4V3.7c0-.7.6-1.2 1.3-1.2h8.5"/><path d="M10.4 8h3.2v2h-3.2a1 1 0 1 1 0-2Z"/>',
    devices:'<rect x="2" y="3" width="9.5" height="7.5" rx=".8"/><path d="M5.3 13h3M13 5.8h1v7h-3v-1.3"/>',
    chat:'<path d="M2.2 3.3h11.6v7.5H7l-3.2 2.4v-2.4H2.2V3.3Z"/><path d="M5 6.8h6M5 8.6h4"/>',
    target:'<circle cx="8" cy="8" r="5.6"/><circle cx="8" cy="8" r="2.5"/><path d="m10 6 3.4-3.4M10.7 5.3h2.7V8"/>',
    clock:'<circle cx="8" cy="8" r="5.7"/><path d="M8 4.5V8l2.5 1.5"/>'
  }[kind] || '<circle cx="8" cy="8" r="5.5"/>';
  const photo = kind === 'hero' ? '<rect width="800" height="620" fill="url(#g)"/><circle cx="620" cy="130" r="170" fill="#ec4899" opacity=".24"/><path d="M115 500h565l-46-208H161l-46 208Z" fill="#10182c"/><rect x="190" y="322" width="408" height="132" rx="10" fill="#18345a"/><rect x="208" y="340" width="372" height="96" rx="5" fill="#071326"/><path d="M228 365h118m-118 19h210m-210 19h160" stroke="#39b8fd" stroke-width="10" opacity=".8"/><circle cx="167" cy="160" r="72" fill="#ffd2bc"/><path d="M100 238c14-68 115-68 132 0v84H100v-84Z" fill="#7c3aed"/><path d="M95 150c0-76 144-76 144 0-27-30-112-31-144 0Z" fill="#18243d"/>' : kind === 'project' ? '<rect width="800" height="460" fill="url(#g)"/><rect x="90" y="54" width="620" height="350" rx="18" fill="#101a35"/><rect x="111" y="78" width="578" height="42" rx="9" fill="#243154"/><circle cx="137" cy="99" r="7" fill="#ec4899"/><circle cx="160" cy="99" r="7" fill="#f59e0b"/><circle cx="183" cy="99" r="7" fill="#39b8fd"/><rect x="136" y="148" width="250" height="30" rx="10" fill="#a78bfa"/><rect x="136" y="197" width="390" height="14" rx="7" fill="#dbeafe" opacity=".8"/><rect x="136" y="226" width="302" height="14" rx="7" fill="#dbeafe" opacity=".5"/><rect x="136" y="275" width="118" height="42" rx="12" fill="#ec4899"/><rect x="495" y="156" width="145" height="166" rx="18" fill="#39b8fd" opacity=".85"/>' : kind === 'workspace' ? '<rect width="600" height="480" fill="url(#g)"/><rect y="305" width="600" height="175" fill="#44276e"/><rect x="115" y="175" width="310" height="170" rx="12" fill="#121b35"/><rect x="135" y="195" width="270" height="125" rx="5" fill="#11466b"/><path d="M160 222h132m-132 22h191m-191 22h111" stroke="#5eead4" stroke-width="10"/><path d="M70 346h440" stroke="#f3d5a8" stroke-width="22"/><circle cx="482" cy="140" r="45" fill="#ffd7b5"/>' : '<rect width="600" height="480" fill="url(#g)"/><rect x="75" y="55" width="450" height="365" rx="20" fill="#111a32"/><rect x="100" y="85" width="400" height="305" rx="10" fill="#0a263d"/><path d="M128 130h166m-166 32h290m-290 32h210m-210 64 65-40 51 34 78-83 100 90" stroke="#39b8fd" stroke-width="12" fill="none"/><circle cx="405" cy="150" r="28" fill="#ec4899"/>';
  const svg = kind === 'hero' || kind === 'project' || kind === 'workspace' || kind === 'codephoto' ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${kind === 'hero' ? '800 620' : kind === 'project' ? '800 460' : '600 480'}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7c3aed"/><stop offset=".55" stop-color="#006591"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs>${photo}</svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="#7c3aed" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"><title>${esc}</title>${icon}</svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
};
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[data-asset]').forEach(img => {
    img.src = window.portfolioAsset(img.dataset.asset, img.alt);
  });
});

// Animated favicon: rotating gradient "VM" monogram with a pulsing accent dot
  (function () {
    var link = document.getElementById("favicon");
    if (!link) return;
    var size = 64;
    var canvas = document.createElement("canvas");
    canvas.width = size; canvas.height = size;
    var ctx = canvas.getContext("2d");
    var start = Date.now();
    function draw() {
      var t = (Date.now() - start) / 1000;
      ctx.clearRect(0, 0, size, size);
      var angle = t * 0.6;
      var cx = size / 2, cy = size / 2, r = size * 0.75;
      var x0 = cx + Math.cos(angle) * r, y0 = cy + Math.sin(angle) * r;
      var x1 = cx - Math.cos(angle) * r, y1 = cy - Math.sin(angle) * r;
      var grad = ctx.createLinearGradient(x0, y0, x1, y1);
      grad.addColorStop(0, "#7c3aed");
      grad.addColorStop(0.5, "#ec4899");
      grad.addColorStop(1, "#06b6d4");
      // rounded-square badge
      var rr = 16;
      ctx.beginPath();
      ctx.moveTo(rr, 0);
      ctx.arcTo(size, 0, size, size, rr);
      ctx.arcTo(size, size, 0, size, rr);
      ctx.arcTo(0, size, 0, 0, rr);
      ctx.arcTo(0, 0, size, 0, rr);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      // monogram
      ctx.fillStyle = "#ffffff";
      ctx.font = "800 30px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("VM", size / 2 - 2, size / 2 + 1);
      // pulsing accent dot (echoes the "VM." logo)
      var pulse = 0.55 + 0.45 * Math.sin(t * 3);
      ctx.beginPath();
      ctx.arc(size - 12, size - 12, 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + pulse + ")";
      ctx.fill();
      link.href = canvas.toDataURL("image/png");
      requestAnimationFrame(draw);
    }
    draw();
  })();

  // Playful tab title swap when the visitor looks away
  (function () {
    var originalTitle = document.title;
    var awayMessages = ["👋 Come back soon!", "Still building cool things...", "Miss you already 👀"];
    var msg = awayMessages[Math.floor(Math.random() * awayMessages.length)];
    document.addEventListener("visibilitychange", function () {
      document.title = document.hidden ? msg : originalTitle;
    });
  })();

  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 8) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // Mouse-follow spotlight glow in the hero
  var heroSection = document.getElementById("heroSection");
  var heroSpotlight = document.getElementById("heroSpotlight");
  if (heroSection && heroSpotlight && window.matchMedia("(pointer:fine)").matches) {
    heroSection.addEventListener("mousemove", function (e) {
      var rect = heroSection.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      heroSpotlight.style.setProperty("--mx", x + "%");
      heroSpotlight.style.setProperty("--my", y + "%");
    });
  }

  // Floating gradient particles
  function spawnParticles(containerId, count) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var colors = ["#7c3aed", "#ec4899", "#06b6d4", "#f59e0b"];
    for (var i = 0; i < count; i++) {
      var dot = document.createElement("span");
      var size = 3 + Math.random() * 5;
      dot.style.width = size + "px";
      dot.style.height = size + "px";
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = 20 + Math.random() * 70 + "%";
      dot.style.color = colors[i % colors.length];
      dot.style.background = colors[i % colors.length];
      dot.style.animationDuration = (8 + Math.random() * 10) + "s";
      dot.style.animationDelay = (Math.random() * 8) + "s";
      container.appendChild(dot);
    }
  }
  spawnParticles("heroParticles", 22);
  spawnParticles("toolkitParticles", 18);

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  var SCRIPT_URL = "https://script.google.com/macros/s/AKfycby099f5FmoeHSO7bAscWKtj_pxXxt7Ocen6yzNBU8qB2Cs4yqF9dr5ehrDpzvG2R3oJ/exec";

  var form = document.getElementById("inquiryForm");
  var submitBtn = document.getElementById("submitBtn");
  var statusEl = document.getElementById("formStatus");

  function showSuccess() {
    statusEl.textContent = "Thanks! Your inquiry has been sent successfully.";
    statusEl.className = "form-status success";
    submitBtn.disabled = false;
    submitBtn.removeAttribute("aria-busy");
    form.reset();
  }

  function showError() {
    statusEl.textContent = "Something went wrong. Please try again.";
    statusEl.className = "form-status error";
    submitBtn.disabled = false;
    submitBtn.removeAttribute("aria-busy");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      statusEl.textContent = "Please complete the required fields with a valid email address.";
      statusEl.className = "form-status error";
      return;
    }
    submitBtn.disabled = true;
    submitBtn.setAttribute("aria-busy", "true");
    statusEl.className = "form-status";
    statusEl.textContent = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var projectType = document.getElementById("projectType").value;
    var details = document.getElementById("details").value;

    var url = SCRIPT_URL + "?" + new URLSearchParams({
      name: name,
      email: email,
      phone: phone,
      projectType: projectType,
      details: details
    });

    fetch(url, { method: "GET", mode: "no-cors" })
      .then(function () { showSuccess(); })
      .catch(function () { showError(); });
  });

  // Navigation and progressive enhancement layer.
  (function () {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.getElementById("primary-navigation");
    var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']")) : [];

    function closeMenu() {
      if (!toggle || !nav) return;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      nav.classList.remove("is-open");
    }

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
        nav.classList.toggle("is-open", !isOpen);
      });
      navLinks.forEach(function (link) { link.addEventListener("click", closeMenu); });
      document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
    }

    var sections = navLinks.map(function (link) { return document.querySelector(link.getAttribute("href")); }).filter(Boolean);
    if ("IntersectionObserver" in window && sections.length) {
      var navObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            var active = link.getAttribute("href") === "#" + entry.target.id;
            link.toggleAttribute("aria-current", active);
          });
        });
      }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
      sections.forEach(function (section) { navObserver.observe(section); });
    }

    document.querySelectorAll(".faq-item").forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        document.querySelectorAll(".faq-item[open]").forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });

    var project = document.querySelector(".bento-main");
    if (project) {
      project.tabIndex = 0;
      project.setAttribute("role", "button");
      project.setAttribute("aria-label", "Read about the featured portfolio project");
      function focusProjectDetail() {
        var detail = document.querySelector(".bento-side");
        if (detail) { detail.tabIndex = -1; detail.focus({ preventScroll: true }); }
      }
      project.addEventListener("click", focusProjectDetail);
      project.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); focusProjectDetail(); }
      });
    }

    var status = document.getElementById("formStatus");
    if (status) status.setAttribute("aria-live", "polite");
    var formFields = document.querySelectorAll("#inquiryForm input, #inquiryForm textarea, #inquiryForm select");
    formFields.forEach(function (field) {
      field.addEventListener("input", function () { field.removeAttribute("aria-invalid"); });
      field.addEventListener("invalid", function () { field.setAttribute("aria-invalid", "true"); });
    });
  })();
