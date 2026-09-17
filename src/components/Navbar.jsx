
import { useState } from "react"
import RegalLogo from '../images/regal.png'

export default function Navbar({ setActivePages, cartCount, onOpenCart, onOpenOrders }) {
  const [open, setOpen] = useState(false)

  const go = (page) => { setActivePages(page); setOpen(false) }

  const link = "inline-block rounded-lg px-2 py-1 text-lg font-bold font-serif text-[#1A3263] transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-[#DAA464]/70 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img className="w-16 h-16 md:h-20 md:w-auto" src={RegalLogo} alt="" />
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <h1 className={link} onClick={() => go("home")}>Home</h1>
            <h1 className={link} onClick={() => go("about")}>About Us</h1>
            <h1 className={link} onClick={() => go("contact")}>Contact Us</h1>
            <h1 className={link} onClick={() => go("admin")}>Manage</h1>
          </div>

          <div className="flex items-center justify-end gap-3">
            <div className="relative cursor-pointer" onClick={onOpenCart}>
              <svg className="w-7 h-7 text-[#1A3263]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
              )}
            </div>

            <svg className="w-7 h-7 text-[#1A3263] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={onOpenOrders}>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
            </svg>

            <button className="md:hidden p-1 text-[#1A3263]" onClick={() => setOpen(!open)} aria-label="Menu">
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden flex flex-col items-center gap-2 pt-4 pb-2">
            <h1 className={link} onClick={() => go("home")}>Home</h1>
            <h1 className={link} onClick={() => go("about")}>About Us</h1>
            <h1 className={link} onClick={() => go("contact")}>Contact Us</h1>
            <h1 className={link} onClick={() => go("admin")}>Manage</h1>
          </div>
        )}
      </div>
    </header>
  )
}