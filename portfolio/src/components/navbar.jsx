import Link from "next/link";
function Navbar() {
    return ( <div>
        <ul>
            <li><Link href={'/about'}>haelkhs</Link></li>
            <li><Link href={'/'}>Home</Link></li>
        </ul>
    </div> );
}

export default Navbar;