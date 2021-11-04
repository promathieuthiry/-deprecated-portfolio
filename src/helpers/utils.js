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

export function filterImage(arr, filename) {
  for (let item of arr) {
    if (item?.node?.name + item?.node?.ext === filename) {
      return item?.node?.childImageSharp?.gatsbyImageData
    }
  }
}

export function filterImagesFeatured(arr, featured) {
  if (featured) {
    return arr.filter(item => item.featured)
  } else return arr
}
