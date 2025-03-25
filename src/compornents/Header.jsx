import { useRouter } from "next/router";

  const NAV_ITEMS = [
  { href: "/", label: "Home"},
  { href: "/about", label: "About"},
  { href: "/project", label: "Project"},
  { href: "/blog", label: "Blog"},
]

const Header =  () => {

  const router = useRouter();
  const currentPath = router.pathname;

  const sortedNavItems = (() => {
    const currentIndex = NAV_ITEMS.findIndex((item) => item.href === currentPath );
    if (currentIndex === -1) return NAV_ITEMS;

    return [
      ...NAV_ITEMS.slice(currentIndex),
      ...NAV_ITEMS.slice(0, currentIndex),
    ];
  })();


  return (
    <header className="fixed font-mont left-0 bottom-0 z-10 md:static md:z-0 md:w-full md:mt-10">
       <nav className="nav-style md:nav-style-md">

        {sortedNavItems.map((item, index) => 
          <li
          key={item.href}
          className={`${
            index === 0 ? "li-main-style md:li-main-style-md" : `li-child${index}-style md:li-child${index}-style-md`
          }`}>
            <a href={item.href}>{item.label}</a>
          <div className={`${
            index === 0 ? "li-main-style-line md:li-main-style-line-md" : `li-child-style-line`
          }`} />
          </li>          
        )}
       </nav>
    </header>

  );
}

export default Header