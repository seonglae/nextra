// @ts-check

/** @type {{text:string,href:string,isExternal?:boolean}[]} */
const routes = [
  {
    text: "Usage",
    href: "https://docs.nextplate.now.sh",
    isExternal: true,
  },
  {
    text: "Social Image",
    href:
      "/social-image?title=Hello, world!&description=This is an example description. The possibilities are endless!&path=/some/random/path",
    isExternal: true,
  },
  {
    text: "Social Image API",
    href: `/api/social-image?title=Hello, world!&description=This is an example description. The possibilities are endless!&path=/some/random/path`,
    isExternal: true,
  },
  {
    text: "Empty Page",
    href: "/empty",
  },
];

module.exports = routes;
