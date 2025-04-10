import { useRouter } from "next/router";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Project" },
  { href: "/blogs", label: "Blog" },
];

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const sortedNavItems = (() => {
    const currentIndex = NAV_ITEMS.findIndex(
      (item) => item.href === currentPath
    );
    if (currentIndex === -1) return NAV_ITEMS;

    return [
      ...NAV_ITEMS.slice(currentIndex),
      ...NAV_ITEMS.slice(0, currentIndex),
    ];
  })();

  return (
    <header className="fixed font-mont left-0 bottom-0 z-10 md:static md:z-0 md:w-full">
      <nav className="nav-style md:nav-style-md">
        {sortedNavItems.map((item, index) => (
          <li
            key={item.href}
            className={`bg-[#FFFAF2] ${
              index === 0
                ? "li-main-style md:li-main-style-md"
                : index === 1
                ? "li-child1-style md:li-child1-style-md"
                : index === 2
                ? "li-child2-style md:li-child2-style-md"
                : "li-child3-style md:li-child3-style-md"
            }`}
          >
            <a href={item.href}>{item.label}</a>
            <div
              className={`${
                index === 0
                  ? "li-main-style-line md:li-main-style-line-md"
                  : "li-child-style-line"
              }`}
            />
          </li>
        ))}
      </nav>
    </header>
  );
};

export default Header;
