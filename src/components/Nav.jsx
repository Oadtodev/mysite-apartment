

function Nav() {
  return (
    <>
        <div className="navbar bg-neutral sm:w-427 text-white p-1 sticky top-0 z-10 scroll-smooth">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content w-full items-center rounded-box z-[1] mt-3  p-2 shadow bg-neutral">
        <li><a href='Navbar'>หน้าหลัก</a></li>
        <li><a>แจ้งซ่อม</a></li>
        <li><a href='Login'>เช็คยอดบิล</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Apartment</a>
  </div>
  <div className="navbar-end">
    
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    {/* prrofile */}
    <a href="">Admin:Oad</a>
    <div className="avatar w-10 mx-5">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="/oad.jpg" />
  </div>
</div>
  </div>
</div>
    </>
  )
}

export default Nav