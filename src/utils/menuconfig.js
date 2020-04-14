const menuList = [
  {
    title: "page1",
    key: "/user/page1"
  },
  {
    title: "page2",
    key: "/user/page2",
    children: [
      {
        title: "page2-1",
        key: "/user/page2/one"
      },
      {
        title: "page2-2",
        key: "/user/page2/two"
      },
    ]
  },
  {
    title: "表格",
    key: "/user/page3"
  }
];
export default menuList;
