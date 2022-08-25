import JobFilter from "./JobFilter";
const Header = () => {
    return (
        <header className="relative">
            <img className="w-full block md:hidden" src="/images/bg-header-mobile.svg" alt="header" />
            <img className="w-full md:block hidden" src="/images/bg-header-desktop.svg" alt="header" />
            <JobFilter />
        </header>
    )
}

export default Header;