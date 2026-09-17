import { useState } from "react"

export default function Footer({ onHome, onAbout, onContact }) {
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  function subscribe(e) {
    e.preventDefault()
    setMsg(email.trim() ? "You're subscribed! Watch your inbox." : "Please enter your email first.")
  }

  return (
    <footer className="w-full h-fit border-t-1 border-amber-500 bottom-0 bg-[#0A2947] font-serif text-[#E2852E]">
      <div className="w-full mx-aut sm:px-10 px-4 pb-10">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-start pt-12">

          <div className="mt-4">
            <h1 className="text-4xl font-display mb-8">Get In Touch</h1>
            <ul className="text-lg text-gray-300 font-semibold flex flex-col gap-3">
              <li className="flex items-center gap-2"><ion-icon className="text-2xl" name="location"></ion-icon><p className="font-serif text-[#E2852E]">123, Regal St., Amazing City</p></li>
              <li className="flex items-center gap-2"><ion-icon className="text-2xl" name="call"></ion-icon><a href="tel:+2519134" className="font-serif text-[#E2852E]">(+251) 913 4***30</a></li>
              <li className="flex items-center gap-2 sm:text-lg text-base"><ion-icon className="text-2xl" name="mail"></ion-icon><a href="mailto:contact@regalcarry.com" className="font-serif text-[#E2852E]">contact@regalcarry.com</a></li>
            </ul>

            <div className="flex gap-2 items-center text-2xl font-serif text-[#E2852E] mt-6">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full font-serif text-[#E2852E] border border-gray-700 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path id="Vector"
                    d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                    fill="white" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center">
                <svg className="w-[1.25rem] h-[1.125rem] font-serif text-[#E2852E]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5524 10.2144 13.5892C9.90582 13.6229 9.16244 13.6296 7.0582 13.6296C4.95396 13.6296 4.21142 13.6223 4.21142 13.5892Z"
                    fill="currentColor" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center">
                <svg className="w-[1rem] h-[1rem] font-serif text-[#E2852E]" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                    fill="currentColor" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center">
                <svg className="w-[1.25rem] h-[0.875rem] font-serif text-[#E2852E]" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z"
                    fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-4xl font-display mb-8">Quick Links</h2>
            <ul className="mt-4 text-lg font-semibold text-gray-300">
              <li className="flex items-center text-xl mt-2 font-serif text-[#E2852E]">
                <b><ion-icon name="chevron-forward-outline"></ion-icon></b>
                <button className="hover:underline cursor-pointer" onClick={onHome}>Home</button>
              </li>
              <li className="flex items-center text-xl mt-2 font-serif text-[#E2852E]">
                <b><ion-icon name="chevron-forward-outline"></ion-icon></b>
                <button className="hover:underline cursor-pointer" onClick={onAbout}>About Us</button>
              </li>
              <li className="flex items-center text-xl mt-2 font-serif text-[#E2852E]">
                <b><ion-icon name="chevron-forward-outline"></ion-icon></b>
                <button className="hover:underline cursor-pointer" onClick={onContact}>Contact Us</button>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-4xl font-display mb-8">Photo Gallery</h2>
            <div className="w-full grid grid-cols-3 place-items-center justify-items-stretch gap-4">
              <img className="rounded-sm outline outline-[4px] h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tP-EEWbtVSn841oNEFf4ZACR3gQuvSWqncpCrqvLsQ&s=10" />
              <img className="rounded-sm outline outline-[4px] h-20 w-20" src="https://media.mango.com/is/image/punto/27045975-99-016?wid=2048&hei=2867&fit=crop" />
              <img className="rounded-sm outline outline-[4px] h-20 w-20" src="https://img.lazcdn.com/g/p/b173e71dfb52cdd643b625cc9764b98e.jpg_720x720q80.jpg" alt="Gallery Image" />
              <img className="rounded-sm outline outline-[4px] h-20 w-20" src="https://fas-bee.com/cdn/shop/files/V04517AU01637_001.jpg?v=1761318762" alt="Gallery Image" />
              <img className="rounded-sm outline outline-[4px] h-20 w-20" src="https://www.oakandelkbags.com/cdn/shop/collections/All_Men_bags_OAK_ELK-811996.png?v=1750437986&width=2048" alt="Gallery Image" />
              <img className="rounded-sm outline outline-[4px] h-20 w-20" src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/05/04/7f6d5d56-89e4-11ea-8a72-3b4a65ec119d_image_hires_151637.jpg?itok=p2BS0875&v=1588576604" alt="Gallery Image" />
            </div>
          </div>

          <div className="w-full mt-4 lg:pl-6">
            <h4 className="text-4xl font-display mb-6">Message Us</h4>
            <p className="text-lg font-serif text-[#E2852E] font-semibold mb-3">Sign Up here to get Exclusive Discounts</p>
            <form onSubmit={subscribe} className="w-full flex justify-center items-center bg-white rounded-lg p-2">
              <input type="email" className="w-full h-full px-4 text-gray-800 lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" className="h-full py-3 px-6 bg-lightOrange transition-all duration-500 shadow-md rounded-xl text-sm font-serif text-[#E2852E] font-semibold w-fit hover:bg-fontOrange">SignUp</button>
            </form>
            {msg && <p className="font-serif text-[#E2852E] text-sm mt-2">{msg}</p>}
          </div>
        </div>

        <hr className="bg-gray mt-14" />

        <div className="w-full flex sm:flex-row gap-2 flex-col items-center justify-between py-4">
          <div>&copy; 2024 Sammy-TG All Right Reserved</div>
          <div className="flex items-center justify-center">
            <button onClick={onHome} className="sm:px-4 px-2 border-r border-gray-500 cursor-pointer">Home</button>
            <button onClick={onHome} className="sm:px-4 px-2 border-r border-gray-500 cursor-pointer">Cookies</button>
            <button onClick={onHome} className="sm:px-4 px-2 border-r border-gray-500 cursor-pointer">Help</button>
            <button onClick={onHome} className="sm:px-4 px-2 border-l border-gray-500 cursor-pointer">FAQs</button>
          </div>
        </div>
      </div>
    </footer>
  )
}