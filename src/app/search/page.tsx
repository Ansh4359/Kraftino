"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, ArrowRight, FileText, Users, Award, Building } from 'lucide-react';
import Header from '../Components/header';

interface SearchResult {
  title: string;
  href: string;
  type: string;
  description: string;
  keywords: string[];
}

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Comprehensive search data
  const searchData: SearchResult[] = useMemo(() => [
    {
      title: 'Contact Us',
      href: '/contact',
      type: 'Page',
      description: 'Get in touch with our expert team to discuss how KRAFTINO can help you leverage AI, machine learning, and advanced analytics.',
      keywords: ['contact', 'reach', 'email', 'phone', 'office', 'get in touch', 'communicate']
    },
    {
      title: 'About Us',
      href: '/about',
      type: 'Page',
      description: 'Learn about KRAFTINO\'s mission, values, and commitment to excellence in professional services.',
      keywords: ['about', 'company', 'mission', 'values', 'team', 'history', 'who we are']
    },
    {
      title: 'Mission & Values',
      href: '/about/mission',
      type: 'About',
      description: 'Discover our core mission and the values that drive our commitment to client success.',
      keywords: ['mission', 'values', 'purpose', 'goal', 'principles', 'beliefs', 'vision']
    },
    {
      title: 'Global Reach',
      href: '/about/global',
      type: 'About',
      description: 'Explore our worldwide presence and international capabilities.',
      keywords: ['global', 'worldwide', 'international', 'offices', 'reach', 'presence']
    },
    {
      title: 'Awards & Recognition',
      href: '/about/awards',
      type: 'About',
      description: 'See the awards and recognition we\'ve received for our outstanding work.',
      keywords: ['awards', 'recognition', 'achievements', 'honors', 'excellence']
    },
    {
      title: 'Technology Focus',
      href: '/about/technology',
      type: 'About',
      description: 'Learn about our cutting-edge technology solutions and innovation approach.',
      keywords: ['technology', 'tech', 'innovation', 'digital', 'solutions', 'AI', 'machine learning']
    },
    {
      title: 'Our Offices',
      href: '/about/location',
      type: 'About',
      description: 'Find our office locations and contact information.',
      keywords: ['offices', 'location', 'address', 'where', 'find us', 'locations']
    },
    {
      title: 'Assurance Services',
      href: '/practices/assurance',
      type: 'Service',
      description: 'Comprehensive assurance services including auditing and compliance solutions.',
      keywords: ['assurance', 'audit', 'compliance', 'verification', 'attestation']
    },
    {
      title: 'Tax Services',
      href: '/practices/tax',
      type: 'Service',
      description: 'Expert tax planning, preparation, and advisory services for individuals and businesses.',
      keywords: ['tax', 'taxation', 'filing', 'returns', 'planning', 'advisory']
    },
    {
      title: 'Advisory Services',
      href: '/practices/advisory',
      type: 'Service',
      description: 'Strategic advisory and consulting services to help your business grow.',
      keywords: ['advisory', 'consulting', 'advice', 'strategy', 'business consulting']
    },
    {
      title: 'Risk Management',
      href: '/practices/risk',
      type: 'Service',
      description: 'Comprehensive risk assessment and management solutions.',
      keywords: ['risk', 'management', 'assessment', 'mitigation', 'analysis']
    },
    {
      title: 'Insights & Publications',
      href: '/resources/insights',
      type: 'Resource',
      description: 'Access our latest insights, research, and thought leadership articles.',
      keywords: ['insights', 'publications', 'articles', 'research', 'thought leadership']
    },
    {
      title: 'Whitepapers',
      href: '/resources/whitepapers',
      type: 'Resource',
      description: 'Download our comprehensive whitepapers on industry trends and solutions.',
      keywords: ['whitepapers', 'papers', 'documents', 'reports', 'publications']
    },
    {
      title: 'Case Studies',
      href: '/resources/case-studies',
      type: 'Resource',
      description: 'Read about our successful client projects and outcomes.',
      keywords: ['case', 'studies', 'examples', 'success', 'projects', 'client work']
    },
    {
      title: 'Tools & Calculators',
      href: '/resources/tools',
      type: 'Resource',
      description: 'Access helpful tools and calculators for your business needs.',
      keywords: ['tools', 'calculators', 'utilities', 'resources', 'business tools']
    },
    {
      title: 'Current Job Openings',
      href: '/careers/openings',
      type: 'Career',
      description: 'Explore current job opportunities and join our growing team.',
      keywords: ['jobs', 'openings', 'positions', 'hiring', 'employment', 'work', 'career opportunities']
    },
    {
      title: 'Culture & Benefits',
      href: '/careers/culture',
      type: 'Career',
      description: 'Learn about our company culture, work environment, and employee benefits.',
      keywords: ['culture', 'benefits', 'workplace', 'environment', 'perks', 'employee']
    },
    {
      title: 'Campus Recruiting',
      href: '/careers/campus',
      type: 'Career',
      description: 'Information for recent graduates and campus recruiting programs.',
      keywords: ['campus', 'recruiting', 'university', 'graduate', 'college', 'student']
    },
    {
      title: 'Internships',
      href: '/careers/internships',
      type: 'Career',
      description: 'Apply for internship opportunities and gain valuable experience.',
      keywords: ['internships', 'intern', 'student', 'experience', 'program']
    }
  ], []);

  const performSearch = useCallback((query: string) => {
    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      );
      
      setSearchResults(results);
      setIsLoading(false);
    }, 300);
  }, [searchData]);

  useEffect(() => {
    // Get search query from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';
    setSearchQuery(query);
    
    if (query) {
      performSearch(query);
    }
  }, [performSearch]);

  const handleNewSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Update URL with new search query
      const newUrl = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      window.history.pushState({}, '', newUrl);
      performSearch(searchQuery.trim());
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Service': return <Building className="w-4 h-4" />;
      case 'Career': return <Users className="w-4 h-4" />;
      case 'Resource': return <FileText className="w-4 h-4" />;
      case 'About': return <Award className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Service': return 'text-blue-400 bg-blue-400/10';
      case 'Career': return 'text-green-400 bg-green-400/10';
      case 'Resource': return 'text-purple-400 bg-purple-400/10';
      case 'About': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Search Header */}
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300">
              Search Results
            </h1>
            
            {/* Search Form */}
            <form onSubmit={handleNewSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our website..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <ArrowRight className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </button>
              </div>
            </form>
          </div>

          {/* Search Results */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                <p className="mt-4 text-gray-400">Searching...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <>
                <div className="text-gray-300 mb-6">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
                </div>
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
                            {getTypeIcon(result.type)}
                          </div>
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${getTypeColor(result.type)}`}>
                            {result.type}
                          </span>
                        </div>
                        
                        <a
                          href={result.href}
                          className="block group-hover:text-blue-300 transition-colors"
                        >
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {result.description}
                          </p>
                        </a>
                      </div>
                      
                      <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : searchQuery ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400 mb-6">
                  We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;. Try different keywords or browse our sections.
                </p>
                
                {/* Suggested sections */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[
                    { name: 'Services', href: '/practices', icon: Building },
                    { name: 'About Us', href: '/about', icon: Award },
                    { name: 'Resources', href: '/resources', icon: FileText },
                    { name: 'Careers', href: '/careers', icon: Users }
                  ].map((section) => (
                    <a
                      key={section.name}
                      href={section.href}
                      className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-200 hover:scale-105 group"
                    >
                      <section.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-white text-sm font-medium group-hover:text-blue-300">
                        {section.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">👋</div>
                <h3 className="text-xl font-semibold text-white mb-2">Welcome to Search</h3>
                <p className="text-gray-400">
                  Enter a search term above to find what you&apos;re looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
