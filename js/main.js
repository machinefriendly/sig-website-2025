/**
 * SIG Energy Technology - Main JavaScript
 * Based on energy-park.co.uk design style
 */

document.addEventListener('DOMContentLoaded', function() {
  // Load header component
  const headerContainer = document.querySelector('#header-container');
  if (headerContainer) {
    insertHeader(headerContainer);
    
    // After header is loaded, initialize components
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initEventCalendar();
  }
  
  // Load footer component
  const footerContainer = document.querySelector('#footer-container');
  if (footerContainer) {
    insertFooter(footerContainer);
  }
});

/**
 * Insert header HTML directly into the target element
 * @param {HTMLElement} targetElement - Element to insert the header into
 */
function insertHeader(targetElement) {
  // Get the current path to determine relative paths for assets
  const path = getRelativePath();
  
  const headerHTML = `
    <!-- Header -->
    <header class="header">
        <div class="container header-container">
            <div class="header-left">
                <a href="${path}index.html" class="logo">
                    <img src="${path}asset/SIG ENERGY TECHNOLOGY - logo static.png" alt="SIG Energy Technology Logo">
                </a>
                
                <nav class="nav">
                    <div class="mobile-menu-toggle">
                        <i class="fas fa-bars"></i>
                    </div>
                    
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="javascript:void(0);" class="nav-link has-dropdown">
                                Products
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <div class="dropdown-menu">
                                <a href="${path}pages/products/battery-cells.html" class="dropdown-item">
                                    <div class="dropdown-item-img">
                                        <img src="${path}asset/images/sketches/battery-cells-sketch.png" alt="Battery Cells">
                                    </div>
                                    <div class="dropdown-item-content">
                                        <h4>Battery Cells</h4>
                                        <p>High-quality lithium-ion cells</p>
                                    </div>
                                </a>
                                <a href="${path}pages/products/battery-modules.html" class="dropdown-item">
                                    <div class="dropdown-item-img">
                                        <img src="${path}asset/images/sketches/battery-modules-sketch.png" alt="Battery Modules">
                                    </div>
                                    <div class="dropdown-item-content">
                                        <h4>Battery Modules</h4>
                                        <p>Custom-designed battery modules</p>
                                    </div>
                                </a>
                                <a href="${path}pages/products/battery-management-systems.html" class="dropdown-item">
                                    <div class="dropdown-item-img">
                                        <img src="${path}asset/images/sketches/bms-sketch.png" alt="Battery Management Systems">
                                    </div>
                                    <div class="dropdown-item-content">
                                        <h4>Management Systems</h4>
                                        <p>Intelligent BMS solutions</p>
                                    </div>
                                </a>
                                <a href="${path}pages/products/batteries.html" class="dropdown-item">
                                    <div class="dropdown-item-img">
                                        <img src="${path}asset/images/sketches/battery-sketch.png" alt="Battery">
                                    </div>
                                    <div class="dropdown-item-content">
                                        <h4>Battery</h4>
                                        <p>Complete battery solutions</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:void(0);" class="nav-link has-dropdown">
                                Solutions
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <div class="dropdown-menu">
                                <a href="${path}pages/solutions/custom-solution.html" class="dropdown-item">
                                    <div class="dropdown-item-img">
                                        <img src="${path}asset/images/sketches/custom-solution-sketch.png" alt="Custom Solution Design">
                                    </div>
                                    <div class="dropdown-item-content">
                                        <h4>Custom Solution Design</h4>
                                        <p>Tailored battery solutions</p>
                                    </div>
                                </a>
                                <a href="${path}pages/solutions/data-service.html" class="dropdown-item">
                                    <div class="dropdown-item-img">
                                        <img src="${path}asset/images/sketches/data-service-sketch.png" alt="Data Service">
                                    </div>
                                    <div class="dropdown-item-content">
                                        <h4>Data Service</h4>
                                        <p>In-house testing and analysis</p>
                                    </div>
                                </a>
                                <a href="${path}pages/solutions/consulting-services.html" class="dropdown-item">
                                    <div class="dropdown-item-img">
                                        <img src="${path}asset/images/sketches/consulting-sketch.png" alt="Consulting">
                                    </div>
                                    <div class="dropdown-item-content">
                                        <h4>Consulting</h4>
                                        <p>Expert battery consulting services</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="${path}pages/insight/index.html" class="nav-link">Insight</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div class="nav-right">
                <a href="${path}pages/contact/index.html" class="contact-btn">Contact</a>
            </div>
            
            <div class="header-bg"></div>
        </div>
    </header>
  `;
  
  targetElement.innerHTML = headerHTML;
}

/**
 * Get the relative path to the root directory based on the current page
 * @returns {string} The relative path prefix
 */
function getRelativePath() {
  const path = window.location.pathname;
  
  if (path.includes('/pages/')) {
    if (path.match(/\/pages\/[^\/]+\/[^\/]+\//)) {
      // Deeper nested page (e.g., /pages/products/battery-cells.html)
      return '../../';
    } else {
      // First level page (e.g., /pages/products/index.html)
      return '../../';
    }
  }
  
  // Root level page (e.g., /index.html)
  return '';
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  const dropdownLinks = document.querySelectorAll('.nav-link.has-dropdown');
  const header = document.querySelector('.header');
  
  if (mobileMenuToggle && navList) {
    mobileMenuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      header.classList.toggle('header-with-dropdown');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav') && !event.target.closest('.mobile-menu-toggle')) {
        navList.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        
        // Close all dropdowns
        dropdownLinks.forEach(link => {
          link.parentElement.classList.remove('dropdown-active');
        });
        
        // Remove header background if no dropdown is active
        if (!document.querySelector('.dropdown-active')) {
          header.classList.remove('header-with-dropdown');
        }
      }
    });
    
    // Close menu when window is resized to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
        navList.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        
        // Close all dropdowns
        dropdownLinks.forEach(link => {
          link.parentElement.classList.remove('dropdown-active');
        });
        
        // Remove header background if no dropdown is active
        if (!document.querySelector('.dropdown-active')) {
          header.classList.remove('header-with-dropdown');
        }
      }
    });
    
    // Mobile dropdown toggle
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (window.innerWidth < 768) {
          e.preventDefault();
          this.parentElement.classList.toggle('dropdown-active');
          header.classList.add('header-with-dropdown');
          
          // Close other dropdowns
          dropdownLinks.forEach(otherLink => {
            if (otherLink !== this) {
              otherLink.parentElement.classList.remove('dropdown-active');
            }
          });
        }
      });
      
      // Add hover event for desktop
      link.parentElement.addEventListener('mouseenter', function() {
        if (window.innerWidth >= 768) {
          header.classList.add('header-with-dropdown');
        }
      });
      
      link.parentElement.addEventListener('mouseleave', function() {
        if (window.innerWidth >= 768) {
          header.classList.remove('header-with-dropdown');
        }
      });
    });
  }
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (fadeElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL but don't scroll again
        history.pushState(null, null, targetId);
      }
    });
  });
}

/**
 * Event calendar functionality
 */
function initEventCalendar() {
  const calendar = document.querySelector('.calendar');
  
  if (calendar) {
    // Get current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Update calendar header
    const calendarHeader = calendar.querySelector('.calendar-header-title');
    if (calendarHeader) {
      calendarHeader.textContent = new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
    
    // Previous month button
    const prevMonthBtn = calendar.querySelector('.calendar-prev');
    if (prevMonthBtn) {
      prevMonthBtn.addEventListener('click', function() {
        // Implementation for previous month
        console.log('Previous month clicked');
      });
    }
    
    // Next month button
    const nextMonthBtn = calendar.querySelector('.calendar-next');
    if (nextMonthBtn) {
      nextMonthBtn.addEventListener('click', function() {
        // Implementation for next month
        console.log('Next month clicked');
      });
    }
    
    // Event click handler
    const calendarEvents = calendar.querySelectorAll('.calendar-event');
    calendarEvents.forEach(event => {
      event.addEventListener('click', function() {
        const eventId = this.getAttribute('data-event-id');
        console.log('Event clicked:', eventId);
        // Show event details or redirect to event page
      });
    });
  }
}

/**
 * Form validation
 */
function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input, textarea, select');
  let isValid = true;
  
  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
    
    // Email validation
    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        isValid = false;
        input.classList.add('is-invalid');
      }
    }
  });
  
  return isValid;
}

/**
 * Contact form submission
 */
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm(this)) {
        // For GitHub Pages, we'll use a service like Formspree
        // This is a placeholder for the actual implementation
        console.log('Form submitted successfully');
        
        // Show success message
        const formSuccess = document.createElement('div');
        formSuccess.className = 'form-success';
        formSuccess.textContent = 'Thank you for your message. We will get back to you soon.';
        
        contactForm.innerHTML = '';
        contactForm.appendChild(formSuccess);
      }
    });
  }
});

/**
 * Search functionality
 */
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      
      if (query.length > 2) {
        // This would typically be an API call
        // For static sites, we can use a pre-generated JSON file with all searchable content
        console.log('Searching for:', query);
        
        // Placeholder for search results
        searchResults.innerHTML = `
          <div class="search-result-item">
            <h4>Sample Result for "${query}"</h4>
            <p>This is a sample search result that would match the query "${query}"...</p>
            <a href="#" class="btn btn-sm">View Details</a>
          </div>
        `;
        
        searchResults.style.display = 'block';
      } else {
        searchResults.style.display = 'none';
      }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.search-container')) {
        searchResults.style.display = 'none';
      }
    });
  }
}

/**
 * Product filtering
 */
function initProductFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');
  
  if (filterButtons.length && productItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        productItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
}

/**
 * Sticky header on scroll and header over video
 */
function initStickyHeader() {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  const hero = document.querySelector('.hero');
  
  function updateHeaderClass() {
    // Check if header is over video (hero section)
    if (hero && window.scrollY < hero.offsetHeight) {
      header.classList.add('header-over-video');
    } else {
      header.classList.remove('header-over-video');
    }
    
    // Add sticky class when scrolled down
    if (window.scrollY > headerHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
  
  // Initial call
  updateHeaderClass();
  
  // Update on scroll
  window.addEventListener('scroll', updateHeaderClass);
}

/**
 * Insert footer HTML directly into the target element
 * @param {HTMLElement} targetElement - Element to insert the footer into
 */
function insertFooter(targetElement) {
  // Get the current path to determine relative paths for assets
  const path = getRelativePath();
  
  const footerHTML = `
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-info">
                    <div class="footer-logo">
                        <img src="${path}asset/SIG ENERGY TECHNOLOGY - logo static.png" alt="SIG Energy Technology Logo">
                    </div>
                </div>
                
                <div class="footer-links-container">
                    <ul class="footer-links">
                        <li class="footer-link"><a href="${path}pages/products/index.html">Products</a></li>
                        <li class="footer-link"><a href="${path}pages/solutions/index.html">Solutions</a></li>
                        <li class="footer-link"><a href="${path}pages/insight/index.html">Insight</a></li>
                        <li class="footer-link"><a href="${path}pages/contact/index.html">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-links-container">
                    <h4 class="footer-title">Associations</h4>
                    <ul class="footer-links">
                        <li class="footer-link"><a href="#">AVEM</a></li>
                        <li class="footer-link"><a href="#">AFBE</a></li>
                        <li class="footer-link"><a href="#">AVERE</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h4 class="footer-title">Contact Us</h4>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt contact-icon"></i>
                        <div>Paris, France</div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope contact-icon"></i>
                        <div>info@sig-innotech.com</div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone contact-icon"></i>
                        <div>+33 (0)1 XX XX XX XX</div>
                    </div>
                    
                    <div class="footer-social">
                        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 SIG Energy Technology. All rights reserved. <a href="${path}pages/contact/terms.html">Terms & Conditions</a></p>
            </div>
        </div>
    </footer>
  `;
  
  targetElement.innerHTML = footerHTML;
}

// Initialize additional components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initSearch();
  initProductFilter();
  initStickyHeader();
});
