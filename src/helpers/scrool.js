function onLinkClick() {
  return document.getElementById("contact_section").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}

export default { onLinkClick }
