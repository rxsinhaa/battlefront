'use client';

export function Footer() {
  return (
    <footer className="w-full bg-oceanic-noir border-t border-nocturnal-expedition/30 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Product Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-arctic-powder">
            Product
          </h4>
          <ul className="flex flex-col gap-2.5 font-sans text-sm text-mystic-mint/70">
            <li>
              <a href="#features" className="hover:text-forsythia transition-colors duration-150">
                Features
              </a>
            </li>
            <li>
              <a href="#pipelines" className="hover:text-forsythia transition-colors duration-150">
                Pipelines
              </a>
            </li>
            <li>
              <a href="#compute" className="hover:text-forsythia transition-colors duration-150">
                Compute Engine
              </a>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-arctic-powder">
            Company
          </h4>
          <ul className="flex flex-col gap-2.5 font-sans text-sm text-mystic-mint/70">
            <li>
              <a href="#docs" className="hover:text-forsythia transition-colors duration-150">
                Docs
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-forsythia transition-colors duration-150">
                Blog
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-forsythia transition-colors duration-150">
                Community
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-arctic-powder">
            Resources
          </h4>
          <ul className="flex flex-col gap-2.5 font-sans text-sm text-mystic-mint/70">
            <li>
              <a href="#status" className="hover:text-forsythia transition-colors duration-150">
                System Status
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-forsythia transition-colors duration-150">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-forsythia transition-colors duration-150">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-forsythia transition-colors duration-150">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-forsythia transition-colors duration-150">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-arctic-powder">
            Socials
          </h4>
          <div className="flex gap-4 items-center text-mystic-mint/70">
            
            {/* X / Twitter */}
            <a href="https://x.com" aria-label="X (formerly Twitter)" target="_blank" rel="noopener noreferrer" className="hover:text-forsythia transition-colors duration-150">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-forsythia transition-colors duration-150">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-forsythia transition-colors duration-150">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* Discord */}
            <a href="https://discord.com" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="hover:text-forsythia transition-colors duration-150">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
              </svg>
            </a>

          </div>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto border-t border-nocturnal-expedition/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-mystic-mint/40">
        <span>© {new Date().getFullYear()} BattleFront Inc. All rights reserved.</span>
        <span>Secured Node Connection Active</span>
      </div>
    </footer>
  );
}
