import { Github } from "lucide-react"
import { Twitter, QrCode } from "lucide-react"
function Footer() {
    return (
        <footer className="text-white w-full min-h-[200px] pl-4 sm:pl-10 md:pl-30 pb-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="col-span-1 ">
                        <ul>
                            <li className="text-2xl font-bold font-mono mb-2 tracking-tight">AceUi</li>
                            <li className="text-sm text-gray-300 mb-4 max-w-xs leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, incidunt.
                            </li>
                            <li className="text-xs text-gray-500">© 2025 AceUi. All rights reserved.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 font-pop">Components</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer">Button</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Card</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 font-pop">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
                            <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 font-pop">Connect</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <Github size={16} />
                                GitHub
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <Twitter size={16} />X
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                <QrCode size={16} />
                                Website
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
