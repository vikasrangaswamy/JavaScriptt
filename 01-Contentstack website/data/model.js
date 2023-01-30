// not storing data
// Only defining structure
const Header = {
  logo: "url for the file location",
  // Array represents that it will contain multiple
  // entries
  navBar: [
    {
      title: "Display name",
      href: "url to point to",
    },
  ],
};

const Banner = {
  bannerHeading: "Display text for banner",
  bannerImage: "url of the banner image",
};

//
const Story = [
  // common structure that has to be repeated
  // each element is a story
  {
    header: "Title of story",
    introduction: "Introduction to the story",
    storyImage: "url to the story image",
  },
];

const Card = [
  // each entry is a separate card
  {
    profileImage: "url to image",
    name: "Name of the person",
    introduction: "Short introduction about the person",
    profileLink: "reference or website link for individual profile",
  },
];

const Footer = {
  logo: "Url of the logo",
  // each entry in this array will be a new address
  address: ["Address 1", "Address 2 "],
  siteMap: [{ title: "Display title for the link", href: "link to point to" }],
  contactUs: {
    email: ["email 1", "email 2"],
    socailMediaIcons: [
      { icon: "class of the i tag", href: "link for the icon" },
    ],
  },
};
