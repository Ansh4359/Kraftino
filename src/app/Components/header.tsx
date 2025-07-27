"use client"
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<Array<{title: string, href: string, type: string}>>([]);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  // Search data for suggestions
  const searchData = [
    { title: 'Contact Us', href: '/contact', type: 'Page', keywords: ['contact', 'reach', 'email', 'phone', 'office'] },
    { title: 'About Us', href: '/about', type: 'Page', keywords: ['about', 'company', 'mission', 'values', 'team'] },
    { title: 'Mission & Values', href: '/about/mission', type: 'About', keywords: ['mission', 'values', 'purpose', 'goal'] },
    { title: 'Global Reach', href: '/about/global', type: 'About', keywords: ['global', 'worldwide', 'international', 'offices'] },
    { title: 'Awards', href: '/about/awards', type: 'About', keywords: ['awards', 'recognition', 'achievements'] },
    { title: 'Technology Focus', href: '/about/technology', type: 'About', keywords: ['technology', 'tech', 'innovation', 'digital'] },
    { title: 'Our Offices', href: '/about/location', type: 'About', keywords: ['offices', 'location', 'address', 'where'] },
    { title: 'Assurance Services', href: '/practices/assurance', type: 'Service', keywords: ['assurance', 'audit', 'compliance'] },
    { title: 'Tax Services', href: '/practices/tax', type: 'Service', keywords: ['tax', 'taxation', 'filing', 'returns'] },
    { title: 'Advisory Services', href: '/practices/advisory', type: 'Service', keywords: ['advisory', 'consulting', 'advice'] },
    { title: 'Risk Management', href: '/practices/risk', type: 'Service', keywords: ['risk', 'management', 'assessment'] },
    { title: 'Insights & Publications', href: '/resources/insights', type: 'Resource', keywords: ['insights', 'publications', 'articles', 'research'] },
    { title: 'Whitepapers', href: '/resources/whitepapers', type: 'Resource', keywords: ['whitepapers', 'papers', 'documents'] },
    { title: 'Case Studies', href: '/resources/case-studies', type: 'Resource', keywords: ['case', 'studies', 'examples', 'success'] },
    { title: 'Tools & Calculators', href: '/resources/tools', type: 'Resource', keywords: ['tools', 'calculators', 'utilities'] },
    { title: 'Current Openings', href: '/careers/openings', type: 'Career', keywords: ['jobs', 'openings', 'positions', 'hiring'] },
    { title: 'Culture & Benefits', href: '/careers/culture', type: 'Career', keywords: ['culture', 'benefits', 'workplace'] },
    { title: 'Campus Recruiting', href: '/careers/campus', type: 'Career', keywords: ['campus', 'recruiting', 'university', 'graduate'] },
    { title: 'Internships', href: '/careers/internships', type: 'Career', keywords: ['internships', 'intern', 'student'] }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      hasDropdown: false
    },
    {
      name: 'About Us',
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Mission & Values', href: '/about/mission' },
        { name: 'Global Reach', href: '/about/global' },
        { name: 'Awards', href: '/about/awards' },
        { name: 'Technology Focus', href: '/about/technology' },
        {  name: 'Our Offices', href: '/about/location' }

      ]
    },
    {
      name: 'Practices',
      href: '/practices',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Assurance', href: '/practices/assurance' },
        { name: 'Tax Services', href: '/practices/tax' },
        { name: 'Advisory', href: '/practices/advisory' },
        { name: 'Risk Management', href: '/practices/risk' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Insights & Publications', href: '/resources/insights' },
        { name: 'Whitepapers', href: '/resources/whitepapers' },
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Tools & Calculators', href: '/resources/tools' }
      ]
    },
    {
      name: 'Careers',
      href: '/careers',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Current Openings', href: '/careers/openings' },
        { name: 'Culture & Benefits', href: '/careers/culture' },
        { name: 'Campus Recruiting', href: '/careers/campus' },
        { name: 'Internships', href: '/careers/internships' }
      ]
    },
    {
      name: 'Contact Us',
      href: '/contact',
      hasDropdown: false
    }
  ];

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleDropdownEnter = (index: number) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before hiding
    setDropdownTimeout(timeout);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };
  
  const getBacktoHome = () => {
    window.location.href = "/";
  }

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus search input when opening
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    } else {
      // Clear search when closing
      setSearchQuery('');
      setSearchSuggestions([]);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    
    if (value.trim().length > 0) {
      // Filter search data based on query
      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(value.toLowerCase()))
      ).slice(0, 6); // Limit to 6 suggestions
      
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      
      // Clear and close search
      setSearchQuery('');
      setSearchSuggestions([]);
      setIsSearchOpen(false);
    }
  };

  const handleSuggestionClick = (href: string) => {
    window.location.href = href;
    setSearchQuery('');
    setSearchSuggestions([]);
    setIsSearchOpen(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchSuggestions([]);
    }
  };

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-700/50' 
            : 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="cursor-pointer transition-opacity duration-200 hover:opacity-80" onClick={getBacktoHome}>
                <div className="text-xl font-bold tracking-wide text-white">
                  KRAFTINO
                </div>
                <div className="text-xs text-gray-400 tracking-wide uppercase font-medium -mt-1">
                  Partners Beyond Boundaries
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                        item.name === 'Home' 
                          ? 'text-yellow-400 bg-yellow-400/10' 
                          : 'text-gray-200 hover:text-white hover:bg-gray-800/50'
                      }`}
                      onMouseEnter={() => handleDropdownEnter(index)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                        item.name === 'Home' 
                          ? 'text-yellow-400 bg-yellow-400/10' 
                          : 'text-gray-200 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <span>{item.name}</span>
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div
                      className="absolute top-full left-0 mt-1 w-56 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-2xl z-[10000] border border-gray-700/50 overflow-hidden"
                      onMouseEnter={() => handleDropdownEnter(index)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="py-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={handleDropdownItemClick}
                            className="flex items-center px-4 py-2.5 text-sm text-gray-200 hover:bg-gray-700/50 hover:text-white transition-colors duration-150 border-b border-gray-700/30 last:border-b-0"
                          >
                            <span>{dropdownItem.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Search Icon */}
              <button 
                onClick={handleSearchToggle}
                className="text-gray-200 hover:text-white transition-colors duration-200 p-2 ml-2 rounded-md hover:bg-gray-800/50"
              >
                <Search className="w-4 h-4" />
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button 
                onClick={handleSearchToggle}
                className="text-gray-200 hover:text-white transition-colors duration-200 p-2 rounded-md hover:bg-gray-800/50"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-200 hover:text-white transition-colors duration-200 p-2 rounded-md hover:bg-gray-800/50"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-700/50">
              <div className="px-4 pt-2 pb-3 space-y-1 bg-gray-900/95">
                {navigationItems.map((item, index) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                          item.name === 'Home' 
                            ? 'text-yellow-400 bg-yellow-400/10' 
                            : 'text-gray-200 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        {item.name}
                      </a>
                      {item.hasDropdown && (
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className="px-3 py-2 text-gray-200 hover:text-white rounded-md hover:bg-gray-800/50"
                        >
                          <ChevronDown className={`w-3 h-3 transform transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    {item.hasDropdown && activeDropdown === index && (
                      <div className="pl-6 space-y-1 mt-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 rounded-md"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm">
          <div className="flex items-start justify-center min-h-screen pt-20 px-4">
            <div className="w-full max-w-2xl bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
              <form onSubmit={handleSearchSubmit} className="p-6">
                <div className="flex items-center space-x-4">
                  <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search our website..."
                    className="flex-1 bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                      setSearchSuggestions([]);
                    }}
                    className="text-gray-400 hover:text-white p-1 rounded-md transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Search Suggestions */}
                {searchSuggestions.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <div className="text-sm text-gray-400 mb-3">Suggestions:</div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion.href)}
                          className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover:bg-gray-700/50 rounded-lg transition-colors duration-200 text-left group"
                        >
                          <div>
                            <div className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
                              {suggestion.title}
                            </div>
                            <div className="text-gray-400 text-xs mt-1">
                              {suggestion.type}
                            </div>
                          </div>
                          <div className="text-gray-500 group-hover:text-gray-300">
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Press Enter to search or Escape to close</span>
                    <div className="flex items-center space-x-2">
                      <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Enter</kbd>
                      <span>to search</span>
                    </div>
                  </div>
                </div>
              </form>
              
              {/* Quick Search Suggestions - Only show when no search query */}
              {searchQuery.trim() === '' && (
                <div className="px-6 pb-6">
                  <div className="text-sm text-gray-400 mb-3">Quick searches:</div>
                  <div className="flex flex-wrap gap-2">
                    {['Contact Us', 'About Us', 'Tax Services', 'Advisory', 'Careers', 'Resources'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSearchChange(suggestion)}
                        className="px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white text-sm rounded-full transition-colors duration-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;