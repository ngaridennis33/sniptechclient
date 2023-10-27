//NavBar links for Mobile Devices.
export const navLinkData = [
    {
      label:"Home", 
      link:"/", 
      tree:"null",
    },
    {
        label: "blogs",
        link: "/blog",
        tree: null,
    },
    {
        label: "portfolio",
        link: "/portfolio",
        tree: null,
    },
    {
        label: "About",
        link: null,
        tree: [
            {
                label: "About Us",
                link: "/about",
                branches: null,
            },
            {
              label: "Mission",
              link: "/mission",
              branches: null,
          },{
            label: "Vision",
            link: "/vision",
            branches: null,
        },{
          label: "FAQ",
          link: "/faq",
          branches: null,
      },
        ],
    },
    {
      label: "Contact",
      link: "/contact",
      tree: null,
  },
];