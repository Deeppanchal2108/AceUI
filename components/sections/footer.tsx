import { Github } from "lucide-react"
import { Twitter, QrCode } from "lucide-react"
import Link from "next/link"
function Footer() {
    return (
        <footer className="text-white w-full min-h-[200px] pl-4 sm:pl-10 md:pl-30 pb-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="col-span-1 ">
                        <ul>
                            <li className="text-2xl font-bold font-mono mb-2 tracking-tight">AceUi</li>
                            <li className="text-sm text-gray-300 mb-4 max-w-xs leading-relaxed">
                                Built for developers who care about design and developer experience.
                            </li>
                            <li className="text-xs text-gray-500">© 2025 AceUi. All rights reserved.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 font-pop">Components</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer"><Link href={"/components/image-text"}>Image Text</Link></li>
                            <li className="hover:text-white transition-colors cursor-pointer"><Link href={"/components/spot-light"}>SpotLight</Link></li>
                            <li className="hover:text-white transition-colors cursor-pointer"><Link href={"/components/particle-background"}>Background</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 font-pop">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer"><Link href={"/components/installation"}>Documentation</Link></li>
                            <li className="hover:text-white transition-colors cursor-pointer"><Link href={"/introduction"}>FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 font-pop">Connect</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <Github size={16} />
                                <Link href={"https://github.com/Deeppanchal2108"}>GitHub</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <Twitter size={16} />
                                <Link href={"https://x.com/deepp2108"}>X</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <QrCode size={16} />
                                <Link href={"https://deep-portfolio-alpha.vercel.app/"}>Website</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
