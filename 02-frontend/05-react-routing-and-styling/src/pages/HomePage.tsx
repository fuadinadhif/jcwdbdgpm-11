import { Link, NavLink } from "react-router";

export default function HomePage() {
  function checkActive({ isActive }: { isActive: boolean }) {
    return isActive ? "font-bold" : "";
  }

  return (
    <>
      <header className="shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] py-4 px-16">
        <div className="max-w-[1140px] flex justify-between mx-auto items-center">
          <div className="flex gap-[9px] items-center">
            <img
              src="/logo.svg"
              alt="Mangcoding purple log image with white content"
            />
            <h1 className="font-roboto font-bold text-[18px] text-primary-blue uppercase">
              Mangcoding Store
            </h1>
          </div>

          <nav>
            <ul className="flex gap-10 font-poppins text-dark-blue">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/course" className={checkActive}>
                  Course
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className={checkActive}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/article" className={checkActive}>
                  Article
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={checkActive}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <nav className="text-[18px] font-bold font-inter flex gap-6">
            <Link
              to="/auth/login"
              className="border border-primary-blue px-15 py-[13px] rounded-[10px] text-primary-blue"
            >
              Log in
            </Link>
            <Link
              to="/auth/register"
              className="px-15 py-[13px] rounded-[10px] text-white bg-primary-blue"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

// NOTES
// React Fragment Example
{
  /* <React.Fragment>
  <Header />
  <main>
    <h1>Home Page</h1>
  </main>
</React.Fragment>; */
}
