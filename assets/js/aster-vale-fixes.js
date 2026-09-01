const studioLogo = document.querySelector(".dev-s_card .logo-studio-w");

if (studioLogo && !document.querySelector(".dev-s_card_studio-label")) {
  const label = document.createElement("div");
  label.className = "dev-s_card_studio-label p6 text-dark a-center";
  label.textContent = "Studio";
  studioLogo.before(label);
}

const footerBackground = document.querySelector(".footer-w_bg");

if (footerBackground && !footerBackground.querySelector(".footer-orbit-media")) {
  const orbit = document.createElement("video");
  orbit.className = "footer-orbit-media";
  orbit.src = "/assets/media/aster-vale/runtime/scenes/footer-starlight.mp4";
  orbit.autoplay = true;
  orbit.loop = true;
  orbit.muted = true;
  orbit.playsInline = true;
  orbit.preload = "metadata";
  orbit.setAttribute("aria-hidden", "true");
  orbit.setAttribute("tabindex", "-1");
  orbit.addEventListener("canplay", () => orbit.classList.add("is-ready"), {
    once: true,
  });
  footerBackground.append(orbit);
  orbit.play().catch(() => {});
}
