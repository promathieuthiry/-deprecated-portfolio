export function onLinkClick(section) {
  removeOverflow()
  return document.getElementById(section).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}

export function addOverflow() {
  let body = document.getElementsByTagName("body")[0]
  return (body.style.overflow = "hidden")
}

export function removeOverflow() {
  let body = document.getElementsByTagName("body")[0]
  return body.style.removeProperty("overflow")
}

// export function getWindowDimensions() {
//   const { innerWidth: width } = window
//   return width
// }
