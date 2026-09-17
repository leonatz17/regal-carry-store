export default function Contact() {
    return (
        <>
            <div className="bg-[#E2852E]">
                <header className="bg-[#0A2947] text-[#E2852E] text-center py-12">
                    <h1 className="text-4xl font-bold mt-25">Contact Us</h1>
                </header>
                <section className="text-center py-12 px-4">
                    <h2 className="text-2xl font-bold font-serif text-[#0A2947]">Get In Touch</h2>
                    <p className="mt-4 font-serif text-[#0A2947] max-w-2xl mx-auto">We are here to help you. Reach out to us via any of the following methods.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
                        <div className="p-4 shadow-lg rounded-lg bg-[#0A2947] hover:bg-[#0A2947]/80 transition-colors">
                            <h3 className="text-xl font-bold font-serif text-[#E2852E]">Call Us</h3>
                            <p className="font-serif text-[#E2852E] mt-2">+1 123 456 7890</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-[#0A2947] hover:bg-[#0A2947]/80 transition-colors">
                            <h3 className="text-xl font-bold font-serif text-[#E2852E]">Email Us</h3>
                            <p className="font-serif text-[#E2852E] mt-2 ">contact@regalcarry.com</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-[#0A2947] hover:bg-[#0A2947]/80 transition-colors">
                            <h3 className="text-xl font-bold font-serif text-[#E2852E]">Visit Us</h3>
                            <p className="font-serif text-[#E2852E] mt-2">123 Regal St, Amazing City</p>
                        </div>
                    </div>
                </section>
                <section className="bg-[#0A2947] py-12 px-4">
                    <h2 className="text-2xl font-bold text-center text-[#E2852E] font-serif">Send Us A Message</h2>
                    <form className="max-w-2xl mx-auto mt-8 space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-[#E2852E] font-serif font-bold">Name</label>
                            <input type="text" id="name" className="w-full mt-2 p-3 border border-[#E2852E] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-[#E2852E] font-serif font-bold">Email</label>
                            <input type="email" id="email" className="w-full mt-2 p-3 border border-[#E2852E]  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-[#E2852E] font-serif font-bold">Message</label>
                            <textarea id="message" rows="5" className="w-full mt-2 p-3 border border-[#E2852E] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-amber-700 border-[#E2852E] py-3 rounded-lg shadow-lg hover:bg-amber-600 transition-colors text-[#0A2947]">Send Message</button>
                    </form>
                </section>
                <section className="text-center py-12 px-4">
                    <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                    <div className="mt-8">
                        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
                            <h3 className="text-xl font-bold">Where is my order?</h3>
                            <p className="mt-2 text-gray-700">You can track your shipment using the link sent in your shipping confirmation email.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
                            <h3 className="text-xl font-bold">What is your return policy?</h3>
                            <p className="mt-2 text-gray-700">We accept returns on unused items in original packaging within 30 days of purchase.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90  mt-4">
                            <h3 className="text-xl font-bold">Do you offer bulk/corporate orders?</h3>
                            <p className="mt-2 text-gray-700">Please reach out to our business team at the email address above for custom inquiries.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}