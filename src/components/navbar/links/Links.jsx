import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "Про проєкт",
      path: "/about",
    },
    {
      title: "Допомогти проєкту",
      path: "/helpPage",
    },
    {
      title: "Соціальна допомога",
      path: "/socialPage",
    },
    {
      title: "Підпиши петицію",
      path: "/petitionPage",
    },
  ];
  return (
    
      <>
        {links.map((link) => (
          <Link key={link.title} href={link.path}>
            {link.title}
          </Link>
        ))}
      </>
    
  );
};
export default Links;
