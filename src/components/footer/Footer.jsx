const Footer = () => {
    return (
        <footer className="h-16 bg-black flex items-center justify-center">
                <ul className="text-white flex justify-between items-center w-96">
                    <li>
                        <a href="#" className="hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
        </footer>
    )
}

export default Footer